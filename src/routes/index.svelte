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
    align-items: center;
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
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="306"
    height="62"
    viewBox="0 0 306 62">
    <text
      id="The_Lasgidi_Times"
      data-name="The Lasgidi Times"
      transform="translate(0 45)"
      fill="#00000"
      font-size="40"
      font-family="Chomsky">
      <tspan x="0" y="0">The Lasgidi Times</tspan>
    </text>
  </svg>
</div>

<!-- <h1>LASGIDI TIMES</h1> -->

<!-- <figure>
  <img alt="Borat" src="great-success.png" />
  <figcaption>HIGH FIVE!</figcaption>
</figure> -->

<p>
  <strong>Top Trending Headlines currated for you</strong>

  <News />
</p>
