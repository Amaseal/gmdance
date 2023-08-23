<script>
  import Facebook from "svelte-material-icons/Facebook.svelte";
  import Instagram from "svelte-material-icons/Instagram.svelte";
  import Navlink from "../../navlink/Navlink.svelte";
  import { variables } from "$lib/scripts/store";
  import { Hamburger } from "svelte-hamburgers";
</script>

<Hamburger bind:open={$variables.navOpen} --color="white" />

{#if $variables.navOpen}
  <nav class="flex align collumn">
    <Navlink text="home" link="/" />
    <Navlink text="nodarbības" link="/nodarbibas" />
    <Navlink text="galerija" link="/galerija" />
    <Navlink text="kontakti" link="/kontakti" />

    <div class="social flex ">
      <div class="icon">
        <Facebook size="20px" />
      </div>
      <div class="icon">
        <Instagram size="20px" />
      </div>
    </div>
  </nav>
{/if}

<style>
  nav {
    background-color: var(--background);
    height: 93vh;
    padding: 40px 0;
  }
  .social {
    margin-top: auto;
  }
</style>
