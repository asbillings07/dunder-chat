<script lang='ts'>
  import Button from './Button.svelte';

  type AlertType = 'info' | 'success' | 'warning' | 'default';

  export let message = '';
  export let alertType:AlertType = 'info';
  export let isOpen = false;
  export let listStyle = 'unstyled';

  const onClose = () => isOpen = false;
</script>

{#if isOpen}
  <div class={`alert ${alertType}`}>
    {#if Array.isArray(message)}
      <div class="messages">
        {#each message as err, i}
          <div class={`list ${listStyle}`}>
            {err}
          </div>
        {/each}
      </div>
    {:else}
      <span>{message}</span>
    {/if}
    <Button
      class="close-button"
      id="alert-close-button"
      name="X"
      onClick={() => onClose()}
    >
      X
    </Button>
  </div>
{/if}

<style>
/* Alert styles */
.alert {
  display: flex;
  padding: 15px;
  width: 50%;
  position: fixed;
  top: 54px;
  left: 20em;
  margin: 5px 5px 5px 5px;
  justify-content: space-between;
  margin-top: 8px;
  border: 1px solid transparent;
  border-radius: 4px;
}

.alert-warning {
  background-color: #fae2e2;
  color: #d84040;
  border-color: #f4c5c5;
}

.alert-info {
  background-color: #fff5db;
  color: #000000;
  border-color: #ffebb6;
}

.alert-success {
  background-color: #dff0d8;
  border-color: #d6e9c6;
  color: #3c763d;
}

/* Default alert style */
.alert-default {
  background-color: #fff5db;
  color: #000000;
  border-color: #ffebb6;
}

/* Close button styles */
.close-button {
  font-size: 21px;
  font-weight: bold;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.2;
}

.close-button:hover {
  color: #000;
  text-decoration: none;
  opacity: 0.5;
}

/* List styles */
.list {
  margin-bottom: 5px;
}

.list-unstyled {
  list-style-type: none;
}

.list-number {
  list-style-type: decimal;
}

.list-circle {
  list-style-type: circle;
}

.list-disc {
  list-style-type: disc;
}

.list-square {
  list-style-type: square;
}

/* Messages styles */
.messages {
  display: flex;
  flex-direction: column;
}

</style>
