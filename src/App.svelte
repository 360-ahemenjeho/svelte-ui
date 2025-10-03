<script lang="ts">
  import { Button, Flow, Text } from "@/lib/components";

  function handleClick(event: any) {
    console.log("event -> ", event);
    alert("Button clicked!");
  }
</script>

<main>
  <Text
    weight="roar"
    font="display"
    appearance="text-foreground-opaque-secondary">Organism Design System</Text
  >

  <Flow vertical space="section">
    <Flow vertical>
      <Text weight="shout" font="headline">Default Size</Text>
      <Flow>
        <Button label="Play" onclick={handleClick}>
          {#snippet icon()}
            <i class="ph-fill ph-play"></i>
          {/snippet}
        </Button>
        <Button label="Share" color="neutral" onclick={handleClick} />
        <Button label="Remove" color="danger" onclick={handleClick} />
      </Flow>
    </Flow>
    <Flow>
      <Button label="Play" variation="alternate" onclick={handleClick}>
        {#snippet icon()}
          <i class="ph-fill ph-play"></i>
        {/snippet}
      </Button>
      <Button
        label="Share"
        variation="alternate"
        color="neutral"
        onclick={handleClick}
      >
        {#snippet icon()}
          <i class="ph ph-export"></i>
        {/snippet}</Button
      >
      <Button
        label="Remove"
        variation="alternate"
        color="danger"
        onclick={handleClick}
      >
        {#snippet icon()}
          <i class="ph-fill ph-trash"></i>
        {/snippet}</Button
      >
    </Flow>
    <Flow vertical>
      <Text weight="shout" font="headline">Disabled</Text>
      <Flow>
        <Button label="Play" onclick={handleClick} disabled>
          {#snippet icon()}
            <i class="ph-fill ph-play"></i>
          {/snippet}
        </Button>
        <Button label="Share" color="neutral" onclick={handleClick} disabled />
        <Button label="Remove" color="danger" onclick={handleClick} disabled />
      </Flow>
    </Flow>
    <Flow vertical>
      <Text weight="shout" font="headline">Bare button</Text>
      <Flow>
        <Button label="Play" onclick={handleClick} variation="bare">
          {#snippet icon()}
            <i class="ph-fill ph-play"></i>
          {/snippet}
        </Button>
        <Button
          label="Share"
          color="neutral"
          onclick={handleClick}
          variation="bare"
        />
        <Button
          label="Remove"
          color="danger"
          onclick={handleClick}
          variation="bare"
        />
      </Flow>
    </Flow>
    <Flow vertical>
      <Text weight="shout" font="headline">Bare disabled</Text>
      <Flow>
        <Button label="Play" onclick={handleClick} variation="bare" disabled>
          {#snippet icon()}
            <i class="ph-fill ph-play"></i>
          {/snippet}
        </Button>
        <Button
          label="Share"
          color="neutral"
          onclick={handleClick}
          variation="bare"
          disabled
        />
        <Button
          label="Remove"
          color="danger"
          onclick={handleClick}
          variation="bare"
          disabled
        />
      </Flow>
    </Flow>
    <Flow vertical>
      <Text weight="shout" font="headline">Small Size</Text>
      <Flow>
        <Button label="Play" size="small" onclick={handleClick}>
          {#snippet icon()}
            <i class="ph-fill ph-play"></i>
          {/snippet}
        </Button>
        <Button
          label="Share"
          size="small"
          color="neutral"
          onclick={handleClick}
        />
        <Button
          label="Remove"
          size="small"
          color="danger"
          onclick={handleClick}
        />
      </Flow>
    </Flow>
    <Flow vertical>
      <Text weight="shout" font="headline">Large Size</Text>
      <Flow>
        <Button label="Play" size="large" onclick={handleClick}>
          {#snippet icon()}
            <i class="ph-fill ph-play"></i>
          {/snippet}
        </Button>
        <Button
          label="Share"
          size="large"
          color="neutral"
          onclick={handleClick}
        />
        <Button
          label="Remove"
          size="large"
          color="danger"
          onclick={handleClick}
        />
      </Flow>
    </Flow>
  </Flow>
</main>
