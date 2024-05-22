<script>
	import './styles.css';
	import Navbar from './Navbar.svelte';
	import Header from './Header.svelte';
	import { slide } from 'svelte/transition';
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta
		name="keywords"
		content="Yasantha,Niroshan,Yasantha Niroshan,Portifilo,yasantha,niroshan,yasantha niroshan"
	/>
	<meta
		name="description"
		content="This is my portfolio website showcasing my skills and experience in web development, IoT automation, and robotics."
	/>
	<meta name="author" content="Yasantha Niroshan" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="description" content="Svelte demo app" />
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"  >
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap" rel="stylesheet" >
</svelte:head>

<body>
	<main class="page">
		<Header />
		<slot />
	</main>
	<Navbar />
</body>

<style>
	
</style>
