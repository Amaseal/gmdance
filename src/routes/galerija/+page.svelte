<script>
  import { object_without_properties } from "svelte/internal";

  export let data;
  let open = false;
  let source;

  $: console.log(data);

  let openModal = (e) => {
    source = e.target.src;
    open = true;
    // index = 1;
  };

  let scroll;
  let width;
  let filtersOpen = false;

  let close = () => {
    open = false;
  };

  let selected = data.video;
  let path = "video";

  let filterSelection = (selection, pathSelection) => {
    selected = selection;
    path = pathSelection;
    scroll = 0;
  };
  $: console.log(selected);
</script>

<svelte:window bind:scrollY={scroll} bind:innerWidth={width} />

<svelte:head>
  <title>Galerija</title>
</svelte:head>

<section>
  <div class="container">
    <h1>Galerija</h1>
    {#if width > 600}
      <div class="filters">
        <button class="filter" on:click={filterSelection(data.video, "video")}>
          Video filmēšanas
        </button>
        <button
          class="filter"
          on:click={filterSelection(data.vasara, "vasara")}
        >
          Vasara
        </button>
        <button
          class="filter"
          on:click={filterSelection(data.trenini, "trenini")}
        >
          Treneri
        </button>
        <button
          class="filter"
          on:click={filterSelection(data.treneri, "treneri")}
        >
          Treniņi
        </button>
        <button
          class="filter"
          on:click={filterSelection(data.fotosesijas, "fotosesijas")}
        >
          Fotosesijas
        </button>
        <button
          class="filter"
          on:click={filterSelection(data.kopigi, "kopigi")}
        >
          Kopīgi pasūtijumi
        </button>
      </div>
    {:else}
      <div class="mobile">
        <button
          class="filterToggle"
          class:scrolled={scroll > 100}
          on:click={() => (filtersOpen = !filtersOpen)}>Filtri</button
        >
        {#if filtersOpen}
          <div class="filters">
            <button
              class="filter"
              on:click={filterSelection(data.video, "video")}
            >
              Video filmēšanas
            </button>
            <button
              class="filter"
              on:click={filterSelection(data.vasara, "vasara")}
            >
              Vasara
            </button>
            <button
              class="filter"
              on:click={filterSelection(data.trenini, "trenini")}
            >
              Treneri
            </button>
            <button
              class="filter"
              on:click={filterSelection(data.treneri, "treneri")}
            >
              Treniņi
            </button>
            <button
              class="filter"
              on:click={filterSelection(data.fotosesijas, "fotosesijas")}
            >
              Fotosesijas
            </button>
            <button
              class="filter"
              on:click={filterSelection(data.kopigi, "kopigi")}
            >
              Kopīgi pasūtijumi
            </button>
          </div>
        {/if}
      </div>
    {/if}

    <div class="gallery">
      {#each selected as image}
        <div class="wrapper">
          <img
            src={`../gallery/${path}/${image}`}
            alt=""
            on:click={openModal}
          />
        </div>
      {/each}
    </div>
    {#if open}
      <div class="lightbox" on:click={close}>
        <img src={source} on:click={close} alt="" />
      </div>
    {/if}
  </div>
</section>

<style>
  .mobile {
    position: sticky;
    top: 100px;
  }
  .filterToggle {
    padding: 15px;
    background-color: var(--background);
    color: white;
    outline: none;
    border: 1px solid white;
    margin-bottom: 20px;
    position: absolute;
    top: -100px;
    right: 0;
    z-index: 99999;
  }
  .filterToggle.scrolled {
    padding: 15px;
    background-color: var(--background);
    color: white;
    outline: none;
    border: 1px solid white;
    margin-bottom: 20px;
    position: fixed;
    top: 30px;
    right: 10px;
    z-index: 99999;
  }
  .filters {
    display: flex;
    position: sticky;
    top: 120px;
    z-index: 9999999;
    background-color: var(--background);
    justify-content: stretch;
    margin-bottom: 20px;
  }
  .filter {
    background-color: var(--background);
    outline: none;
    color: white;
    padding: 15px;
    border: 1px solid white;
    width: 100%;
    transform: scale(1);
    transition: all 0.2s ease;
    cursor: pointer;
  }
  .filter:hover {
    color: var(--primary);
    border-color: var(--primary);
    transform: scale(1.1);
    z-index: 99;
  }
  h1 {
    margin-bottom: 40px;
  }
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
  .wrapper {
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
  }
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }

  img {
    height: 300px;
    width: 100%;
    object-fit: cover;
    transition: transform 0.2s ease;
  }
  img:hover {
    transform: scale(1.1);
  }
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 9999999;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 20px;
    display: grid;
    place-items: center;
  }
  .lightbox img {
    height: 70vh;
    max-width: 100%;
    object-fit: contain;
  }

  @media only screen and (max-width: 900px) {
    .filters {
      flex-direction: column;
      gap: 10px;
      position: static;
    }
    .filter:hover {
      transform: scale(1);
    }
  }
</style>
