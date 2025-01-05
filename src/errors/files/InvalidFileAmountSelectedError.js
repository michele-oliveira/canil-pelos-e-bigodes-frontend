export default class InvalidFileAmountSelectedError extends Error {
  constructor(message = "Invalid amount of files provided") {
    super(message);
    this.name = "InvalidFileAmountSelectedError";
  }
}
