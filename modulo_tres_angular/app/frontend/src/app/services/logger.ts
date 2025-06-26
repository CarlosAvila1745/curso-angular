export interface Logger {
  log(msg: string): void;
}

export class ConsoleLogger implements Logger {
  log(msg: string) {
    console.log('LOG:', msg);
  }
}
