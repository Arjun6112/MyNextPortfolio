"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const UploadFile = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && (
        <CldImage alt="My Photo" src={publicId} height={270} width={180} />
      )}
      <CldUploadWidget
        onUpload={(result, widget) => {
          if (result.event !== "success") {
            return;
          }
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
        uploadPreset="qfsrhqik"
      >
        {({ open }) => (
          <button onClick={() => open()} className=" m-5 btn btn-secondary">
            Upload files
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadFile;
