<script lang="ts">
    import { nanoid } from "nanoid";
    import { browser } from "$app/environment";
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

<div class="card">
    <div class="content">
        <div class="header">
            <img src="/imgs/tanglelabs.svg" alt="" />
            <h1>TrustLink</h1>
        </div>
        <button on:click="{() => handleRedirect('X')}">Connect X</button>
        <button on:click="{() => handleRedirect('Linkedin')}"
            >Connect Linkedin</button
        >
        <button on:click="{() => handleRedirect('Google')}"
            >Connect Google</button
        >
    </div>
</div>

<style>
    button {
        padding: 15px 20px;
        width: 100%;
        font-size: 1rem;
        font-weight: 400;
        border: 0;
        border-radius: 5px;
        margin: 2.5px 0;
        background: #1e1e1e;
        color: white;
        font-family: "Montserrat", sans-serif;
    }

    button:hover {
        cursor: pointer;
    }

    .content {
        position: relative;
    }

    .header {
        display: flex;
        position: absolute;
        top: -100px;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .header img {
        height: 50px;
        margin-right: 5px;
    }

    .card {
        position: absolute;
        border-radius: 5px;
        padding: 20px;
        background: #2d2d2d;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 400px;
        width: 90vw;
    }
</style>
