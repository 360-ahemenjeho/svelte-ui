import type { Snippet } from "svelte";

export {};

declare global {
  interface Button {
    text: string;
    size?: "small" | "default" | "large";
    color?: "primary" | "neutral" | "danger";
    variant?: "default" | "alternative" | "bare";
    fullround?: boolean;
    onclick?: (event: MouseEvent<HTMLButtonElement>) => void;
  }
}
