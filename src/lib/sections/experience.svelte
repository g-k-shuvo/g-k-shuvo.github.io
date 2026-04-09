<script lang="ts">

    import { onMount } from "svelte";
    import { loadPagePromise } from "$lib/store";
    import { letterSlideIn, maskSlideIn } from "$lib/animations";
    import { onScrolledIntoView } from "$lib/utils";
    import { dataState, scrollAnchorState } from "$lib/state.svelte";

    let sectionElement: HTMLElement;
    let companyHeaderElement: HTMLElement;
    let highlightElement: HTMLElement;

    let sectionResolve: (value?: any) => void;
    let sectionPromise = new Promise((resolve) => sectionResolve = resolve);

    onMount(async () => {
        await loadPagePromise;
        scrollAnchorState.experience = sectionElement;
        onScrolledIntoView(sectionElement, () => sectionResolve(true));
    });

    function titleIn(node: HTMLElement) {
        const titleAnimation = letterSlideIn(node, { delay: 15 });
        titleAnimation.anime();
    }

    function companyIn(node: HTMLElement) {
        const animation = letterSlideIn(node, { delay: 10, initDelay: 200 });
        animation.anime();
    }

    function highlightIn(node: HTMLElement) {
        const animation = letterSlideIn(node, { delay: 10, initDelay: 100 });
        animation.anime();
    }

</script>

{#if dataState.experienceData}
<div id="content-container" class="experience" bind:this={sectionElement}>
    {#await sectionPromise then _}
        <div class="section-header">
            <h1 class="title" use:titleIn>
                Experience
            </h1>
        </div>

        <div class="company-block">
            <div class="company-header" bind:this={companyHeaderElement}>
                <div class="company-top-row" in:maskSlideIn={{ duration: 1000, reverse: true, delay: 150 }}>
                    <h2 class="company-name">{dataState.experienceData.company}</h2>
                    <span class="company-location">{dataState.experienceData.location}</span>
                </div>
                <div class="company-meta" use:companyIn>
                    {dataState.experienceData.role} · {dataState.experienceData.workMode} · {dataState.experienceData.duration}
                </div>
            </div>

            <div class="project-grid">
                {#each dataState.experienceData.projects as item, i}
                    <div class="project-card" in:maskSlideIn={{ delay: 300 + (i * 120), reverse: true }}>
                        <div class="card-header">
                            <h3 class="card-title">{item.title}</h3>
                            <span class="card-type">{item.type}</span>
                        </div>
                        <p class="card-description">{item.description}</p>
                        <div class="tech-tags">
                            {#each item.techStack as tech}
                                <span class="tag">{tech}</span>
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>

            <div class="highlight-block" bind:this={highlightElement} in:maskSlideIn={{ delay: 1100, reverse: true }}>
                <div class="highlight-marker">&#10022;</div>
                <div class="highlight-content">
                    <h3 class="highlight-title" use:highlightIn>{dataState.experienceData.highlight.title}</h3>
                    <p class="highlight-description">{dataState.experienceData.highlight.description}</p>
                    <div class="tech-tags">
                        {#each dataState.experienceData.highlight.techStack as tech}
                            <span class="tag">{tech}</span>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    {/await}
</div>
{/if}



<style lang="sass">

@use "../consts.sass" as consts

@include consts.textStyles()

#content-container.experience
    padding: 0 13vw
    margin-top: 30vh

    @media only screen and (max-width: 950px)
        padding: 0 8vw

    .section-header
        margin-bottom: 10vh

        h1
            font-size: 20vh
            font-weight: 400

            @media only screen and (max-width: 950px)
                font-size: 15vw

    .company-block
        margin-top: 2vh

    .company-header
        margin-bottom: 6vh
        padding-bottom: 4vh
        border-bottom: 1px solid #444

        .company-top-row
            display: flex
            justify-content: space-between
            align-items: baseline
            margin-bottom: 1.5vh
            gap: 2vw

            @media only screen and (max-width: 750px)
                flex-direction: column
                gap: 1vh

        .company-name
            font-family: consts.$titleFont
            font-size: 6vh
            font-weight: 400
            font-style: normal
            text-transform: lowercase
            color: white
            line-height: 100%

            @media only screen and (max-width: 750px)
                font-size: 10vw

        .company-location
            font-family: consts.$font
            font-size: 1.8vh
            text-transform: uppercase
            letter-spacing: 0.4vh
            color: rgba(255,255,255,0.5)
            white-space: nowrap

        .company-meta
            font-family: consts.$font
            font-size: 2vh
            color: rgba(255,255,255,0.7)
            letter-spacing: 0.1vh

            @media only screen and (max-width: 750px)
                font-size: 3.5vw

    .project-grid
        display: grid
        grid-template-columns: 1fr 1fr
        gap: 4vh 4vw

        @media only screen and (max-width: 950px)
            grid-template-columns: 1fr

    .project-card
        border: 1px solid #333
        padding: 4vh 3vw
        transition: border-color 0.4s ease, background-color 0.4s ease

        &:hover
            border-color: #666
            background-color: rgba(255,255,255,0.02)

        .card-header
            display: flex
            justify-content: space-between
            align-items: flex-start
            margin-bottom: 2vh
            gap: 1vw

        .card-title
            font-family: consts.$font
            font-size: 2.2vh
            text-transform: uppercase
            letter-spacing: 0.3vh
            font-weight: normal
            color: white

            @media only screen and (max-width: 750px)
                font-size: 3.5vw

        .card-type
            font-family: consts.$font
            font-size: 1.4vh
            text-transform: uppercase
            letter-spacing: 0.5vh
            color: rgba(255,255,255,0.4)
            white-space: nowrap
            padding: 0.5vh 1vh
            border: 1px solid rgba(255,255,255,0.15)

            @media only screen and (max-width: 750px)
                font-size: 3vw

        .card-description
            font-family: consts.$font
            font-size: 1.8vh
            line-height: 170%
            color: rgba(255,255,255,0.7)
            margin-bottom: 2.5vh

            @media only screen and (max-width: 750px)
                font-size: 3.4vw

    .tech-tags
        display: flex
        flex-wrap: wrap
        gap: 0.8vh

        .tag
            font-family: consts.$font
            font-size: 1.4vh
            text-transform: uppercase
            letter-spacing: 0.2vh
            padding: 0.5vh 1vh
            background: rgba(255,255,255,0.06)
            border: 1px solid rgba(255,255,255,0.1)
            color: rgba(255,255,255,0.6)

            @media only screen and (max-width: 750px)
                font-size: 3vw

    .highlight-block
        margin-top: 6vh
        padding: 5vh 4vw
        border: 1px solid rgba(255,255,255,0.15)
        background: rgba(255,255,255,0.03)
        display: flex
        flex-direction: row
        gap: 3vw
        align-items: flex-start

        @media only screen and (max-width: 750px)
            flex-direction: column
            gap: 2vh
            padding: 4vh 5vw

        .highlight-marker
            font-size: 3vh
            color: rgba(255,255,255,0.4)
            line-height: 1
            flex-shrink: 0

        .highlight-content
            flex: 1

        .highlight-title
            font-family: consts.$font
            font-size: 2.2vh
            text-transform: uppercase
            letter-spacing: 0.3vh
            font-weight: normal
            color: white
            margin-bottom: 1.5vh

            @media only screen and (max-width: 750px)
                font-size: 3.5vw

        .highlight-description
            font-family: consts.$font
            font-size: 1.8vh
            line-height: 170%
            color: rgba(255,255,255,0.7)
            margin-bottom: 2.5vh

            @media only screen and (max-width: 750px)
                font-size: 3.4vw

</style>
