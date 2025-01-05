export default class InvalidImageFileError extends Error {
  constructor(message = "The provided image file is invalid") {
    super(message);
    this.name = "InvalidImageFileError";
  }
}
