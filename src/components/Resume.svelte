<script lang="ts">
	import Profile from './Profile.svelte';
	import Skills from './Skills.svelte';
	import EmploymentHistory from './EmploymentHistory.svelte';

	import type { Resume } from '../types/Resume';
	import Education from './Education.svelte';

	export let data: Resume;

	const { profile, skills, employmentHistory, education } = data;
</script>

<div class="resume">
	<Profile data={profile} />
	<Skills texts={skills} />
	<EmploymentHistory data={employmentHistory} />
	<Education data={education} />
</div>
