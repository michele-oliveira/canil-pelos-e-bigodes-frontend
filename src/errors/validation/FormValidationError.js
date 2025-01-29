export default class FormValidationError extends Error {
  constructor(message = "One or more fields in the form are invalid") {
    super(message);
    this.name = "FormValidationError";
  }
}
