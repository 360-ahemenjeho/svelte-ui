<script lang="ts">
  const { text = "Label", onclick }: Button = $props();
</script>

<button
  class="bg-accent-blue-primary py-1.5 px-4 rounded-lg border border-accent-blue-secondary text-body text-neutral-low cursor-pointer font-semibold"
  {onclick}
>
  {text}
</button>
