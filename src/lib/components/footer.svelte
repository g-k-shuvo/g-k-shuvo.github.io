<script lang="ts">

    import { onMount } from "svelte";
    import { letterSlideIn, maskSlideIn } from "$lib/animations";
    import { loadPagePromise } from "$lib/store";
    import { onScrolledIntoView } from "$lib/utils";
    import { dataState } from "$lib/state.svelte";

    let footerContainerElement: HTMLElement = $state()!
    let logoElement: HTMLElement = $state()!; 
    let statusElement: HTMLElement = $state()!;
    let fullEmailLinkElement: HTMLElement = $state()!;

    let signatureSvg: SVGSVGElement = $state()!;

    function introAnimations() {

        // Scroll activated animations powered by anime instead of svelte transitions
        const logoAnimate = maskSlideIn(logoElement, {});
        const fullEmailLinkAnimate = letterSlideIn(fullEmailLinkElement, { delay: 6, initDelay: 150 });
        const statusAnimate = letterSlideIn(statusElement, { delay: 6, initDelay: 100 });

        // Intersection observer to run animations when footer is in scroll view
        onScrolledIntoView(footerContainerElement, () => {
            logoAnimate.anime();
            fullEmailLinkAnimate.anime();
            statusAnimate.anime();

            // Signature SVG animation
            const animation = [{ strokeDashoffset: '0' }];
            const paths = signatureSvg.querySelectorAll<SVGPathElement>('.sig-path');
            let currentDelay = 0;
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
        });
    }

    onMount(async () => {
        await loadPagePromise;
        introAnimations();
    });

</script>



<div class="footer-wrapper" bind:this={footerContainerElement}>
    <!-- Left side -->
    <div class="flex-wrapper">
        <div class="logo-wrapper">
            <div class="inline-flex" bind:this={logoElement}>
                <img src="assets/imgs/logo.svg" alt="mh logo" class="logo">
            </div>
        </div>

        <div class="status-wrapper">
            <p class="large-text" bind:this={statusElement}>
                open to full-time roles and freelance opportunities — <br>let's build something great together.
            </p>
            <a class="button large-text" bind:this={fullEmailLinkElement} href="mailto:gkshuvo24@gmail.com" target="_blank">gkshuvo24@gmail.com</a>
        </div>

        <p class="year">© {new Date().getFullYear()}</p>
    </div>

    <!-- Right side -->
	<div class="flex-wrapper decor">
        <svg id="signature" class="name-signature" bind:this={signatureSvg} viewBox="0 0 302 303" style="stroke: rgb(79, 78, 85);">
            <g style="fill:none;stroke-width:2.5;stroke-linecap:round;stroke-opacity:1;">
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
</div>



<style lang="sass">

@use "../consts.sass" as consts

@include consts.textStyles()

.footer-wrapper
    width: 100vw
    background-color: #131314
    display: flex
    flex-direction: row
    justify-content: space-between
    padding: 15vh 13vw
    margin-top: 25vh
    box-sizing: border-box

    @media only screen and (max-width: 950px)
        .flex-wrapper.decor
            display: none !important

    @media only screen and (max-width: 950px)
        flex-direction: column-reverse

        .flex-wrapper:not(:first-child)
            margin-bottom: 15vh

    .inline-flex
        flex-grow: 1
        display: flex
        flex-direction: row
        align-items: center


    .logo-wrapper
        margin-bottom: 5vh

        .logo
            display: inline-block
            height: 6vh

    .status-wrapper
        .button.large-text
            margin-top: 2vh

    .year
        margin-top: 5vh
        font-family: consts.$font
        font-size: 1.6vh
        font-weight: normal
        color: rgba(255,255,255,0.3)

    .large-text
        font-size: 2.5vh

        @media only screen and (max-width: 950px)
            br
                display: none

    .flex-wrapper.decor
        display: flex
        flex-direction: column
        justify-content: center

        .name-signature
            width: 20vh

#signature .sig-path
    stroke-dashoffset: 0

</style>