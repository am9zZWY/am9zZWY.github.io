<script>
	import Nav from "./components/Nav.svelte";
	import Projects from "./components/Projects.svelte";

	const openMail = () => {
		window.location.href = "mailto:hohlraeume_haushalte0k@icloud.com"
	}
</script>

<main>
    <Nav/>
    <section class="section" id="about" role="contentinfo" aria-label="section" aria-labelledby="About Josef Müller">
        <h1 class="greeting" aria-labelledby="greeting">
            Hello!
        </h1>
        <div class="container">
            <div>
                <h1 aria-labelledby="introduction" class="section-title">
                    My name is Josef Müller.
                </h1>

                <p class="text">
                    I am studying <span class="keyword">Computer Science</span> in the Master's programme at the Eberhard Karls University in Tübingen.
		    Before that, I studied Applied Computer Science with focus on Embedded Systems in the Bachelor's programme at the
                    HTWG Konstanz. In my spare
                    time I work on small projects and like to experiment with new technologies.<br/>
                    My interests lie especially in the frontend area, where I like to work with frameworks like Vue and
                    Svelte.
                    Furthermore I write projects in PHP, Python, Scala, Java and C from time to time.
                </p>
                <p class="text">
                    If you are interested in starting something with me or you have questions about a project feel free
                    to <a class="keyword" on:click={openMail}>contact me</a>.
                </p>
            </div>
        </div>
    </section>
    <section class="section" id="projects" role="contentinfo" aria-label="section"
             aria-labelledby="Projects of Josef Müller">
        <h1 class="section-title">My GitHub Projects</h1>
        <div class="container">
            <Projects/>
        </div>
    </section>
</main>

<style>
    :root {
        --primary-color: #52796f;
        --secondary-color: #84a98c;
        --dark-color: #2f3e46;
        --light-color: #B8BFB3;
        --bg-color: #F5F6F4;
        --font-max: 48pt;
        --font-medium: 32pt;
        --font-text: 20pt;
        --font-small: 12pt;
        --big-space: 40px;
        --medium-space: 25px;
        --small-space: 15px;
        --tiny-space: 5px;
        --border-radius: 5px;
    }

    main {
        text-align: left;
        max-width: none;
        padding: var(--medium-space);
        margin: 0 15%;
        font-size: var(--font-text);
        background: var(--bg-color);
        transition: ease all 1s;;
    }

    .text {
        line-height: 35px;
    }

    :global(.keyword) {
        background: var(--primary-color);
        color: white;
        margin: var(--tiny-space);
        padding: var(--tiny-space);
        border-radius: var(--border-radius);
    }

    .greeting {
        font-size: var(--font-max);
        font-weight: bold;
        color: var(--primary-color);
    }

    .container {
        margin-top: var(--medium-space);
        display: flex;
    }

    .section-title {
        font-size: var(--font-medium);
        font-weight: bold;
        color: var(--dark-color);
    }

    .section {
        margin-top: var(--medium-space);
    }

    :global(a, a:visited) {
        color: var(--dark-color);
    }

    @media (max-width: 1020px) {
        .container {
            flex-direction: column-reverse;
        }
    }

    @media (max-width: 820px) {
        main {
            margin: 0;
        }
    }

    @media (max-width: 600px) {
        main {
            width: 350px;
            margin: auto;
        }
    }
</style>
