export default class InvalidMethodParamsError extends Error {
  constructor(message = "Method is missing or received invalid params") {
    super(message);
    this.name = "InvalidMethodParamsError";
  }
}
