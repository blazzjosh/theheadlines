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
    target.src =
      "https://avatars2.githubusercontent.com/u/19534082?s=400&u=54b663d6cc408ef3fd2ca6b054f4e86aa8e7a025&v=4";
  };

  function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }
</script>

<style>
  figure {
    margin: 1em 1em 1em 0;
  }
  img {
    max-width: 250px;
    margin: 0 0 1em 0;
    height: 80%;
  }
  .content {
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
  }

  /* Loading animation */

  .circle {
    width: 30px;
    height: 30px;
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
  <div class="content">
    <div class="writeup">

      <figure>
        <img alt="deadimg" src={article.urlToImage} on:error={handleError} />
      </figure>

      <p>{article.title}</p>
      <i>
        <p class="cont">{article.description}</p>
      </i>
      <p class="cont">
        {article.content}
        <a href="##">{article.source.name}</a>
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
