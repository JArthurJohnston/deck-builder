<script>
    import { Icon, Button } from "svelte-materialify";
    import { mdiArrowDownBoldBoxOutline } from "@mdi/js";

    export let data;
    export let filename;
    export let type;

    function download() {
        var file = new Blob([data], { type });
        if (window.navigator.msSaveOrOpenBlob)
            // IE10+
            window.navigator.msSaveOrOpenBlob(file, filename);
        else {
            // Others
            var a = document.createElement("a"),
                url = URL.createObjectURL(file);
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            setTimeout(function () {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);
        }
    }
</script>

<Button on:click={download}>
    <Icon path={mdiArrowDownBoldBoxOutline} />
</Button>
