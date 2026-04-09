<script lang="ts">

	import { animate, stagger } from "animejs";
	import { onMount } from "svelte";
	import { loadPagePromise } from "$lib/store";
	import { loadImage } from "$lib/utils";
    import { scrollAnchorState, viewPortState } from "$lib/state.svelte";

	// DOM Node Binds for animations
	let homeContainerElement: HTMLElement = $state()!; // Container
	let backgroundContainerElement: HTMLElement = $state()!;
	let backgroundImageElement: HTMLElement = $state()!; // Offsets

	// Elements for animations
	let titleWord1Element: HTMLElement = $state()!; 
	let titleWord2Element: HTMLElement = $state()!; 
	let shortDetailsElement: HTMLElement = $state()!; 
	let callToActionElement: HTMLElement = $state()!;

	// SVG Signature
	let signatureSvg: SVGSVGElement = $state()!;

	onMount(async () => {
		await loadPagePromise;
		// Set navbar home link's y location to top of homeContainer
		scrollAnchorState.home = homeContainerElement;

		// Add parallax scrolling offsets to slickScroll
		viewPortState.slickscrollInstance!.addOffset({
			element: backgroundContainerElement,
			speedY: 0.8
		});

		introAnimations();
	})


	// Page load animations
	function introAnimations() {

		const animation = [{ strokeDashoffset: '0' }];

		// Animate all signature paths sequentially
		const paths = signatureSvg.querySelectorAll<SVGPathElement>('.sig-path');
		let currentDelay = 500;
		paths.forEach(path => {
			const len = path.getTotalLength();
			path.style.strokeDasharray = String(len);
			path.style.strokeDashoffset = String(len);
			const duration = Math.max(250, Math.min(1500, len * 3));
			path.animate(animation, {
				duration,
				delay: currentDelay,
				easing: 'cubic-bezier(.72,.3,.25,1)',
				fill: 'forwards'
			});
			currentDelay += duration;
		});


		// Animate background image
		Object.assign(backgroundContainerElement.style, {
			height: "0",
			transform: "scale(1.3)",
		});
		backgroundImageElement.style.transform = "translateY(80%) scale(1.4)";

		animate(backgroundContainerElement, {
			height: "100%",
			scale: 1,
			easing: "cubicBezier(0.165, 0.84, 0.44, 1)",
			duration: 1500,
			delay: 500,
			complete: () => {
				backgroundContainerElement.style.boxShadow = "3px 9px 18px rgba(0, 0, 0, 0.2)";
			}
		});

		animate(backgroundImageElement, {
			translateY: "0",
			scale: 1,
			easing: "cubicBezier(0.165, 0.84, 0.44, 1)",
			duration: 1500,
			delay: 500
		});


		// Animate title elements
		const titleElements = [titleWord1Element, titleWord2Element, shortDetailsElement, callToActionElement];
		titleElements.forEach(e => {
			e.style.transform = "translateY(130%) rotate(10deg)";
		})
		animate(titleElements, {
			rotate: "0",
			translateY: "0%",
			easing: "cubicBezier(0.165, 0.84, 0.44, 1)",
			duration: 900,
			delay: stagger(80, {start: 500})
		});
	}

</script>



