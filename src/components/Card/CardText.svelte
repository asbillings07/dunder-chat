<script>
	export let classes = '';

	// Combining classes
	$: textClass = `card__text text ${classes}`;
</script>

<div class={textClass} {...$$restProps}>
	<slot></slot>
</div>

<style>
	/* Text Styles */
	.text {
		font-size: 12px;
		line-height: 16px;
		color: black;
		opacity: 0.9;
	}
</style>
