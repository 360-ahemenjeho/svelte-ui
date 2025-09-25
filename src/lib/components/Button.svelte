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

  type VariationKeys = NonNullable<Button["variation"]>;
  type ColorKeys = NonNullable<Button["color"]>;

  const colors: Record<VariationKeys, Record<ColorKeys, string>> = {
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
        "bg-surface-opaque-quinary hover:bg-surface-opaque-quaternary border-surface-opaque-primary hover:border-surface-opaque-secondary text-accent-brown-primary hover:text-accent-brown-primary/85",
      neutral:
        "bg-surface-opaque-quinary hover:bg-surface-opaque-quaternary border-surface-opaque-primary hover:border-surface-opaque-secondary text-foreground-opaque-primary hover:text-foreground-opaque-primary/85",
      danger:
        "bg-surface-opaque-quinary hover:bg-surface-opaque-quaternary border-surface-opaque-primary hover:border-surface-opaque-secondary text-accent-red-primary hover:text-accent-red-primary/85",
    },
    bare: {
      primary:
        "bg-transparent border-transparent text-accent-brown-primary hover:text-accent-brown-primary/85",
      neutral:
        "bg-transparent border-transparent text-foreground-opaque-primary hover:text-foreground-opaque-primary/85",
      danger:
        "bg-transparent border-transparent text-accent-red-primary hover:accent-opaque-primary/85",
    },
  };

  const disabledColors: Record<VariationKeys, Record<ColorKeys, string>> = {
    default: {
      primary:
        "bg-accent-brown-quinary border-accent-brown-quinary text-accent-brown-quaternary",
      neutral:
        "bg-surface-opaque-quinary border-surface-opaque-quinary text-surface-opaque-quaternary",
      danger:
        "bg-accent-red-quinary border-accent-red-quinary text-accent-red-quaternary",
    },
    alternate: {
      primary:
        "bg-accent-brown-quinary border-accent-brown-quinary text-accent-brown-quaternary",
      neutral:
        "bg-surface-opaque-quinary border-surface-opaque-quinary text-surface-opaque-quaternary",
      danger:
        "bg-accent-red-quinary border-accent-red-quinary text-accent-red-quaternary",
    },
    bare: {
      primary:
        "bg-transparent border-transparent text-accent-opaque-primary/55",
      neutral:
        "bg-transparent border-transparent text-foreground-opaque-primary/55",
      danger: "bg-transparent border-transparent text-accent-opaque-primary/55",
    },
  };

  type SizeKeys = NonNullable<Button["size"]>;

  const sizes: Record<SizeKeys, string> = {
    small: "py-1.5 px-3 text-body",
    default: "py-2 px-4 text-body",
    large: "py-3 px-5 text-body",
  };

  const radius: string = fullround ? "rounded-full" : "rounded-lg";
  const pointer: string = disabled
    ? "cursor-none pointer-events-none"
    : "cursor-pointer";
</script>

<button
  class={`inline-flex items-center gap-1  leading-none shadow-md border transition-colors duration-75 ${pointer} ${disabled ? disabledColors[variation][color] : colors[variation][color]} ${sizes[size]} ${radius}`}
  {onclick}
>
  {#if icon}
    {@render icon("14")}
  {/if}
  {label}
</button>
