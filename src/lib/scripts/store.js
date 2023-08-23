import { writable } from "svelte/store";

export const variables = writable({
  play: false,
  muted: true,
  navOpen: false,
});
