<script lang="ts">
	type visiblity = 'visible' | 'hidden';
	type componentType = 'messages' | 'notes' | 'interactions';

	export let classes = '';
	export let title: componentType = 'interactions';
	export let flexGrow = 0;
	export let visible: visiblity = 'visible';

	$: containerClass = `${title}_container ${classes}`;
</script>

<div class={containerClass} class:flexGrow class:visiblity={visible}>
	<h2 class="title">{title}</h2>
	<slot></slot>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		margin-right: 15px;
		padding: 10px;
		border: black 1px solid;
	}

	.messages_container {
		position: relative;
	}
    .title {
        font-weight: 500;
    }
	.notes_container {
		position: relative;
	}
</style>
