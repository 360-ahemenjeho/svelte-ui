<script lang="ts">
  import { colors, flareColor, sizes } from "./constants";

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
  let glassCoords: ButtonGlassCoords = $state({ x: 0, y: 0 });

  const radius: string = fullround ? "rounded-full" : "rounded-lg";
  const pointer: string = disabled
    ? "cursor-none pointer-events-none"
    : "cursor-pointer";
  const shadow: string = variation !== "bare" && !disabled ? "shadow-md" : "";
  const flare: string =
    variation === "default" && !disabled ? "button_flare" : "";
  const _state: keyof ButtonStates = disabled ? "disabled" : "active";

  function handleMouseEnter() {
    showGlass = true;
  }

  function handleMouseLeave() {
    showGlass = false;
  }

  function handleMouseMove(event: any) {
    if (!button) return;
    const rect = button.getBoundingClientRect();
    glassCoords.x = event.clientX - rect.left;
    glassCoords.y = event.clientY - rect.top;
  }
</script>

<button
  bind:this={button}
  class={`inline-flex items-center gap-1 leading-none  border transition-colors duration-700 ${shadow} ${pointer} ${colors[_state][variation][color]} ${sizes[size]} ${radius} ${flare}`}
  {onclick}
  style:--flare-color-primary={flareColor[color].primary}
  style:--flare-color-secondary={flareColor[color].secondary}
  onmouseenter={handleMouseEnter}
  onmouseleave={handleMouseLeave}
  onmousemove={handleMouseMove}
>
  {#if icon}
    {@render icon("14")}
  {/if}
  {label}
</button>

<style>
  .button_flare {
    position: relative;
    isolation: isolate;
    z-index: 0;
  }

  .button_flare::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background-image: linear-gradient(
      var(--flare-color-primary),
      var(--flare-color-secondary) 50%
    );
    z-index: -1;
    transition: filter 0.75s ease-in-out;
    filter: brightness(1.3) contrast(1.1);
  }

  .button_flare:hover::before {
    filter: brightness(2) contrast(1.5);
  }
</style>
