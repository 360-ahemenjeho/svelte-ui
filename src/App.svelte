<script lang="ts">
  import { Button } from "@/lib/components";

  function handleClick(event: any) {
    console.log("event -> ", event);
    alert("Button clicked!");
  }
</script>

<main>
  <h1 class="text-accent-brown-primary font-bold text-display">
    Accent blue primary
  </h1>
  <Button text="View" onclick={handleClick} />
</main>
