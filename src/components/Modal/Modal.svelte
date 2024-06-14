<script>
	import { onMount, onDestroy, createEventDispatcher } from 'svelte';

	export let classes = '';
	export let toggle = false;
	let portalTarget;

	const dispatch = createEventDispatcher();

	onMount(() => {
		portalTarget = document.createElement('div');
		document.body.appendChild(portalTarget);
	});

	onDestroy(() => {
		document.body.removeChild(portalTarget);
	});

	function close() {
		toggle = false;
		dispatch('toggle', toggle);
	}
</script>

<svelte:head>
	<style>
		.modal-container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.5);
		}
	</style>
</svelte:head>

{#if toggle}
	<div bind:this={portalTarget} class={`modal-container ${classes}`}>
		<div class="inner">
			<button class="close-button" on:click={close} />
			<slot />
		</div>
	</div>
{/if}

<style>
	.close-button {
		position: absolute;
		right: 15px;
		top: 15px;
		width: 22px;
		height: 22px;
		opacity: 0.3;
		background-color: transparent;
		border: 0;
		cursor: pointer;
		&:hover {
			opacity: 1;
		}
		&:before,
		&:after {
			position: absolute;
			left: 10px;
			top: 0;
			content: ' ';
			height: 22px;
			width: 2px;
			background-color: #333;
		}
		&:before {
			transform: rotate(45deg);
		}
		&:after {
			transform: rotate(-45deg);
		}
	}

	.inner {
		position: relative;
		width: 90%;
		max-width: 500px;
		margin: 1.75rem auto;
		background: padding-box rgb(255, 255, 255);
		border-width: 1px;
		border-style: solid;
		border-color: rgba(0, 0, 0, 0.2);
		border-image: initial;
		border-radius: 0.3rem;
	}
</style>
