export default class InvalidPropsError extends Error {
  constructor(message = "Props provided to this component are invalid") {
    super(message);
    this.name = "InvalidPropsError";
  }
}
