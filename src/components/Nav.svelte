<script lang="ts">
  export let routes: { url: string; label: string }[];
</script>

<nav>
  <ul>
    {#each routes as route}
      <li><a href={route.url}>{route.label}</a></li>
    {/each}
  </ul>
</nav>

<style>
  nav {
    background-color: #007bff;
    padding: 1rem;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: background-color 0.2s ease-in-out;
  }

  a:hover {
    background-color: #0056b3;
  }
</style>
