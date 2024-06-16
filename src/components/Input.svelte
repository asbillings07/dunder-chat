<script>
	export let placeholder = '';
	export let label = null;
	export let domID = null;
	export let disabled = false;
    export let value = '';
	export let onChange = () => false;
</script>

<div>
	{#if label}
		<label class="input-label" {...$$restProps} for={domID}>{label}</label>
	{/if}

	<input
		class="text-input"
		id={domID}
		bind:value={value}
		{placeholder}
		on:change={onChange}
		{disabled}
        {...$$restProps}
	/>
</div>

<style>
	.text-input {
		box-sizing: border-box;
		box-shadow: none;
		max-width: 100%;
		border-image: initial;
		border: 1px solid;
		border-color: inherit;
		border-radius: 3px;
		font: inherit;
		margin: 0.5em 0;
		padding: 0.75em;
		transition: border-color 0.2s ease 0s;
		&:hover {
			border: 1px solid lightgray;
		}
	}

	.input-label {
		display: block;
		margin-top: 10px;
		margin-bottom: 0.3em;
		color: white;
		font-size: var(--font-medium);
		letter-spacing: var(--letter-spacing);
		font-weight: var(--font-weight-bold);
	}
</style>
