<script>
  import { data } from "$lib/scripts/nodarbibas";
  import Item from "../../lib/components/item/Item.svelte";
</script>

<svelte:head>
  <title>Nodarbības</title>
</svelte:head>
<section>
  <div class="container">
    {#each data as data}
      <Item {data} />
    {/each}
  </div>
</section>

<style>
  section {
    padding: 120px 0;
    position: relative;
  }
  section::before {
    content: "";
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 150px;
    background: rgb(23, 23, 23);
    background: linear-gradient(
      0deg,
      rgba(23, 23, 23, 1) 20%,
      rgba(23, 23, 23, 0.6814075972185749) 49%,
      rgba(23, 23, 23, 0.006337569207370497) 100%
    );
    z-index: 9999;
  }
</style>
