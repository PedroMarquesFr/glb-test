import Header from "@/components/Header";
import { useFileContext } from "@/contexts/FileContext";
import React from "react";
import { Routes, Route, useParams } from "react-router-dom";

const FileInfo: React.FC<{ title: string; value: string | undefined }> = (
  props
) => {
  return (
    <section className="py-4 flex justify-between border-b border-silver-300">
      <h3 className="text-sm font-semibold">{props.title}</h3>
      <p className="text-xs text-slate-600 text-right">{props.value}</p>
    </section>
  );
};

const View: React.FC = () => {
  let { documentKey } = useParams();
  const { files } = useFileContext();
  const selectedFile = files.find(
    (file) => file.id == parseInt(documentKey as string)
  );
  if (!documentKey) {
    return <section>file id not found</section>;
  }
  return (
    <section className="">
      <Header />
      <section className="flex">
        <iframe className="w-4/6 h-[92vh]" src={selectedFile?.url} />
        <aside className="border-l border-silver-300 w-2/6 h-fill p-6">
          <h1 className="text-lg font-semibold">File Details</h1>
          <FileInfo title="Name" value={selectedFile?.name} />
          <FileInfo title="Key" value={selectedFile?.key} />
          {selectedFile?.size && (
            <FileInfo title="Size" value={`${selectedFile?.size / 1000}KB`} />
          )}
          <FileInfo title="Owner Email" value={selectedFile?.user?.email} />
          <FileInfo
            title="Owner Name"
            value={selectedFile?.user?.displayName}
          />
          <FileInfo title="Url" value={selectedFile?.url} />
          <FileInfo title="Published Date" value={selectedFile?.published} />
          <FileInfo title="Updated Date" value={selectedFile?.updated} />
          <FileInfo title="File Id" value={selectedFile?.id.toString()} />
        </aside>
      </section>
    </section>
  );
};

export default View;
