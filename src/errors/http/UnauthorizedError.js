export default class UnauthorizedError extends Error {
  constructor(message = "Unauthorized Access") {
    super(message);
    this.name = "UnauthorizedError";
    this.statusCode = 401;
  }
}
