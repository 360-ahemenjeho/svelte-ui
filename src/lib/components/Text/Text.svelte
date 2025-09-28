<script lang="ts">
  import { fonts, weights } from "./data";

  const { font = "body", weight = "speak" }: Text = $props();
</script>

<p class={`${fonts[font]} ${weights[weight]}`}></p>