<div id="content-container" style="padding-top: 23vh" bind:this={homeContainerElement}>
	<div class="content-wrapper">
		<div class="flex">
			<div class="flex-wrapper first">

				<svg id="signature" class="h-signature" bind:this={signatureSvg} viewBox="0 0 302 303">
					<g style="fill:none;stroke:#ffffff;stroke-width:2.5;stroke-linecap:round;stroke-opacity:1;">
						<path class="sig-path" d="M244.119 56.9572C255.452 35.1239 262.619 -6.34279 200.619 2.45721C188.452 3.95721 153.819 12.4572 112.619 34.4572C93.2854 44.9572 48.8188 74.0572 25.6188 106.457C13.7854 120.457 -5.38123 154.857 12.6188 180.457C20.4521 190.957 45.2188 206.557 81.6188 184.957C100.952 173.291 143.119 138.957 157.119 94.9572C144.952 138.957 110.019 233.057 67.6188 257.457C56.2854 262.624 37.2188 264.157 51.6188 228.957C58.9521 213.457 86.5188 180.757 138.119 173.957"/>
						<path class="sig-path" d="M130.119 210.957C117.285 239.791 90.9188 298.157 88.1188 300.957"/>
						<path class="sig-path" d="M128.119 264.457C110.452 271.124 82.2188 285.057 110.619 287.457C119.285 287.791 138.919 284.357 148.119 267.957C140.785 278.624 131.619 297.457 153.619 287.457C155.785 286.791 161.419 284.157 166.619 278.957L171.581 268.893"/>
						<path class="sig-path" d="M202.119 206.957L171.581 268.893"/>
						<path class="sig-path" d="M171.581 268.893C176.427 263.602 187.719 254.609 194.119 260.957C202.119 268.893 182.544 297.957 171.581 289.457C169.606 288.291 166.249 284.157 168.619 276.957L161.619 290.457"/>
						<path class="sig-path" d="M151.119 260.957L158.619 248.957"/>
						<path class="sig-path" d="M210.119 261.957C205.619 270.457 195.919 288.357 193.119 291.957C204.285 276.457 226.519 251.157 226.119 273.957"/>
						<path class="sig-path" d="M239.619 267.957C233.619 276.457 224.219 292.857 234.619 290.457C245.019 288.057 254.285 280.457 257.619 276.957"/>
						<path class="sig-path" d="M257.619 276.957C263.952 269.414 277.719 257.241 282.119 268.893"/>
						<path class="sig-path" d="M257.619 276.957C253.119 282.791 248.219 293.057 264.619 287.457C268.452 284.957 276.919 278.757 280.119 273.957C277.452 281.957 275.919 295.557 291.119 285.957L300.619 276.957"/>
						<path class="sig-path" d="M241.119 260.957L248.619 248.957"/>
					</g>
				</svg>

			</div>
			
			<div class="flex-wrapper second">
				<h1 class = "title">
					<div class="title-mask">
						<div class="word" bind:this={titleWord1Element}>Golam</div>
					</div><br> 
					<div class="title-mask">
						<div class="word" bind:this={titleWord2Element}>Kibria</div>
					</div>
				</h1>
				<div class="occupation mask">
					<p class = "paragraph" bind:this={shortDetailsElement}>
						software enginner from bangladesh
					</p>
				</div>
				<div class="wrapper action-mask">
					<div class="action" bind:this={callToActionElement}>
						<div class="mask">
							{#await loadImage("assets/imgs/scroll_arrow.png") then src}
								<img src="{src}" alt="">
							{/await}
						</div>
						<div>
							scroll
						</div>
					</div>
				</div>
			</div>

			<div class="parallax-wrapper home-back" bind:this={backgroundContainerElement}>
				{#await loadImage("assets/imgs/home-back.jpg") then src}
					<img src="{src}" bind:this={backgroundImageElement} draggable="false" alt="Home Background" style="width:100%; height: 100%; object-fit: cover;">
				{/await}
			</div>
		</div>
	</div>
</div>



<style lang="sass">

@use "../consts" as consts
@include consts.textStyles()

#content-container
	height: 100vh
	width: 100vw
	padding: 12vh 7vw
	box-sizing: border-box
	position: relative

	.content-wrapper
		position: relative
		height: 100%
		box-sizing: border-box
		z-index: 2

	.flex
		z-index: 2
		width: 95%
		height: 100%
		display: flex
		flex-direction: row
		justify-content: space-between
		position: relative
		box-sizing: border-box

		.flex-wrapper
			position: relative
			height: 100%
			display: flex
			flex-direction: column
			justify-content: center

			&.second
				margin-right: 5vw 
				justify-content: flex-end

			h1
				font-weight: 400
				text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3)

			.title-mask
				overflow: hidden
				display: inline-flex

			.mask
				overflow: hidden

			.h-signature
				width: 35vh
				margin-left: -6vh

			.occupation
				position: relative
				margin-top: 8vh

			.action-mask
				margin-top: 10vh
				margin-right: 7vw
				display: inline-flex
				overflow: hidden

				.action
					font-size: 2vh
					letter-spacing: 0.5vh
					font-family: consts.$font
					text-transform: uppercase
					color: white
					position: relative
					display: inline-flex
					flex-direction: row
					align-items: center

					.mask
						overflow: hidden
						height: 2vh

						img
							height: 2.3vh
							margin-right: 1.5vh
							animation: scrollArrowLoop 3s ease infinite

	.parallax-wrapper
		position: absolute
		left: 0
		z-index: -1
		width: 80%
		height: 100%
		margin-left: 5%
		border-radius: 1.5vh
		overflow: hidden
		box-sizing: border-box
		-webkit-touch-callout: none
		-webkit-user-select: none
		-moz-user-select: none
		-ms-user-select: none
		user-select: none
		transition: box-shadow 0.6s ease
		-webkit-transition: box-shadow 0.6s ease

		@media only screen and (max-width: 1250px)
			&
				opacity: 0.7

		@media only screen and (max-width: 750px)
			&
				opacity: 0.3

		img
			height: 100%
			width: 100%
			object-fit: cover
			border-radius: 1.5vh

@media only screen and (min-width: 1250px)
	.h-signature
		display: block

	.occupation
		width: 100%

	#content-container .flex *
		text-align: left

@media only screen and (max-width: 1250px)
	#content-container .flex *
		text-align: left

	.flex
		justify-content: center !important
		width: 100% !important

		.flex-wrapper 
			&.first
				display: none !important

			&.second
				justify-content: center !important
				margin: 0

	#content-container .flex .bottom
		text-align: left
		left: 5vw

	.parallax-wrapper
		width: 100% !important
		margin-left: 0 !important

@media only screen and (max-width: 750px)
	.occupation
		width: 70%


#signature .sig-path
	stroke-dashoffset: 0


@keyframes scrollArrowLoop
	0%
		transform: translateY(-120%)
	
	30%
		transform: translateY(0%)
	
	70%
		transform: translateY(0%)
	
	100%
		transform: translateY(120%)

</style>