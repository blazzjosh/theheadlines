<script>
  import { onMount } from "svelte";
  import axios from "axios";

  onMount(() => {
    get();
  });

  function get() {
    axios({
      method: "get",
      url:
        "https://newsapi.org/v2/top-headlines?country=ng&apiKey=349dbd0a91174cd582602c62f9361e78",
      responseType: "json"
    })
      .then(res => parts(res.data.articles))
      .catch(err => console.log(err));
  }

  let articles = "";
  let names = "";

  function parts(res) {
    for (let i = 0; i < res.length; i++) {
      articles = [...articles, res[i]];
    }
  }

  const handleError = ({ target }) => {
    target.src = "/../default bg.png";
  };

  function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }
</script>

<style>
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;
    width: 984px;
    height: 230px;
  }
  figure {
    margin: 1em 1em 1em 0;
  }
  img {
    max-width: 250px;
    max-height: 200px;
    margin: 1em 0 1em 0;
    width: 100%;
    height: 100%;
  }
  .one {
    width: 40%;
  }

  .two {
    width: 60%;
    text-align: justify;
    padding-left: 30px;
  }
  /* .content {
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid black;
    width: 984px;
    height: 258px;
  }
  .writeup {
    margin: 1em 1em 1em 2em;
    display: flex;
    justify-content: flex-start;
  }
  .cont {
    font-size: 14px;
    color: #555555;
    text-align: justify;
    padding: 0px 0px 0px 50px;
  } */

  /* Loading animation */

  .circle {
    width: 10px;
    height: 10px;
    background-color: #000000;
    border-radius: 50%;
    animation: move 2s cubic-bezier(0.41, 0.83, 0.63, 0.24) infinite;
    display: inline-block;
  }
  @keyframes move {
    0% {
      transform: translateX(0) scale(0.5);
    }
    25% {
      transform: translateX(-80px) scale(1);
    }
    50% {
      transform: translateX(0) scale(0.5);
    }
    75% {
      transform: translateX(80) scale(1);
    }
    100% {
      transform: translateX(0) scale(0.5);
    }
  }
  /* Loading animation */
</style>

<!-- Content Block Begins -->

{#each articles as article, i}
  <div class="main">
    <div class="one image">
      <figure>
        <img src={article.urlToImage} alt="ff" on:error={handleError} />
      </figure>
    </div>

    <div class="one">
      <p>
        <i>
          <b>{truncateString(article.title, 99)}</b>
        </i>
      </p>
    </div>

    <div class="two">
      <p>
        {truncateString(article.content, 250)}
        <a href={article.url} target="_blank">Full Story</a>
      </p>
    </div>
  </div>
{:else}
  <div class="loader">
    <div class="circle" />
    <p>Loading</p>
  </div>
{/each}

<!-- Content Block Ends -->
