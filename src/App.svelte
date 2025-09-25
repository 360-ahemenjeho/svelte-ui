<script lang="ts">
  import { Button, Flow } from "@/lib/components";
  import { Play, Trash, Share } from "svelte-heros-v2";

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
        <Button label="Share" color="neutral" onclick={handleClick} />
        <Button label="Delete" color="danger" onclick={handleClick} />
      </Flow>
    </Flow>
    <Flow>
      <Button label="Play" variation="alternate" onclick={handleClick}>
        {#snippet icon(size)}
          <Play {size} variation="solid" />
        {/snippet}
      </Button>
      <Button
        label="Share"
        variation="alternate"
        color="neutral"
        onclick={handleClick}
      >
        {#snippet icon(size)}
          <Share {size} variation="solid" />
        {/snippet}</Button
      >
      <Button
        label="Delete"
        variation="alternate"
        color="danger"
        onclick={handleClick}
      >
        {#snippet icon(size)}
          <Trash {size} variation="solid" />
        {/snippet}</Button
      >
    </Flow>
    <Flow vertical>
      <h1 class="font-bold text-headline">Disabled</h1>
      <Flow>
        <Button label="Play" onclick={handleClick} disabled>
          {#snippet icon(size)}
            <Play {size} variation="solid" />
          {/snippet}
        </Button>
        <Button label="Share" color="neutral" disabled onclick={handleClick} />
        <Button label="Delete" color="danger" disabled onclick={handleClick} />
      </Flow>
    </Flow>
    <Flow vertical>
      <h1 class="font-bold text-headline">Small Size</h1>
      <Flow>
        <Button label="Play" size="small" onclick={handleClick}>
          {#snippet icon(size)}
            <Play {size} variation="solid" />
          {/snippet}
        </Button>
        <Button
          label="Share"
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
        <Button label="Play" size="large" onclick={handleClick}>
          {#snippet icon(size)}
            <Play {size} variation="solid" />
          {/snippet}
        </Button>
        <Button
          label="Share"
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
