<script lang="ts">
    import { page } from "$app/stores";
    import { api } from "$lib/api";
    import { twitterAuthClient } from "$lib/authlibs";
    import Qr from "$lib/components/Qr.svelte";
    import { parseQueryStringToJson } from "@tanglelabs/oid4vc";
    import { onMount } from "svelte";

    let uri: string;

    async function handleTwitter() {
        const { code } = parseQueryStringToJson(window.location.search);
        console.log(code);
        if (!code) return;
        const { data } = await api.post("/verify", {
            token: code,
            platform: "X",
        });
        uri = data.uri;
    }

    onMount(() => {
        const { platform } = $page.params;
        switch (platform) {
            case "twitter":
                handleTwitter();
                break;
        }
    });
</script>

{#if uri}
    <Qr data="{uri}"></Qr>
{/if}
