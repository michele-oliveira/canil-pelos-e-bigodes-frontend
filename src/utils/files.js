export const validateImageFile = (file) => {
  const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];

  return validImageTypes.includes(file.type);
};
