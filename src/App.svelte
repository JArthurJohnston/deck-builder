<script>
	import SearchBar from "./components/SearchBar.svelte"
	import NavBar from "./components/NavBar.svelte"

	import { MaterialApp, Row, Col, NavigationDrawer, ListItem } from 'svelte-materialify';
  let theme = 'light';

</script>

<main>
	<MaterialApp theme="{theme}">
		<NavBar />
		<Row>
			<Col md={2}>
			</Col>
			<Col md={8}>
				<p>Deck Visualizations</p>
			</Col>
			<Col md={2}>
				<p>Decklist</p>
			</Col>
		</Row>
	</MaterialApp>
</main>

<style>
	main {
		/* text-align: center; */
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		height: 100vh;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>