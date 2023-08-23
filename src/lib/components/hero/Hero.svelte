<script>
  import Play from "svelte-material-icons/Play.svelte";
  import Pause from "svelte-material-icons/Pause.svelte";
  import VolumeHigh from "svelte-material-icons/VolumeHigh.svelte";
  import VolumeOff from "svelte-material-icons/VolumeOff.svelte";

  import { variables } from "$lib/scripts/store";
  $: console.log($variables);
</script>

<section>
  <div class="container flex collumn justify start">
    <h1>GMD deju studija</h1>

    <div class="wrapper">
      <a class="button" href="/nodarbibas">Nodarbības</a>
    </div>
    <img class:animate={!$variables.play} src="./circle.svg" alt="" />
    <div class="controls">
      <div class="icon" on:click={() => ($variables.play = !$variables.play)}>
        {#if $variables.play}
          <Play size="20" />
        {:else}
          <Pause size="20" />
        {/if}
      </div>
      <div class="icon" on:click={() => ($variables.muted = !$variables.muted)}>
        {#if $variables.muted}
          <VolumeOff size="20" />
        {:else}
          <VolumeHigh size="20" />
        {/if}
      </div>
    </div>
  </div>

  <div class="video-container flex align">
    <video
      autoplay
      loop
      bind:paused={$variables.play}
      bind:muted={$variables.muted}
      src="./background.mp4"
    />
  </div>
</section>

<style>
  section {
    height: 100vh;
    position: relative;
    overflow: hidden;
  }
  .video-container {
    position: absolute;
    right: 0;
    top: 0;
    margin: auto 0;
    height: 100vh;
    z-index: -1;
  }
  .video-container::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 60vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  section::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 60vh;
    width: 40px;
    background-color: var(--primary);
  }
  video {
    height: 60vh;
    width: 55vw;
    object-fit: cover;
  }

  .controls {
    position: absolute;
    bottom: 60px;
    right: 0px;
    display: flex;
  }
  img {
    position: absolute;
    bottom: -13%;
    right: -10.5%;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .animate {
    animation: rotate 10s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media only screen and (max-width: 900px) {
    section::after {
      content: "";
      background-color: transparent;
      width: 0;
      height: 0;
    }

    .video-container {
      position: absolute;
      top: auto;
      bottom: 70px;
      height: 35vh;
      padding: 0 10px;
      margin: 0;
    }
    .video-container::before {
      content: "";
      position: absolute;
      top: 0;
      transform: translateY(0);
      height: 35vh;
      width: 100%;
    }
    video {
      width: 100%;
      height: 35vh;
    }
    .container {
      justify-content: flex-start;
      padding: 120px 10px;
    }
    h1 {
      max-width: 100%;
    }
    .controls {
      bottom: 20px;
    }
    img {
      position: absolute;
      bottom: -15%;
      right: -30%;
    }
  }
</style>
