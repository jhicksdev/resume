<script lang="ts">
	import type { Profile } from '../types/Profile';

	export let data: Profile;

	const { image, name, occupation, phone, email, github } = data;

	const { src } = image;
	const { first, last } = name;
	const { title } = occupation;
	const { number } = phone;
	const { address } = email;
	const { username } = github;

	const fullName = `${first} ${last}`;

	const callLink = `tel:+1${number.replace(/[^0-9.]/, '')}`;
	const emailLink = `mailto:${address}`;
	const githubLink = `https://github.com/${username}`;
</script>

<div class="profile">
	<img {src} alt={fullName} />
	<div class="info">
		<p class="name">{fullName}</p>
		<p class="occupation"><em>{title}</em></p>
		<p class="phone">
			<i class="fa-solid fa-phone"></i>
			<a href={callLink}>{number}</a>
		</p>
		<p class="email">
			<i class="fa-solid fa-envelope"></i>
			<a href={emailLink}>{address}</a>
		</p>
		<p class="github">
			<i class="fa-brands fa-github"></i>
			<a href={githubLink}>{username}</a>
		</p>
	</div>
</div>
