<script>
    import { getContext } from 'svelte';
    const { state } = getContext('dunder');
</script>

{#if $state.loading}
	<div class="loading-wrapper">
		<div class="loading-container">
			<div id="spinner"></div>
		</div>
	</div>
{/if}

<style>
	.loading-container {
		display: flex;
		justify-content: center;
		position: fixed;
		top: 45%;
		left: 50%;
	}

	.loading-wrapper {
		background-color: rgba(0, 0, 0, 0.5);
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		overflow: hidden;
		z-index: 899;
	}

	#spinner {
		border: 16px solid var(--light-grey-2);
		border-top: 16px solid var(--light-orange);
		border-radius: 50%;
		width: 90px;
		height: 90px;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
			border-top: 16px solid var(--purple);
		}

		100% {
			transform: rotate(360deg);
			border-top: 16px solid var(--orange);
		}
	}
</style>
