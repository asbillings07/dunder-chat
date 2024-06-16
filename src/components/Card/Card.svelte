<script>
  export let classes = '';
  export let onClick = () => {}

  // Combining classes
  $: containerClass = `card container ${classes}`;
</script>

<div on:click={onClick} class={containerClass} {...$$restProps} role="button" tabindex="0">
  <slot></slot>
</div>

<style>
:root {
    --width: 100%;
}

/* Container Styles */
.container {
  display: flex;
  flex-direction: column;
  min-width: 0;
  max-width: 1000px;
  width: var(--width); /* Use custom property for width */
  word-wrap: break-word;
  background-color: #fff; /* Default background color */
  background-clip: border-box;
  border: 1px solid black;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  overflow: hidden;

  &:hover {
    cursor: pointer;
    background-color: rgb(71, 252, 255);
  }

  &.selected {
    background-color: rgb(71, 252, 255); /* Selected background color */
  }
}

</style>