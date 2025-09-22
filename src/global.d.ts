export {};

declare global {
  interface Button {
    text: string;
    onclick?: (event: MouseEvent<HTMLButtonElement>) => void;
  }
}
