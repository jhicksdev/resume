<script lang="ts">
	import Section from './Section.svelte';

	import type { EmploymentHistory } from '../types/EmploymentHistory';
	import type { Section as SectionData } from '../types/Section';

	const sectionData: SectionData = {
		className: 'employment-history',
		label: 'Employment History',
		icon: 'handshake'
	};

	export let data: EmploymentHistory;

	const { employments } = data;
</script>

<Section data={sectionData}>
	{#each employments as employment}
		{@const { company, position, duration, skills } = employment}

		{@const { image, name, url, location } = company}

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
				| <strong>{locationText}</strong> | <em>{position}</em>
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
				{#each skills as skill}
					<li>{skill}</li>
				{/each}
			</ul>
		</div>
	{/each}
</Section>
