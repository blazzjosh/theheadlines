<script>
  let a = 1;
  let b = 2;
  let c = "";

  function add() {
    c = a + b;
  }
</script>

<svelte:head>
  <title>Percentage Calculator</title>
</svelte:head>
<h1>Calculate Pecentages</h1>

<input type="number" bind:value={a} />
is what percent of
<input type="number" bind:value={b} />
<span>{c}</span>
<input type="number" value="" />

<button on:click={add}>ADD</button>
