<svelte:head>
	<title>DSU Timer</title>
</svelte:head>

<script>
import { writable } from 'svelte/store';

let member = writable("")
const members = writable([])
function handleClick() {
	$members = [...$members, $member];
	$member = ""
}
</script>

<style>
  .content {
    display: grid;
    grid-template-columns: 20% 80%;
    grid-column-gap: 10px;
  }
</style>

<h1>Form</h1>
<label>Team member name:</label>
<input type="text" bind:value={$member} />
<button on:click={handleClick}>Add member</button>

<p>{JSON.stringify($members)}</p>

