<script>
  export let text;
  export let link;
  import { variables } from "$lib/scripts/store";
</script>

<a href={link} on:click={() => ($variables.navOpen = false)}>{text}</a>

<style>
  a {
    color: var(--text);
    text-decoration: none;
    text-transform: uppercase;
    padding: 10px 15px;
    display: block;
    font-weight: 600;
    transition: color 0.2s ease;
  }

  a:hover {
    color: var(--primary);
  }

  @media only screen and (max-width: 900px) {
    a {
      font-size: 30px;
    }
  }
</style>
