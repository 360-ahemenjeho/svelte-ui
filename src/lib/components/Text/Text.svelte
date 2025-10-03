<script lang="ts">
  import { fonts, leads, weights } from "./data";

  const {
    font = "body",
    weight = "speak",
    lead = "flow",
    appearance,
    children,
  }: FontText = $props();
</script>

<p class={`${appearance} ${fonts[font]} ${weights[weight]} ${leads[lead]}`}>
  {@render children()}
</p>
