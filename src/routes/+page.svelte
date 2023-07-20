<script>
	import { calculateAge } from "$lib/calculate-age";

  export let age = calculateAge('1994-10-18');
  export let girlfriendDuration = calculateAge('2011-08-08');
  export let location = "Zaandam, Netherlands";
  export let loves = "cats and whiskey";
  export let passion = "solving problems with code and automation";
</script>

<main>
  <h1>Hello, I'm Bart van der Braak!</h1>
  <p>I'm {age} years old and have been with my girlfriend for {girlfriendDuration} years.</p>
  <p>I'm located in {location}.</p>
  <p>I love {loves}.</p>
  <p>I'm passionate about {passion}.</p>
</main>