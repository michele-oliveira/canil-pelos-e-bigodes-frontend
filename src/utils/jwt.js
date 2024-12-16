export const saveJwt = (token) => localStorage.setItem("accessToken", token);

export const getJwt = () => localStorage.getItem("accessToken");

export const deleteJwt = () => localStorage.removeItem("accessToken");

export const decodeJwt = (token) => {
  if (!token) {
    return;
  }

  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  const jsonPayload = JSON.parse(window.atob(base64));

  return jsonPayload;
};

export const isValidJwt = (token) => {
  const parts = token.split(".");
  if (parts.length !== 3) {
    return false;
  }

  const [header, payload, signature] = parts;
  const base64Pattern = /^[A-Za-z0-9-_]+={0,2}$/;

  return (
    base64Pattern.test(header) &&
    base64Pattern.test(payload) &&
    base64Pattern.test(signature)
  );
};
