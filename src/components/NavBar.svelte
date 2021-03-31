<script>
    import {
        NavigationDrawer,
        ListItem,
    } from "svelte-materialify";
    import SearchBar from "./SearchBar.svelte"

    let mini = true;
    function mouseenter() {
        mini = false;
    }
    function mouseleave() {
        mini = true;
    }
</script>

<style>
    div {
        display: inline-block;
        height: 100%;
        background-color: darkgray;
    }
    span {
        margin: 1em;
    }
</style>

<div on:mouseenter={mouseenter} on:mouseleave={mouseleave}>
    <NavigationDrawer {mini}>
        <ListItem>
            <span slot="prepend">
                <p>Search</p>
              </span>
            <SearchBar />
        </ListItem>
    </NavigationDrawer>
</div>