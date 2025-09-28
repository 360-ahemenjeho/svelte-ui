<script lang="ts">
  import { fonts, leads, weights } from "./data";

  const { font = "body", weight = "speak", lead, children }: Text = $props();
</script>

<p class={`${fonts[font]} ${weights[weight]} ${leads[lead]}`}>
  {@render children()}
</p>
