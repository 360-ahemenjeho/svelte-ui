<script lang="ts">
  const { text = "Label", onclick }: Button = $props();
</script>

<button
  class="bg-accent-blue-primary py-1.5 px-3 rounded-md border-t-2 border-t-accent-blue-secondary text-body text-neutral-low cursor-pointer"
  {onclick}>{text}</button
>
