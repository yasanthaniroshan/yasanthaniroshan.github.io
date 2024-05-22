<script>
	import { fade } from 'svelte/transition';

</script>

<svelte:head>
	<title>Yasantha Niroshan</title>
</svelte:head>

<section transition:fade>
	<div class="about-me-with-experience">
		<div class="about-me">
			<p id="about-me-title">About Me</p>
			<p id="about-me-paragraph">
				I'm Yasantha Niroshan, an IoT automation developer studying Computer Science and Engineering
				at the University of Moratuwa. I started at Mahinda College, leading the Robotic Society.
				Experienced in software development and teaching, I excel in Xilinx Vivado, VHDL, and C
				programming. I hold certifications in Embedded C, Git, and AI, and contribute to Moraspirit
				and RoboticGen Academy. Driven by curiosity, I approach challenges with enthusiasm and a
				commitment to excellence.
			</p>
		</div>
		<div class="experience">
			<p id="experience-title">Experience</p>
			<div class="experience-block">
				<p id="experience-block-title">Web Developer</p>
				<p id="experience-block-compay">KreativHumans</p>
				<div class="experience-block-duration">
					<p id="experience-block-duration-start">2021</p>
					<p id="experience-block-duration-end">Present</p>
				</div>
			</div>
			<div class="experience-block">
				<p id="experience-block-title">Assiociate Software Engineer</p>
				<p id="experience-block-compay">RoboticGen</p>
				<div class="experience-block-duration">
					<p id="experience-block-duration-start">2023</p>
					<p id="experience-block-duration-end">Present</p>
				</div>
			</div>
			<div class="experience-block">
				<p id="experience-block-title">Video Editor</p>
				<p id="experience-block-compay">Moraspirit Initiative</p>
				<div class="experience-block-duration">
					<p id="experience-block-duration-start">2022</p>
					<p id="experience-block-duration-end">2024</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.about-me-with-experience {
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin: 2rem;
	}

	.about-me {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: left;
		margin-left: 1rem;
		max-width: 25vw;
	}

	#about-me-title {
		font-weight: 500;
		font-size: 1.6rem;
		margin: 0;
		padding: 0;
	}

	.experience {
		display: flex;
		flex-direction: column;
		align-self: flex-start;
		justify-content: center;
		align-items: left;
		margin-left: 9rem;
		max-width: 25vw;
	}

	#experience-title {
		font-weight: 500;
		font-size: 1.6rem;
		margin: 0;
		padding: 0;
	}

	.experience-block {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: left;
		margin-top: 1rem;
	}

	#experience-block-title {
		font-weight: 500;
		font-size: 1.2rem;
		margin: 0;
		margin-top: 1rem;
		padding: 0;
	}

	#experience-block-compay {
		font-weight: 400;
		font-size: 1rem;
		margin: 0;
		margin-top: 0.3rem;
		margin-bottom: 0.3rem;
		padding: 0;
	}

	.experience-block-duration {
		display: flex;
		flex-direction: row;
		justify-content: left;
		align-items: start;
	}

	#experience-block-duration-start {
		font-weight: 300;
		font-size: 1rem;
		margin: 0;
		margin-right: 2rem;
		padding: 0;
	}

	#experience-block-duration-end {
		font-weight: 300;
		font-size: 1rem;
		margin: 0;
		margin-left: 1rem;
		padding: 0;
	}

	@media only screen and (max-width: 992px) {
		.about-me {
			max-width: 45vw;
		}
	}
	@media only screen and (max-width: 769px) {
		.experience {
			align-self: center;
			align-items: center;
			justify-content: center;
			margin-left: 0;
			max-width: 100vw;
		}
		.about-me-with-experience {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin: 2rem;
		}
		.about-me {
			
			max-width: 60vw;
			justify-content: center;
			align-items: center;
			margin: 0;
		}
		.experience-block {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-top: 1rem;
		}
	}
</style>
