<script lang="ts">
    import QrCode from "qrcode";
    import { onMount } from "svelte";
    export let data: string;

    let dataUrl: string;

    onMount(async () => {
        dataUrl = await QrCode.toDataURL(data, {
            width: 300,
            color: { light: "#2d2d2d", dark: "#ffffff" },
        });
    });
</script>

<div class="qr">
    {#if dataUrl}
        <img src="{dataUrl}" alt="" />
    {/if}
</div>

<style>
    .qr {
        padding: 10px 0;
    }
</style>
