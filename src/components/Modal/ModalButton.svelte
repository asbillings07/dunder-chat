<script>
  import Button from '../Button.svelte' // Assuming this is a Svelte component or CSS module

  export let classes = '';
  export let name = '';
  export let onClick = () => false;
</script>

<Button size='medium' onClick={onClick} class={`modal_button ${classes}`}>
  {name}
</Button>