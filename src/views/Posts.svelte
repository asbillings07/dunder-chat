<script>
	import Card from '../components/Card/Card.svelte';
	import CardBody from '../components/Card/CardBody.svelte';
	import CardTitle from '../components/Card/CardTitle.svelte';
	import CardText from '../components/Card/CardText.svelte';
	import Container from '../components/Container.svelte';
	import { getContext } from 'svelte';
	const { state, actions } = getContext('dunder');

	let activeId = null;
	let id = 1;
	const runActions = (event, id) => {
    	window.location.replace('/profile')
  	}
	$: users = $state.users;
</script>

<Container title="posts" visible="visible">
	{#each $state.posts as interaction}
		{#if interaction.id === id}
			<Card
				classes="custom-card-class"
				id={`interaction_card${id}`}
				width="100%"
				selected={activeId === id}
				onClick={(e) => runActions(e, id)}
			>
				<CardTitle classes="custom-title-class">{interaction.title}</CardTitle>
				<CardBody classes="custom-body-class">
					<CardText classes="custom-text-class">{interaction.body}</CardText>
					{@const customer = $state.users.find((item) => interaction.id === item.id)}
					<CardText classes="custom-text-class"
						>By: {customer?.firstName} {customer?.lastName}</CardText
					>
					<CardText classes="custom-text-class">Email: {customer?.email}</CardText>
				</CardBody>
			</Card>
		{/if}
	{/each}
</Container>
