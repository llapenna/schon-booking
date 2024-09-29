"use client";
import { FileIcon, LoaderCircleIcon } from "lucide-react";
import { DragEventHandler, useRef, useState } from "react";

export const formatSize = (size: number) => {
  const units = ["B", "KB", "MB", "GB", "TB"];

  let unitIndex = 0;
  while (size >= 1024) {
    size /= 1024;
    unitIndex++;
  }

  return `${size.toFixed(2)} ${units[unitIndex]}`;
};

interface DropAreaProps {
  mulitple?: boolean;
  accept?: string;
  placeholder?: string;
  isLoading?: boolean;
  onFileChange: (files: File) => void;
}

export const DropArea = ({
  accept,
  placeholder = "Drag files here, or click to select files",
  isLoading = false,
  onFileChange,
}: DropAreaProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFileState] = useState<File | null>(null);

  const setFile = (changedFile: File) => {
    onFileChange?.(changedFile);
    setFileState(changedFile);
  };
  const openFilePicker = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const onFileDrop: DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const file = event.dataTransfer.files[0];
    if (file) setFile(file);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length) {
      setFile(files[0]);
    }
  };

  const onDragEnd = (event: React.DragEvent<HTMLDivElement>) =>
    event.preventDefault();
  const onDragOver = (event: React.DragEvent<HTMLDivElement>) =>
    event.preventDefault();

  return (
    <div
      onClick={openFilePicker}
      onDrop={onFileDrop}
      {...{ onDragEnd, onDragOver }}
      className="w-full p-4 border-dashed rounded-md border-2 border-gray-200 flex flex-col items-center justify-center hover:border-gray-400 transition-colors cursor-pointer"
    >
      {isLoading ? (
        <LoaderCircleIcon size={16} className="animate-spin" />
      ) : (
        <FileIcon size={16} />
      )}

      {file ? (
        <div key={file.name} className="flex flex-col items-center gap-1">
          <span>{file.name}</span>
          <span>{formatSize(file.size)}</span>
        </div>
      ) : (
        <span>{placeholder}</span>
      )}

      <input
        type="file"
        className="hidden invisible opacity-0"
        ref={inputRef}
        onChange={onInputChange}
        accept={accept}
      />
    </div>
  );
};
