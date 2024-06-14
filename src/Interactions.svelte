<script>
	import Card from './components/Card/Card.svelte';
	import CardBody from './components/Card/CardBody.svelte';
	import CardTitle from './components/Card/CardTitle.svelte';
	import CardText from './components/Card/CardText.svelte';
	import Container from './components/Container.svelte';

	let activeId = null;
	let id = 1;
	const runActions = (id) => {
		activeId = id;
	};
	const interactions = [
		{
			id: 1,
			title: 'Want printer paper',
			customerId: 2,
			messages: [
				{
					id: 10,
					type: 'customer_message',
					content: 'Hi how are you'
				},
				{
					id: 11,
					type: 'agent_message',
					agentId: 3,
					content: 'Hi there, is there anything we can do for you today'
				},
				{
					id: 12,
					type: 'customer_message',
					agentId: 3,
					content: 'Yes please I am looking to get printer paper'
				}
			],
			notes: [
				{
					id: 100,
					agentId: 3,
					content: 'This customer wants to print something I am sure'
				}
			]
		},
		{
			id: 2,
			customerId: 1,
			title: 'Looking for business card paper',
			messages: [
				{
					id: 20,
					type: 'customer_message',
					content: 'Good morning, I need some help please'
				},
				{
					id: 21,
					type: 'agent_message',
					agentId: 4,
					content: 'Good morning. Sure, I can gladly help. How can I help you'
				},
				{
					id: 22,
					type: 'customer_message',
					content: 'My business card paper order is running late, has it been shipped?'
				}
			],
			notes: [
				{
					id: 200,
					agentId: 4,
					content: 'I was going to interact with this customer but I am going to go have lunch'
				},
				{
					id: 201,
					agentId: 4,
					content: 'I am back from lunch, I can take it from here'
				}
			]
		}
	];
</script>

<Container title='interactions' visible='visible'>
{#each interactions as interaction}
	{#if interaction.id === id}
		<Card
			classes="custom-card-class"
			id={`interaction_card${id}`}
			width="100%"
			selected={activeId === id}
			on:click={() => runActions(id)}
		>
			<CardTitle classes="custom-title-class">{interaction.title}</CardTitle>
			<CardBody classes="custom-body-class">
				<CardText classes="custom-text-class">Card Text</CardText>
			</CardBody>
		</Card>
	{/if}
{/each}
</Container>