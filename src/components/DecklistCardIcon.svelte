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
import { isArtifact, isCreature, isEnchantment, isLand, isPlaneswalker, isSpell } from "../helpers/CardSelectors";
    export let card;
</script>

{#if isCreature(card)}
    <Icon path={mdiAndroidDebugBridge} />
{:else if isLand(card)}
    <Icon path={mdiImageFilterHdr} />
{:else if isEnchantment(card)}
    <Icon path={mdiBroadcast} />
{:else if isArtifact(card)}
    <Icon path={mdiCog} />
{:else if isPlaneswalker(card)}
    <Icon path={mdiWalk} />
{:else if isSpell(card)}
    <Icon path={mdiFlash} />
{/if}
