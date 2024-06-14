<script>
  // Existing props
  export let classes = '';
  export let buttonType = 'standard';
  export let name = null;
  export let disabled = false;
  export let size = 'dunder';
  export let onClick = () => false;

  // Combine the classes
  $: buttonClass = `styled-button styled-button.${buttonType} styled-button.${size} ${classes}`;
</script>

<button
  disabled={disabled}
  class={buttonClass}
  on:click={onClick}
  {...$$restProps}
>
  {name}
</button>


<style>
    /* Base Button Styles */
.styled-button {
  padding: 5px 15px;
  margin-right: 10px;
  justify-content: center;
  font-size: 20px;
}

.styled-button:hover {
  /* Apply elevation[2] style here */
  cursor: pointer;
}

/* Size Variants */
.styled-button.small {
  font-size: 12px;
}

.styled-button.medium {
  font-size: 16px;
}

.styled-button.dunder {
  font-size: 15px;
  position: absolute;
  bottom: 15px;
  left: 25px;
}

/* Button Type Variants */
.styled-button.cancel {
  background: tomato;
  border-color: tomato;
  color: white;
}

.styled-button.standard {
  background: lightgray;
  border-color: lightgray;
  color: black;
}

.styled-button.unstyled {
  padding: 1px;
  justify-content: center;
  font-size: 15px;
}

.styled-button.unstyled:hover {
  /* Apply elevation[2] style here */
  cursor: pointer;
  background: lightgray;
  border-color: lightgray;
  color: black;
}

.styled-button.default {
  background: cornflowerblue;
  border-color: cornflowerblue;
  color: white;
}

</style>