<script>
  import Desktop from "./desktop/Desktop.svelte";
  import Mobile from "./mobile/Mobile.svelte";

  let width;
</script>

<svelte:window bind:innerWidth={width} />

<header>
  <div class="container">
    {#if width < 900}
      <Mobile />
    {:else}
      <Desktop />
    {/if}
  </div>
</header>

<style>
  header {
    padding: 55px 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999;
    background: rgb(23, 23, 23);
    background: linear-gradient(
      180deg,
      rgba(23, 23, 23, 1) 20%,
      rgba(23, 23, 23, 0.6814075972185749) 49%,
      rgba(23, 23, 23, 0.006337569207370497) 100%
    );
  }

  @media only screen and (max-width: 900px) {
    header {
      padding: 20px 0;
    }
  }
</style>
