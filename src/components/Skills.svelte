<script lang="ts">
  import Section from "./Section.svelte";
  import type { Section as SectionData } from "../types/Section";

  export let texts: string[];

  const sectionData: SectionData = {
    className: "skills",
    label: "Skills",
    icon: "screwdriver-wrench",
  };
</script>

<Section data={sectionData}>
  <p>Experienced in:</p>
  <ul>
    {#each texts as text}
      <li>{text}</li>
    {/each}
  </ul>
</Section>
