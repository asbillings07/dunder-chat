<script>
	export let classes = '';

	// Combining classes
	$: buttonContainerClass = `card__button ${classes}`;
</script>

<div class={buttonContainerClass} {...$$restProps}>
	<slot></slot>
</div>
