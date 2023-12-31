<script lang="ts">
    import { nanoid } from "nanoid";
    import { browser } from "$app/environment";
    import { twitterAuthClient } from "$lib/authlibs";
    import { api } from "$lib/api";

    async function handleRedirect(platform: "X" | "Google" | "Linkedin") {
        const {
            data: { url },
        } = await api.get("/oauth-url/" + platform);
        if (browser) {
            window.location.href = url;
        }
    }
</script>

<button on:click="{() => handleRedirect('X')}">twittex</button>
