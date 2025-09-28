<script lang="ts">
  import { colors, sizes } from "./constants";

  const {
    label,
    color = "primary",
    size = "default",
    variation = "default",
    fullround,
    onclick,
    icon,
    disabled = false,
  }: Button = $props();

  let button: HTMLButtonElement;
  let showGlass: boolean = $state(false);
  let glassCoords: ButtonGlassEffectCoords = $state({ x: 0, y: 0 });

  const radius: string = fullround ? "rounded-full" : "rounded-lg";
  const pointer: string = disabled
    ? "cursor-none pointer-events-none"
    : "cursor-pointer";
  const shadow: string = variation !== "bare" && !disabled ? "shadow-md" : "";
  const effect: string =
    variation === "default" && !disabled ? "button__effect" : "";
  const effectColor: Record<ColorKeys, ButtonEffectColors> = {
    primary: { primary: "#ffffffb7", secondary: "#ffffff00" },
    neutral: { primary: "#fffffff5", secondary: "#00000000" },
    danger: { primary: "#ffffffb7", secondary: "#ffffff00" },
  };
  const _state: keyof ButtonStates = disabled ? "disabled" : "active";
</script>

<button
  bind:this={button}
  class={`inline-flex items-center gap-1 leading-none  border transition-colors duration-700 ${shadow} ${pointer} ${colors[_state][variation][color]} ${sizes[size]} ${radius} ${effect}`}
  {onclick}
  style:--effect-color-primary={effectColor[color].primary}
  style:--effect-color-secondary={effectColor[color].secondary}
>
  {#if icon}
    {@render icon("14")}
  {/if}
  {label}
</button>

<style>
  .button__effect {
    position: relative;
    isolation: isolate;
    z-index: 0;
  }

  .button__effect::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background-image: linear-gradient(
      var(--effect-color-primary),
      var(--effect-color-secondary) 50%
    );
    z-index: -1;
    transition: filter 0.75s ease-in-out;
    filter: brightness(1.3) contrast(1.1);
  }

  .button__effect:hover::before {
    filter: brightness(2) contrast(1.5);
  }
</style>
