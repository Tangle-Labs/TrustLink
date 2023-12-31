<script lang="ts">
    import { page } from "$app/stores";
    import { api } from "$lib/api";
    import Qr from "$lib/components/Qr.svelte";
    import { parseQueryStringToJson } from "@tanglelabs/oid4vc";
    import { onMount } from "svelte";
    import { Circle } from "svelte-loading-spinners";

    let uri: string;
    let error: string;

    async function sendCode(platform: "X" | "Google" | "Linkedin") {
        const { code } = parseQueryStringToJson(window.location.search);
        if (!code) return;
        const { data } = await api
            .post("/verify", {
                token: code,
                platform: platform,
            })
            .catch(() => {
                error = "Unable to Verify User";
            });
        uri = data.uri;
    }

    onMount(() => {
        const { platform } = $page.params;
        const platformCode =
            platform === "linkedin"
                ? "Linkedin"
                : platform === "google"
                  ? "Google"
                  : platform === "twitter"
                    ? "X"
                    : null;
        if (!platformCode) return;
        sendCode(platformCode);
    });
</script>

<div class="card">
    <div class="content">
        <div class="header">
            <img src="/imgs/tanglelabs.svg" alt="" />
            <h1>TrustLink</h1>
        </div>
        <div class="qr">
            {#if !uri && !error}
                <h3>Verifying</h3>
                <Circle size="{20}" color="#ffffff" />
            {:else if error}
                <h3>Verification Failed</h3>
                <p>We were unable to verify your account, please try later.</p>
            {:else if uri && !error}
                <h3>Verified Successfully</h3>
                <Qr data="{uri}"></Qr>
                <p>
                    Scan the QR with your wallet to receive the verification
                    credential
                </p>
            {/if}
        </div>
    </div>
</div>

<style>
    .content {
        position: relative;
    }

    .qr {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        padding-bottom: 30px;
    }

    .qr h3 {
        color: #bcbcbc;
    }

    .qr p {
        text-align: center;
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
