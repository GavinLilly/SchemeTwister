export class SinglePlayerError extends Error {
  constructor() {
    super('This scheme is not playable in single-player mode');
  }
}
