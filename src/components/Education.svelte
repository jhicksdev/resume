<script lang="ts">
	import Section from './Section.svelte';

	import type { Education } from '../types/Education';
	import type { Section as SectionData } from '../types/Section';

	const sectionData: SectionData = {
		className: 'education',
		label: 'Education',
		icon: 'graduation-cap'
	};

	export let data: Education;

	const { institutions } = data;
</script>

<Section data={sectionData}>
	{#each institutions as institution}
		{@const { image, name, url, location, major, duration, awards } = institution}

		{@const { src, width } = image}
		{@const { city, state } = location}
		{@const { start, end } = duration}

		{@const locationText = `${city}, ${state}`}

		<div class="instance">
			<img {src} alt={name} {width} />
			<p class="info">
				<a href={url}>
					<strong>{name}</strong>
				</a>
				| <strong>{locationText}</strong> | <em>{major}</em>
			</p>
			<p class="duration">
				<i class="fa-solid fa-calendar"></i>
				{start.month}
				{start.year} → {#if end}
					{end.month} {end.year}
				{:else}
					Present
				{/if}
			</p>
			<ul>
				{#each awards as award}
					<li>{award}</li>
				{/each}
			</ul>
		</div>
	{/each}
</Section>
