<script lang="ts">
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

  const colors: ButtonStates = {
    active: {
      default: {
        primary:
          "bg-accent-brown-primary hover:bg-accent-brown-secondary border-accent-brown-secondary hover:border-accent-brown-tertiary text-neutral-low hover:text-neutral-low/85",
        neutral:
          "bg-surface-opaque-primary hover:bg-surface-opaque-secondary hover:border-surface-opaque-tertiary border-surface-opaque-secondary text-foreground-opaque-primary hover:text-foreground-opaque-primary/85",
        danger:
          "bg-accent-red-primary hover:bg-accent-red-secondary border-accent-red-secondary hover:border-accent-red-tertiary text-neutral-low hover:text-neutral-low/85",
      },
      alternate: {
        primary:
          "bg-surface-opaque-quinary hover:bg-surface-opaque-quaternary border-surface-opaque-primary/35 hover:border-surface-opaque-primary/55 text-accent-brown-primary hover:text-accent-brown-primary/85",
        neutral:
          "bg-surface-opaque-quinary hover:bg-surface-opaque-quaternary border-surface-opaque-primary/35 hover:border-surface-opaque-primary/55 text-foreground-opaque-primary hover:text-foreground-opaque-primary/85",
        danger:
          "bg-surface-opaque-quinary hover:bg-surface-opaque-quaternary border-surface-opaque-primary/35 hover:border-surface-opaque-primary/55 text-accent-red-primary hover:text-accent-red-primary/85",
      },
      bare: {
        primary:
          "bg-transparent border-transparent text-accent-brown-primary hover:text-accent-brown-primary/85",
        neutral:
          "bg-transparent border-transparent text-foreground-opaque-primary hover:text-foreground-opaque-primary/85",
        danger:
          "bg-transparent border-transparent text-accent-red-primary hover:accent-opaque-primary/85",
      },
    },
    disabled: {
      default: {
        primary:
          "bg-accent-brown-quinary border-accent-brown-quinary text-accent-brown-quaternary",
        neutral:
          "bg-surface-opaque-quinary border-surface-opaque-quinary text-foreground-opaque-quinary",
        danger:
          "bg-accent-red-quinary border-accent-red-quinary text-accent-red-quaternary",
      },
      alternate: {
        primary:
          "bg-accent-brown-quinary border-accent-brown-quinary text-accent-brown-quaternary",
        neutral:
          "bg-surface-opaque-quinary border-surface-opaque-quinary text-foreground-opaque-quinary",
        danger:
          "bg-accent-red-quinary border-accent-red-quinary text-accent-red-quaternary",
      },
      bare: {
        primary:
          "bg-transparent border-transparent text-accent-brown-primary/55",
        neutral:
          "bg-transparent border-transparent text-foreground-opaque-primary/55",
        danger: "bg-transparent border-transparent text-accent-red-primary/55",
      },
    },
  };

  const sizes: Record<SizeKeys, string> = {
    small: "py-1.5 px-3 text-body",
    default: "py-2 px-4 text-body",
    large: "py-3 px-5 text-body",
  };

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
  class={`inline-flex items-center gap-1 leading-none  border transition-colors duration-75 ${shadow} ${pointer} ${colors[_state][variation][color]} ${sizes[size]} ${radius} ${effect}`}
  {onclick}
  style="--button-effect-color-primary: {effectColor[color]
    .primary}; --button-effect-color-secondary: {effectColor[color].secondary}"
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
      var(--button-effect-color-primary),
      var(--button-effect-color-secondary) 50%
    );
    z-index: -1;
    transition: opacity 0.75s ease-in-out;
  }
  .button__effect:hover::before {
    opacity: 0.75;
  }
</style>
