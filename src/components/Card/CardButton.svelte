<script>
  import Button from '../Button.svelte';
  export let classes = '';
  export let buttonType = 'standard';
  export let size = 'small';
  export let onClick = () => true;

  // Combining classes
  $: buttonClass = `card__button ${classes}`;
</script>

<Button
  buttonType={buttonType}
  size={size}
  onClick={onClick}
  class={buttonClass}
  {...$$restProps}
>
  <slot></slot>
</Button>
