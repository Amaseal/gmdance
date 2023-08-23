<script>
  import Facebook from "svelte-material-icons/Facebook.svelte";
  import Instagram from "svelte-material-icons/Instagram.svelte";
  import Navlink from "../../navlink/Navlink.svelte";
</script>

<nav class="flex align">
  <Navlink text="home" link="/" />
  <Navlink text="nodarbības" link="/nodarbibas" />
  <Navlink text="galerija" link="/galerija" />
  <Navlink text="kontakti" link="/kontakti" />

  <div class="social flex">
    <a target="blank" href="https://www.facebook.com/groups/1737701199793309">
      <div class="icon">
        <Facebook size="20px" />
      </div></a
    >
    <a target="blank" href="https://www.instagram.com/gmd_ogre/">
      <div class="icon">
        <Instagram size="20px" />
      </div></a
    >
  </div>
</nav>

<style>
  .social {
    margin-left: auto;
  }
  a {
    color: white;
  }
</style>
