<script lang="ts">
  const {
    vertical,
    space = "default",
    wrap,
    align = "start",
    justify = "start",
    children,
  }: Flow = $props();

  const direction: string = vertical ? "flex-col" : "flex-row ";
  const space_: Record<NonNullable<Flow["space"]>, string> = {
    default: "gap-2",
    section: "gap-6",
  };
  const wrap_: string = wrap ? "flex-wrap" : "flex-nowrap";
  const justify_: Record<NonNullable<Flow["justify"]>, string> = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
  };
  const align_: Record<NonNullable<Flow["align"]>, string> = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
  };
</script>

<section
  class={`flex ${direction} ${space_[space]} ${wrap_} ${align} ${justify_[justify]} ${align_[align]}`}
>
  {@render children()}
</section>
