import FilesService from "@/services/FilesService";
import React, { createContext, useContext, useState } from "react";

const FileContext = createContext<any>(null);
type Props = {
  children: JSX.Element;
};

export const FileProvider: React.FC<Props> = ({ children }) => {
  const files = useState([]);
  const fetchFiles = async () => {
    // const result = await FilesService.fetchPosts(CookieService);

  }
  return <FileContext.Provider value={null}>{children}</FileContext.Provider>;
};

export const useFileContexte = () => {
  const context = useContext(FileContext);
  if (context === undefined) {
    throw new Error("useFileContext must be used within a FileProvider");
  }
  return context;
};
