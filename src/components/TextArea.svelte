<script>
	export let placeholder = '';
	export let label = null;
	export let domID = null;
	export let disabled = false;
    export let rows = 3;
    export let cols = 1;
    export let value = ''
	export let error = false;
	export let errorMessage = '';
	export let name = null;
	export let onChange = () => false;
</script>

<div class="text-wrapper">
	{#if label}
		<label for={domID}>{label}</label>
	{/if}

	<textarea
        class="textarea"
		id={domID}
		{name}
		{rows}
		bind:value={value}
		{cols}
		on:change={onChange}
		{placeholder}
		{disabled}
	/>
	{#if error}
		<span class="error-span">{errorMessage}</span>
	{/if}
</div>

<style>
	.textarea {
		display: block;
		width: 100%;
		height: 15em;
		padding: 6px 8px;
		border: var(--grey-border-50);
		border-radius: var(--border-radius-small);
		box-shadow: var(--box-shadow-small);
		font-size: var(--font-medium);
		color: var(--grey-100);
		background-color: white;
		resize: none;
		outline: none;

		&:hover {
			border: var(--grey-border-70);
		}

		&:focus {
			border: var(--grey-border-100);
		}

		&:placeholder {
			color: var(--grey-50);
			opacity: 1;
		}
	}

	.text-wrapper {
		position: relative;
	}

	/* .text-wrapper-error {
		label {
			color: red;
		}

		textarea {
			border: 1px solid red;
			box-shadow: 0 0 0 1px red;
			margin-bottom: 0.5em;
		}
	} */

	.error-span {
		display: block;
		color: red;
		font-size: var(--font-small);
		line-height: var(--line-height);
		margin-bottom: 1.5em;
	}
</style>
