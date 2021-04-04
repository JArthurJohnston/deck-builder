<script>
    import { Button, Icon } from "svelte-materialify";

    import CardView from "./CardView.svelte";
    import { mdiHospitalBox } from "@mdi/js";

    export let card;
</script>

<CardView {card} size="normal" />
<div>
    <Button>
        <Icon path={mdiHospitalBox} />
    </Button>
</div>
