<script lang="ts">
	import type { Section } from '../types/Section';

	export let data: Section;

	const { className, label, icon } = data;
</script>

<section class={className}>
	<h2>
		<i class="fa-solid fa-{icon}"></i>
		{label}
	</h2>
	<hr />
	<slot />
</section>
