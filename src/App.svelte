<script lang="ts">
  import { Button } from "@/lib/components";

  function handleClick(event: any) {
    console.log("event -> ", event);
    alert("Button clicked!");
  }
</script>

<main>
  <h1 class="font-bold text-display">Accent blue primary</h1>

  <h1 class="font-bold text-headline">Default Size</h1>
  <div class="flex gap-2">
    <Button text="View" onclick={handleClick} />
    <Button text="Edit" color="neutral" onclick={handleClick} />
    <Button text="Delete" color="danger" onclick={handleClick} />
  </div>
  <h1 class="font-bold text-headline">Small Size</h1>
  <div class="flex gap-2">
    <Button text="View" size="small" onclick={handleClick} />
    <Button text="Edit" size="small" color="neutral" onclick={handleClick} />
    <Button text="Delete" size="small" color="danger" onclick={handleClick} />
  </div>
  <h1 class="font-bold text-headline">Large Size</h1>
  <div class="flex gap-2">
    <Button text="View" size="large" onclick={handleClick} />
    <Button text="Edit" size="large" color="neutral" onclick={handleClick} />
    <Button text="Delete" size="large" color="danger" onclick={handleClick} />
  </div>
</main>
