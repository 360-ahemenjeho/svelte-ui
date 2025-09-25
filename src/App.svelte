<script lang="ts">
  import { Button, Flow } from "@/lib/components";
  import { Play } from "svelte-heros-v2";

  function handleClick(event: any) {
    console.log("event -> ", event);
    alert("Button clicked!");
  }
</script>

<main>
  <h1 class="font-bold text-display">Accent blue primary</h1>

  <Flow vertical space="section">
    <Flow vertical>
      <h1 class="font-bold text-headline">Default Size</h1>
      <Flow>
        <Button label="Play" onclick={handleClick}>
          {#snippet icon(size)}
            <Play {size} variation="solid" />
          {/snippet}
        </Button>
      </Flow>
    </Flow>
    <Flow>
      <Button label="Play" variation="alternate" onclick={handleClick} />
      <Button
        label="Edit"
        variation="alternate"
        color="neutral"
        onclick={handleClick}
      />
      <Button
        label="Delete"
        variation="alternate"
        color="danger"
        onclick={handleClick}
      />
    </Flow>
    <Flow vertical>
      <h1 class="font-bold text-headline">Small Size</h1>
      <Flow>
        <Button label="Play" size="small" onclick={handleClick} />
        <Button
          label="Edit"
          size="small"
          color="neutral"
          onclick={handleClick}
        />
        <Button
          label="Delete"
          size="small"
          color="danger"
          onclick={handleClick}
        />
      </Flow>
    </Flow>
    <Flow vertical>
      <h1 class="font-bold text-headline">Large Size</h1>
      <Flow>
        <Button label="Play" size="large" onclick={handleClick} />
        <Button
          label="Edit"
          size="large"
          color="neutral"
          onclick={handleClick}
        />
        <Button
          label="Delete"
          size="large"
          color="danger"
          onclick={handleClick}
        />
      </Flow>
    </Flow>
  </Flow>
</main>
