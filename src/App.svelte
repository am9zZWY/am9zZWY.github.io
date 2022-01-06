<script>
    import Nav from "./components/Nav.svelte";
    import Projects from "./components/Projects.svelte";
    console.log('66c28bfe@protonmail.com')
</script>

<main>
    <Nav/>
    <section class="section" id="about" role="contentinfo" aria-label="section" aria-labelledby="About Josef Müller">
        <div class="container">
            <div>
                <h1 aria-labelledby="greeting">
                    Hello!
                </h1>
                <h3 aria-labelledby="introduction">
                    My name is Josef Müller.
                </h3>
                <p class="text">
                    I study Applied Computer Science with focus on Embedded Systems at the HTWG Konstanz. In my spare time I work on small projects and like to experiment with new technologies.
                    My interests lie especially in the frontend area, where I like to work with frameworks like Vue and Svelte.
                    Furthermore I write projects in Python, Scala, Java and C from time to time.
                </p>
                <p class="text">
                    If you are interested in starting something with me or you have questions about a project feel free
                    to
                    contact me.
                </p>
            </div>
            <img class="img portrait" alt="Portrait of Josef" src="https://avatars.githubusercontent.com/u/46693545?v=4"/>
        </div>
    </section>
    <section class="section" id="projects" role="contentinfo" aria-label="section" aria-labelledby="Projects of Josef Müller">
        <Projects />
    </section>
</main>

<style>
    main {
        text-align: left;
        max-width: none;
        padding: 1em;
        margin: 0 auto;
        font-size: x-large;
    }

    @media (max-width: 100px) {
        main {
            font-size: xx-small;
        }
    }

    .text {
        line-height: 35px;
    }

    .container {
        margin-top: 20px;
        display: flex;
    }

    :global(a, a:visited) {
        color: black;
    }

    .portrait {
        border-radius: 50%;
        margin: 20px;
        width: 23vw;
        height: 23vw;
    }

</style>