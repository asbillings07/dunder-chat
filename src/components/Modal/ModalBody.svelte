<script>
  export let classes = '';
</script>

<div class={`modal_body ${classes}`} {...$$restProps}>
  <slot />
</div>

<style>
 .modal_body {
    padding: 20px;
 }
</style>
