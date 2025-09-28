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
  const flare: string = variation === "default" && !disabled ? "flare" : "";
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
  class={`inline-flex items-center gap-1 leading-none  border transition-colors duration-700 relative isolate z-0 overflow-hidden ${shadow} ${pointer} ${colors[_state][variation][color]} ${sizes[size]} ${radius} ${flare}`}
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
  {#if showGlass}
    <div
      class="glass"
      style:left={glassCoords.x + "px"}
      style:top={glassCoords.y + "px"}
    ></div>
  {/if}
</button>

<style>
  .flare::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
      var(--flare-color-primary),
      var(--flare-color-secondary) 50%
    );
    z-index: -1;
    transition: filter 0.75s ease-in-out;
    filter: brightness(1.3) contrast(1.1);
  }

  .flare:hover::before {
    filter: contrast(1.5);
  }

  .glass {
    --size: 24px;
    position: absolute;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);
    pointer-events: none;
    transform: translate(-50%, -50%);
    backdrop-filter: blur(2px) brightness(1.2);
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 60%,
      transparent 100%
    );
    box-shadow:
      inset 0 0 6px rgba(255, 255, 255, 0.3),
      inset 0 0 8px rgba(255, 255, 255, 0.1),
      0 0 6px rgba(255, 255, 255, 0.2);
    transition: opacity 0.3s ease;
    z-index: 0;
  }
</style>
