<!-- About.svelte -->
<script>
  export let proficientLanguages = ["Python", "Javascript", "Bash"];
  export let proficientTechnologies = ["Terraform", "Bicep"];
  export let workPlace = "Triple, Alkmaar";
  export let workRole = "DevOps engineer";
  export let azureExperience = "Azure and Azure DevOps";
  export let containerSkills = "containers and Kubernetes";
  export let certifications = ["AZ-104", "CKA"];
</script>

<main>
  <h1>About Me</h1>
  <p>I'm a {workRole} at {workPlace}.</p>
  <p>I'm proficient in languages like {proficientLanguages.join(", ")} and technologies such as {proficientTechnologies.join(", ")}.</p>
  <p>I have extensive experience with {azureExperience}.</p>
  <p>I'm keen on utilizing {containerSkills}.</p>
  <p>Certifications I've obtained: {certifications.join(", ")}.</p>
</main>
