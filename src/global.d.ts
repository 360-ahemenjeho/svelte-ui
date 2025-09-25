import type { Component, Snippet } from "svelte";

export {};

declare global {
  interface Button {
    label: string;
    size?: "small" | "default" | "large";
    color?: "primary" | "neutral" | "danger";
    variation?: "default" | "alternate" | "bare";
    fullround?: boolean;
    onclick?: (event: MouseEvent<HTMLButtonElement>) => void;
    icon?: Snippet<[size: string]>;
    disabled?: boolean;
  }

  interface Flow {
    vertical?: boolean;
    space?: "default" | "section";
    align?: "start" | "center" | "end" | "stretch";
    justify?: "start" | "center" | "end" | "between" | "around";
    wrap?: boolean;
    children: Snippet;
  }
}
