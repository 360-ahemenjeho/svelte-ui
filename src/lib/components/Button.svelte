<script lang="ts">
  const {
    text,
    color = "primary",
    size = "default",
    variant = "default",
    fullround,
    onclick,
  }: Button = $props();

  type ColorKeys = NonNullable<Button["color"]>;

  const colors: Record<ColorKeys, string> = {
    primary:
      "bg-accent-brown-primary hover:bg-accent-brown-secondary border-accent-brown-secondary hover:border-accent-brown-tertiary text-neutral-low hover:text-neutral-low/85",
    neutral:
      "bg-surface-opaque-primary hover:bg-surface-opaque-secondary hover:border-surface-opaque-tertiary border-surface-opaque-secondary text-foreground-opaque-primary hover:text-foreground-opaque-primary/85",
    danger:
      "bg-accent-red-primary hover:bg-accent-red-secondary border-accent-red-secondary hover:border-accent-red-tertiary text-neutral-low hover:text-neutral-low/85",
  };

  type SizeKeys = NonNullable<Button["size"]>;

  const sizes: Record<SizeKeys, string> = {
    small: "py-1.5 px-3 text-body",
    default: "py-2.5 px-4 text-body",
    large: "py-3.5 px-5 text-body",
  };

  const radius: string = fullround ? "rounded-full" : "rounded-lg";
</script>

<button
  class={`cursor-pointer leading-none shadow-md border transition-colors duration-75 ${colors[color]} ${sizes[size]} ${radius}`}
  {onclick}
>
  {text}
</button>
