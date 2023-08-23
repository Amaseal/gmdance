<script>
  import CalendarToday from "svelte-material-icons/CalendarToday.svelte";
  import Alarm from "svelte-material-icons/Alarm.svelte";

  import { fly } from "svelte/transition";

  export let data;

  import { createObserver } from "svelte-use-io";
  const { observer } = createObserver({ rootMargin: "-50%" });

  let observed = false;
</script>

<div
  class="item flex"
  use:observer
  on:intersecting={() => (observed = true)}
  on:unintersecting={() => (observed = false)}
>
  <div class="text flex collumn justify">
    <h2>{data.title}</h2>
    {#if data.subtext}
      <p class="subtext">{data.subtext}</p>
    {/if}
    <p>{data.description}</p>

    <div class="time">
      {#if data.times}
        {#each data.times as item}
          <div class="flex">
            <p class="day"><CalendarToday /><span>{item.day}</span></p>
            <p><Alarm /> <span>{item.time}</span></p>
          </div>
        {/each}
      {/if}
    </div>
  </div>
  {#if observed}
    <div class="image">
      <img
        src={data.image}
        alt={data.title}
        in:fly={{ duration: 400, y: 200 }}
        out:fly={{ duration: 400, y: -200 }}
      />
    </div>
  {/if}
</div>

<style>
  .image {
    display: flex;
    height: 100%;
    max-width: 50%;
  }
  .text {
    height: 350px;
    max-width: 50%;
  }
  h2 {
    font-size: 70px;
    margin-bottom: 20px;
  }
  .item {
    padding: 40px 0;
    justify-content: space-between;
  }
  .subtext {
    color: var(--primary);
    margin: 10px 0 30px 0;
  }
  p {
    max-width: 40vw;
    display: flex;
  }

  .time {
    margin-top: 20px;
  }
  .time > div > p {
    margin-top: 5px;
  }
  .day {
    width: 200px;
  }
  span {
    margin-left: 10px;
  }
  img {
    width: 40vw;
    height: 350px;
    object-fit: cover;
    margin-left: auto;
  }

  @media only screen and (max-width: 900px) {
    .item {
      flex-direction: column;
    }
    img {
      width: 100%;
      height: 300px;
      margin-bottom: 30px;
      order: 1;
    }
    .text {
      order: 2;
    }
    p {
      max-width: 100%;
    }
  }
</style>
