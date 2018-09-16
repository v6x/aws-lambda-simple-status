export interface ILogger {
  warn: (message: string) => void;
  debug: (message: string) => void;
}

export const consoleLogger = {
  error: console.error,
  warn: console.warn,
  info: console.info,
  debug: console.debug,
  trace: console.trace,
};
