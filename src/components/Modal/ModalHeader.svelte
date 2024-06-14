<script>
	export let classes = '';
</script>

<div class={`modal_header ${classes}`} {...$$restProps}>
	<slot />
</div>

<style>
	.modal_header {
		padding: 20px;
		font-size: 1.25rem;
		font-weight: 500;
		line-height: 1.5;
		margin: 0px;
		border-bottom: 1px solid rgb(222, 226, 230);
	}
</style>
