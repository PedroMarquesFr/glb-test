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
import NoFilesIlustration from "../assets/undraw_searching_re_3ra9.svg";

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
              <AlertDialogAction
                onClick={async() => {
                  await addFile(selectedFile as File);
                  await fetchFiles();
                }}
              >
                Add File
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardTitle>
      <section className="flex flex-wrap gap-4 px-20 pb-10">
        {isLoading && <p>loading...</p>}
        {files.map((file, index) => (
          <CardGLB glbFIle={file} key={index} />
        ))}
        {files.length === 0 && (
          <section className="flex flex-col  justify-center items-center w-full h-[70vh]">
            <img
              src={NoFilesIlustration}
              alt="No Files Illustration"
              className="w-60 h-60"
            />
            <p className="mt-4 font-semibold">
              You don't have any files yet. You can add your first one using the
              button above
            </p>
          </section>
        )}
      </section>
    </section>
  );
};

export default ListCards;
