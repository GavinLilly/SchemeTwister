export class CardChosenError extends Error {
  constructor(message: string) {
    super(message);
    this.message = message;
  }
}
