<script>
	import Heading from '../components/Heading.svelte';
	import Alert from '../components/Alert.svelte';
	import Interactions from '../Interactions.svelte';
</script>

<div class="main-container">
	<Heading title="Michael Scott Paper Company" />
	<Alert alertType="info" message="does this even work though bro?" />
	<Interactions />
</div>

<style>
	@import '../varables.css';
	.main-container {
		display: flex;
		padding: 40px;
		flex-direction: column;
		height: 85vh;
		justify-content: center;
		
	}
</style>
