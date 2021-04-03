<script>
    import { Icon } from "svelte-materialify";
    import {
        mdiAndroidDebugBridge,
        mdiCog,
        mdiFlash,
        mdiWalk,
        mdiBroadcast,
        mdiImageFilterHdr
    } from "@mdi/js";
    export let card;
</script>

{#if card.type_line.includes('Creature')}
    <Icon path={mdiAndroidDebugBridge} />
{:else if card.type_line.includes('Land')}
    <Icon path={mdiImageFilterHdr} />
{:else if card.type_line.includes('Enchantment')}
    <Icon path={mdiBroadcast} />
{:else if card.type_line.includes('Artifact')}
    <Icon path={mdiCog} />
{:else if card.type_line.includes('Planeswalker')}
    <Icon path={mdiWalk} />
{:else if card.type_line.includes('Instant') || card.type_line.includes('Sorcery')}
    <Icon path={mdiFlash} />
{/if}
