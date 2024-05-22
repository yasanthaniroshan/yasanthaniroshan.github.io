<script>
	import profile from '$lib/images/profile.webp';
</script>

<section>
	<div class="basic-details-with-photo">
		<div class="photo">
			<img loading="lazy" src={profile} alt="" class="photo-class" />
		</div>
		<div class="basic-details">
			<p id="start-text">Hello, I am Yasantha !</p>
			<p id="start-paragraph">
				A computer science and engineering enthusiast with a diverse background in academia,
				industry, and volunteerism, specializing in IoT automation, robotics, and web development.
			</p>
		</div>
	</div>
</section>

<style>
	.basic-details-with-photo {
		display: flex;
		flex-direction: row;
		justify-content: left;
		align-items: center;
		margin: 2rem 2rem 1rem 2rem;
	}

	.photo-class {
		width: 10rem;
		height: 10rem;
		border-radius: 50%;
	}

	.basic-details {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: left;
		margin-left: 2rem;
	}

	.basic-details p {
		margin: 0;
		padding: 0;
	}

	#start-text {
		font-weight: 500;
		font-size: 1.6rem;
	}

	#start-paragraph {
		font-weight: 300;
		max-width: 30rem;
	}

	@media only screen and (max-width: 992px) {
		.basic-details-with-photo {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			
		}
		.basic-details {
		align-items: center;
		margin-left: 0;
		}
	

		.photo-class {
			width: 8rem;
			height: 8rem;
		}

		.basic-details {
			margin-top: 1rem;
			text-align: center;
		}

		#start-text {
			font-size: 1.4rem;
		}

		#start-paragraph {
			font-size: 1rem;
		}
	}
	@media only screen and (max-width: 600px) {
		.basic-details-with-photo {
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
</style>


