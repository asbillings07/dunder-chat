<script>
  export let classes = '';

  // Combining classes
  $: bodyClass = `card__body ${classes}`;
</script>

<div class={bodyClass} {...$$restProps}>
  <slot></slot>
</div>
