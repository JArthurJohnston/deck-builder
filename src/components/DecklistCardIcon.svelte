<script>
    import { Icon } from "svelte-materialify";
    import {
        mdiAndroidDebugBridge,
        mdiCog,
        mdiWeb,
        mdiFlash,
        mdiWalk,
    } from "@mdi/js";
    export let card;
</script>

{#if card.type_line.includes('Creature')}
    <Icon path={mdiAndroidDebugBridge} />
{:else if card.type_line.includes('Land')}
    <Icon path={mdiWeb} />
{:else if card.type_line.includes('Artifact')}
    <Icon path={mdiCog} />
{:else if card.type_line.includes('Planeswalker')}
    <Icon path={mdiWalk} />
{:else if card.type_line.includes('Instant') || card.type_line.includes('Sorcery')}
    <Icon path={mdiFlash} />
{/if}
