import React, { useRef, useState } from "react";
import { IoMdCloudUpload as UploadIcon } from "react-icons/io";
import PropTypes from "prop-types";
import { validateImageFile } from "../utils/files";
import InvalidImageFileError from "../errors/files/InvalidImageFileError";
import InvalidFileAmountSelectedError from "../errors/files/InvalidFileAmountSelectedError";

const ImageDrop = ({
  id,
  name,
  image,
  setImage,
  onChange,
  onError,
  className,
}) => {
  const [dragActive, setDragActive] = useState(false);

  const inputRef = useRef(null);

  const imageUrl = image && window.URL.createObjectURL(image);

  const validateFile = (file) => {
    console.log("executou");
    if (!validateImageFile(file)) {
      throw new InvalidImageFileError(
        "Invalid image type. Only JPG, JPEG and PNG images are allowed"
      );
    }
  };

  const validateFileAmount = (files) => {
    if (files.length !== 1) {
      throw new InvalidFileAmountSelectedError(
        "Invalid file amount selected. Only one image must be provided"
      );
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      try {
        if (setImage) {
          const droppedFile = e.dataTransfer.files[0];
          validateFileAmount(e.dataTransfer.files);
          validateFile(droppedFile);

          setImage(droppedFile);
        } else if (onChange) {
          const droppedFile = e.dataTransfer.files[0];
          validateFileAmount(e.dataTransfer.files);
          validateFile(droppedFile);

          const customEventWithIdentifiers = {
            ...e,
            target: {
              ...e.target,
              id,
              name,
            },
          };
          onChange(customEventWithIdentifiers);
        } else {
          throw new Error(
            "Either 'setImage' or 'onChange' props must be passed to ImageDrop"
          );
        }

        e.dataTransfer.clearData();
      } catch (error) {
        console.error("Error in handleDrop:", error);
        onError(error);
      }
    }
  };

  const handleFileSelect = (e) => {
    try {
      if (setImage) {
        if (e.target.files) {
          const selectedFile = e.target.files[0];
          validateFileAmount(e.target.files);
          validateFile(selectedFile);
          setImage(selectedFile);
        }
      } else if (onChange) {
        if (e.target.files) {
          const droppedFile = e.target.files[0];
          validateFileAmount(e.target.files);
          validateFile(droppedFile);
          onChange(e);
        }
      } else {
        throw new Error(
          "Either 'setImage' or 'onChange' props must be passed to ImageDrop"
        );
      }
    } catch (error) {
      console.error("Error in handleFileSelect:", error);
      onError(error);
    }
  };

  const handleBrowseFiles = () => {
    inputRef.current?.click();
  };

  return (
    <div
      className={
        "flex flex-col items-center justify-center w-full " + className
      }
    >
      <button
        type="button"
        onClick={handleBrowseFiles}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`flex items-center justify-center w-full h-full overflow-hidden border-2 ${
          image ? "border-inherit" : "border-dashed"
        } rounded-lg cursor-pointer focus:outline-none 
      ${
        dragActive
          ? "border-blue-500 bg-blue-100"
          : "border-gray-500 bg-gray-700"
      }`}
      >
        <input
          id={id}
          name={name}
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleFileSelect}
          className="hidden"
        />
        {image ? (
          <img
            src={imageUrl}
            alt={`Uploaded ${image.name}`}
            className={`w-full h-full object-cover ${
              dragActive ? "bg-blue-500 opacity-60" : ""
            }`}
          />
        ) : (
          <div className="flex flex-col w-3/4 pt-2 justify-center">
            <p className="mb-1 text-center">
              Arraste e solte uma imagem aqui, ou clique para selecionar do seu
              dispositivo
            </p>
            <span className="flex items-center justify-center text-5xl">
              <UploadIcon />
            </span>
          </div>
        )}
      </button>
    </div>
  );
};

ImageDrop.propTypes = {
  image: PropTypes.object,
  setImage: PropTypes.func,
  onChange: PropTypes.func,
  onError: PropTypes.func.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
};

export default ImageDrop;
