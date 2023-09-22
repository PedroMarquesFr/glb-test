import FilesService from "@/services/FilesService";
import React, { createContext, useContext, useState } from "react";
import { useUserContext } from "./UserContext";
import { AxiosError } from "axios";
import { toast } from "@/components/ui/use-toast";

type ContextProps = {
  fetchFiles: () => Promise<void>;
  addFile: (file: File) => Promise<void>;
  files: GLBFile[];
  isLoading: boolean;
};
const FileContext = createContext<ContextProps>({
  fetchFiles: async () => {},
  addFile: async () => {},
  files: [],
  isLoading: false
});
type Props = {
  children: JSX.Element;
};

export const FileProvider: React.FC<Props> = ({ children }) => {
  const [files, setFiles] = useState<GLBFile[]>([]);
  const [isLoading, setIsLoading] = useState(false)
  const userContext = useUserContext();

  const fetchFiles = async () => {
    setIsLoading(true);
    const token = userContext.getToken();
    let result;
    try {
      result = await FilesService.fetchPosts(token as string);
    } catch (error) {
      setIsLoading(false);
      const axiosError = error as AxiosError;
      toast({
        title: "An error accurred:",
        description: axiosError.message,
      });
      return;
    }
    setIsLoading(false);
    setFiles(result as GLBFile[]);
  };
  const addFile = async (file: File) => {
    const token = userContext.getToken();
    let result;
    result = await FilesService.uploadPost(token as string, file);
    console.log(result);
  };

  const contextValue = { fetchFiles, addFile, files, isLoading };
  return (
    <FileContext.Provider value={contextValue}>{children}</FileContext.Provider>
  );
};

export const useFileContext = () => {
  const context = useContext(FileContext);
  if (context === undefined) {
    throw new Error("useFileContext must be used within a FileProvider");
  }
  return context;
};
