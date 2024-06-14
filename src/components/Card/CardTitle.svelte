<script>
	export let classes = '';

	// Combining classes
	$: titleClass = `card__title title ${classes}`;
</script>

<div class={titleClass} {...$$restProps}>
	<slot></slot>
</div>

<style>
	/* Title Styles */
	.title {
		font-size: 12px;
		font-weight: bold;
	}
</style>
