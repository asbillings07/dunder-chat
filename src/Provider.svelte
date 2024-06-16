<!-- Provider.svelte -->
<script>
  import { onMount } from 'svelte';
  import { state, actions } from './DataStore/store.js';
  import { setContext } from 'svelte';

  let alert = {
    isOpen: false,
    message: '',
    alertType: 'info',
  };

  // Provide state and actions
  setContext('dunder', { state, actions });

  onMount(() => {
    if (!$state.posts.length) {
      actions.getAllPosts();
    }
    if (!$state.users.length) {
      actions.getAllUsers();
    }
  });


  $: if ($state.error) {
    console.log($state.errorMessage);
    alert = {
      ...alert,
      isOpen: true,
      message: $state.errorMessage,
      alertType: 'warning',
    };
  }
</script>

<slot></slot>
