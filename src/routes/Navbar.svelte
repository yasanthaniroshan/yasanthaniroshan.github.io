<script>
	    import { base } from '$app/paths';

</script>
<nav class="nav-bar">
	<div class="nav-bar-buttons">
		<a href="{base}/" id="home-link" class="nav-bar-options">HOME</a>
		<a href="{base}/projects" id="projects-link" class="nav-bar-options">PROJECTS</a>
		<a href="{base}/articles" id="articles-link" class="nav-bar-options">ARTICLES</a>
		<a href="{base}/" id="contact-link" class="nav-bar-options">CONTACT</a>
	</div>
</nav>

<style>
	.nav-bar {
		position: fixed;
		bottom: 0;
		left: 30vw;
		right: 30vw;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.nav-bar-buttons {

		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;

		margin-bottom: 2vh;

		font-size: 1rem;
		font-weight: 500;

		background-color: #8d8d8d;
		color: #f0f0f0;

		border-radius: 8vw;
		border: #8d8d8d 0.1rem solid;
	}

	.nav-bar-options {
		text-decoration: none;
		cursor: pointer;
		padding: 0.3vw;
		margin: 0.2vw;
		color: white;
		border-radius: 8vw;
	}

	.nav-bar-options:hover {
		background-color: white;
		color: #8d8d8d;
		padding: 0.3vw;
		margin: 0.2vw;
	}


	@media only screen and (max-width: 992px) {
        .nav-bar {
			left: 15vw;
			right: 15vw;
		}

		.nav-bar-buttons {
			font-weight: 500;
            border-radius: 6vw;

		}
		.nav-bar-options {
			padding: 0.3vw;
			margin: 0.2vw;
            border-radius: 8vw;
		}
		.nav-bar-options:hover {
			padding: 0.3vw;
			margin: 0.2vw;
		}
	}

	@media only screen and (max-width: 769px) {
		.nav-bar {
			left: 15vw;
			right: 15vw;
		}

		.nav-bar-buttons {
			font-weight: 500;
		}
		.nav-bar-options {
			padding: 0.6vw;
			margin: 0.4vw;
		}
		.nav-bar-options:hover {
			padding: 0.6vw;
			margin: 0.4vw;
		}
	}

	@media only screen and (max-width: 600px) {
		.nav-bar {
			left: 10vw;
			right: 10vw;
		}
		.nav-bar-options {
			padding: 1.2vw;
			margin: 0.8vw;
            border-radius: 4vw;
		}
		.nav-bar-options:hover {
			padding: 1.2vw;
			margin: 0.8vw;
		}

		.nav-bar-buttons {
			font-weight: 500;
            border-radius: 4vw;

		}
	}
</style>
