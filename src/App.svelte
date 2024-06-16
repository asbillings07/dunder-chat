<script>
	import Heading from './components/Heading.svelte';
	import Alert from './components/Alert.svelte';
	import Posts from './views/Posts.svelte';
	import LoadingSpinner from './components/Loader.svelte';
</script>

<div class="main-container">
	<Heading title="Michael Scott Paper Company" />
	<Alert alertType="info" message="does this even work though bro?" />
	<LoadingSpinner />
	<Posts />
</div>

<style>
	@import './varables.css';
	.main-container {
		display: flex;
		padding: 40px;
		flex-direction: column;
		height: 85vh;
		justify-content: center;
	}
</style>
