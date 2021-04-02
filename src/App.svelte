<script>
	import NavBar from "./components/NavBar.svelte";
	import DeckVisuals from "./components/DeckVisuals.svelte";
	import CommanderSearch from "./components/CommanderSearch.svelte";
	import DeckList from "./components/DeckList.svelte";
	import { MaterialApp, Row, Col } from "svelte-materialify";
	let theme = "light";
</script>

<style>
	main {
		/* padding: 1em; */
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	<MaterialApp {theme}>
		<CommanderSearch />
		<NavBar />
		<Row>
			<Col md={9}>
				<DeckVisuals />
			</Col>
			<Col md={3}>
				<DeckList />
			</Col>
		</Row>
	</MaterialApp>
</main>
