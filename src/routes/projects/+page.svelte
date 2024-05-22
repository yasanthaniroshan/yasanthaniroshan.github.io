<script>
	import { onMount, afterUpdate, onDestroy } from 'svelte';
	import gitlogo from '$lib/images/github-logo.png';
	import { fade, crossfade } from 'svelte/transition';
	let repositories = [];
	let displayedRepositories = [];
	let count = 4; // Number of repositories to display initially
	let observer;

	// Function to fetch repositories from GitHub API
	async function fetchRepositories() {
		const response = await fetch('https://api.github.com/users/yasanthaniroshan/repos');
		const data = await response.json();
		repositories = data.sort((a, b) => b.stargazers_count - a.stargazers_count);
		displayedRepositories = repositories.slice(0, count);
	}

	const loadMoreRepositories = () => {
		if (count < repositories.length) {
			displayedRepositories = repositories.slice(0, ++count);
		}
	};

	function setupObserver() {
		if (observer) observer.disconnect();
		observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					loadMoreRepositories();
				}
			});
		});
		const lastRepository = document.querySelector('.repository:last-child');
		if (lastRepository) {
			observer.observe(lastRepository);
		}
	}

	onMount(async () => {
		await fetchRepositories();
	});

	afterUpdate(() => {
		setupObserver();
	});

	onDestroy(() => {
		if (observer) {
			observer.disconnect();
		}
	});
</script>

<svelte:head>
	<title>Projects</title>
	<meta name="description" content="Repositories" />
</svelte:head>

<section class="repositories" transition:fade>
	{#each displayedRepositories as repo}
		<article class="repository" transition:fade>
			<a href={repo.html_url} style="color: black;text-decoration:none" target="_blank"
				><h1>{repo.name}</h1></a
			>

			{#if repo.description}
				<p class="description">{repo.description}</p>
			{/if}
			<div class="row">
				<div class="icons">
					<span>👉</span><a href={repo.html_url} target="_blank"
						><img src={gitlogo} alt={repo.name} style="height: 20px;" /></a
					>
					<span>⭐ {repo.stargazers_count}</span>
					<span>🍴 {repo.forks_count}</span>
				</div>
				<div class="tags">
					{#each repo.topics.slice(0, 2) as tag}
						<span style="font-weight: bold">#{tag} <br /> </span>
					{/each}
				</div>
			</div>
		</article>
	{/each}
</section>

<style>
	.repositories {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		padding: 2rem;
		margin: 2rem;
	}
	.repository {
		border: 0.1rem solid #ccc;
		padding: 1rem;
		border-radius: 0.5rem;
		padding: 1rem;
	}
	.row {
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		justify-content: space-between;
	}
	.row span,
	img {
		margin-right: 10px;
	}
    .icons
    {
        margin-top: 1rem;
        min-width: 10rem;
    }
    @media only screen and (max-width: 1325px)
    {
        .repositories {
            grid-template-columns: 1fr;
            padding-top: 0;
        }
    }
    @media only screen and (max-width: 600px)
    {
		h1{
			text-align: center;
		}
		.description
		{
			text-align: center;
		}
        .row {
            flex-direction: column-reverse;
        }
        .tags {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }
	}
    
</style>
