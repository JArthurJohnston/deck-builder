<script>
      import { Dialog } from 'svelte-materialify';
      import CardView from "./CardView.svelte"
    export let card;
    export let active = false;
</script>

<Dialog bind:active>
    <div>
        <CardView {card} />
    </div>
</Dialog>

<style>
    div {
        
    }
</style>