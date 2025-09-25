<script lang="ts">
  const { text, onclick }: Button = $props();
</script>

<button
  class="bg-accent-brown-primary py-2.5 px-4 rounded-lg border border-accent-brown-secondary text-body text-neutral-low cursor-pointer leading-none"
  {onclick}
>
  {text}
</button>
