<script>
	import NavBar from "./components/NavBar.svelte";

	import {
		MaterialApp,
		Row,
		Col,
	} from "svelte-materialify";
	let theme = "light";
</script>

<style>
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		height: 100vh;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	<MaterialApp {theme}>
		<NavBar />
		<Row>
			<Col md={2} />
			<Col md={8}>
				<p>Deck Visualizations</p>
			</Col>
			<Col md={2}>
				<p>Decklist</p>
			</Col>
		</Row>
	</MaterialApp>
</main>
