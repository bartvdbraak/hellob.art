<!-- __layout.svelte -->
<script>
  import Nav from '../components/Nav.svelte';

  export let routes = [
    { url: "/", label: "Home" },
    { url: "/projects", label: "Projects" },
    { url: "/about", label: "About" },
    // { url: "/blog", label: "Blog" },
    { url: "/contact", label: "Contact" }
  ]
</script>

<main>
  <Nav {routes} />
  <slot />
</main>
