<script>
    import { TextField } from "svelte-materialify";

    let tag;

    const handleEnter = (e) => {
        if (cardQuery && e.keyCode === 13) {
            //TODO make it work;
        }
    };
</script>

<TextField clearable outlined bind:value={tag} on:keyup={handleEnter}>
    Add A Tag...
</TextField>
