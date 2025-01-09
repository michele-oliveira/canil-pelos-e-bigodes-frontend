export const validateImageFile = (file) => {
  const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];

  return validImageTypes.includes(file.type);
};

export const getFileFromUrl = async (url) => {
  const name = url.substring(url.lastIndexOf("/") + 1);
  const fetchedFile = await fetch(url);
  const blob = await fetchedFile.blob();
  const file = new File([blob], name, { type: blob.type });
  return file;
};
