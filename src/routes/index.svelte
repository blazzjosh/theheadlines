<script>
  import News from "../components/News.svelte";
</script>

<style>
  /* h1, */
  /* figure, */
  p {
    text-align: center;
    margin: 0 auto;
  }

  /* h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  } */

  /*   figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  } */

  p {
    margin: 1em auto;
  }
  .logo {
    display: flex;
    justify-content: center;
  }
  @media (min-width: 480px) {
    /* h1 {
      font-size: 4em;
    } */
  }
</style>

<svelte:head>
  <title>The Headlines</title>
</svelte:head>

<div class="logo">
  <img src="Untitled-1.svg" alt="logo" />
</div>

<p>
  <strong>Top Trending Headlines currated for you</strong>

  <News />
</p>
