import { useFileContext } from "@/contexts/FileContext";
import React, { ChangeEvent, useEffect, useState } from "react";
import CardGLB from "./CardGLB";
import { CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { FilePlus2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ListCards: React.FC = () => {
  const { fetchFiles, addFile, files, isLoading } = useFileContext();
  const [selectedFile, setSelectedFile] = useState<File>();
  useEffect(() => {
    fetchFiles();
  }, []);
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.name.endsWith(".glb")) {
        setSelectedFile(file);
      } else {
        alert("Please select a .glb file.");
      }
    }
  };

  return (
    <section className="mb-8">
      <CardTitle className="flex flex-wrap items-center gap-4 px-20 py-6">
        File list
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button>
              <FilePlus2 className="mr-2 h-4 w-4" />
              Add glb file
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Add .glb file</AlertDialogTitle>
              <AlertDialogDescription>
                When added the file will be available on the list
              </AlertDialogDescription>
              <Input
                id="picture"
                type="file"
                accept=".glb" // Allow only .glb files
                onChange={handleFileChange}
              />
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => addFile(selectedFile as File)}>
                Add File
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardTitle>
      <section className="flex flex-wrap  gap-4 px-20 pb-10">
        {isLoading && <p>loading...</p>}
        {files.map((file, index) => (
          <CardGLB glbFIle={file} key={index} />
        ))}
      </section>
    </section>
  );
};

export default ListCards;
