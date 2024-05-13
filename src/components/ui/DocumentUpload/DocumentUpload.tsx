import React, { useState } from "react";
import { useField, FieldAttributes, useFormikContext } from "formik";
import styles from "./DocumentUpload.module.scss";
import { Button, ErrorMessage } from "@/components/ui";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";
import { cn } from "@/lib";

interface DocumentUploadProps {
  name: string;
  accept: string;
  allowedSize: number;
}

export const DocumentUpload: React.FC<
  DocumentUploadProps & FieldAttributes<any>
> = ({ name, accept, allowedSize, ...rest }) => {
  const { setFieldValue, setFieldError } = useFormikContext();
  const [field, meta] = useField(name);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      if (file.size > allowedSize) {
        // File size validation
        setFieldError(
          name,
          `File size should be less than ${allowedSize / 1024 / 1024}MB`
        );
      } else {
        setFieldValue(name, file);

        const reader = new FileReader();
        reader.onload = () => {
          setFilePreview(reader.result as string);
        };
        if (file.type.includes("image")) {
          reader.readAsDataURL(file);
        } else {
          setFilePreview(reader.result as string); // Clear file preview for non-image files
        }
      }
    } else {
      // File was removed, you can perform your action here
      // For example, clear any error messages and reset the preview
      setFieldError(name, null);
      setFieldValue(name, "");
      setFilePreview(null);
    }
  };

  const handleRemoveFile = () => {
    setFieldValue(name, "");
    setFilePreview(null);
  };

  const renderFilePreview = () => {
    if (filePreview) {
      if (filePreview.startsWith("data:image")) {
        return (
          <div
            className={cn(
              "w-full items-centered relative grow overflow-clip flex flex-col bg-upload-gray justify-center items-center gap-4 rounded-2xl border-2 border-dashed border-gray-100",
              meta.error && "border-red"
            )}
          >
            <div className="">
              <Image
                src={filePreview}
                alt="File Preview"
                className={styles["document-upload-preview-img"]}
                width={100}
                height={100}
              />
            </div>
            <div className="">{field.value.name}</div>
            <Button
              type="button"
              color="red"
              onClick={handleRemoveFile}
              size="sm"
              variant="outlinedanger"
              leftIcon={<AiOutlineDelete className="h-5 w-auto" />}
            >
              Remove
            </Button>
          </div>
        );
      } else {
        return (
          <div
            className={cn(
              "w-full items-centered relative grow overflow-clip flex flex-col bg-primary justify-center items-center gap-4 rounded-2xl border-2 border-dashed border-gray-100",
              meta.error && "border-red"
            )}
          >
            <div className="">File: {field.value.name}</div>
            <Button
              type="button"
              size="sm"
              variant="outlinedanger"
              leftIcon={<AiOutlineDelete className="h-5 w-auto" />}
              onClick={handleRemoveFile}
            >
              Remove
            </Button>
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div className={"w-full"}>
      <div>
        {renderFilePreview() || (
          <div>
            <label htmlFor="uploadFront">
              <input
                type="file"
                id={name}
                accept={accept}
                onChange={handleFileChange}
                {...rest}
              ></input>
            </label>
          </div>
        )}
      </div>
      {meta.touched && meta.error && <ErrorMessage message={meta.error} />}
    </div>
  );
};
