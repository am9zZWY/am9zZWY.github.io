<script>
    import Nav from "./components/Nav.svelte";
    import Projects from "./components/Projects.svelte";

    console.log('66c28bfe@protonmail.com')
</script>

<main>
    <Nav/>
    <section class="section" id="about" role="contentinfo" aria-label="section" aria-labelledby="About Josef Müller">
        <h1 aria-labelledby="greeting">
            Hello!
        </h1>
        <div class="container">
            <div>
                <h3 aria-labelledby="introduction" class="introduction">
                    My name is Josef Müller.
                </h3>

                <p class="text">
                    I study <span class="keyword">Applied Computer Science</span> with focus on Embedded Systems at the HTWG Konstanz. In my spare
                    time I work on small projects and like to experiment with new technologies.<br/>
                    My interests lie especially in the frontend area, where I like to work with frameworks like Vue and
                    Svelte.
                    Furthermore I write projects in PHP, Python, Scala, Java and C from time to time.
                </p>
                <p class="text">
                    If you are interested in starting something with me or you have questions about a project feel free
                    to <span class="keyword">contact me</span>.
                </p>
            </div>
            <div class="container portrait">
                <h3 aria-labelledby="introduction on small device" class="introduction-small-device">
                    My name is Josef Müller.
                </h3>
                <img class="img portrait" alt="Portrait of Josef"
                     src="https://avatars.githubusercontent.com/u/46693545?v=4"/>
            </div>
        </div>
    </section>
    <section class="section" id="projects" role="contentinfo" aria-label="section"
             aria-labelledby="Projects of Josef Müller">
        <h1>My GitHub Projects</h1>
        <div class="container">
            <Projects githubName={'jpkmiller'}/>
            <Projects githubName={'htwg-app'}/>
        </div>
    </section>
</main>

<style>
    :root {
        --primary-color: #fb8500;
        --secondary-color: #219ebc;
        --dark-color: #023047;
        --light-color: #ffb703;
    }

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

    :global(.keyword) {
        background: var(--primary-color);
        margin: 5px;
        padding: 2px;
    }

    .container {
        margin-top: 20px;
        display: flex;
    }

    .introduction-small-device {
        display: none;
    }

    @media (max-width: 600px) {
        .container.portrait {
            flex-direction: row;
            align-items: center;
            align-self: center;
            width: 100%;
        }

        .container {
            flex-direction: column-reverse;
        }

        .introduction {
            display: none;
        }

        .introduction-small-device {
            display: inline;
        }
    }

    :global(a, a:visited) {
        color: black;
    }

    .portrait {
        border-radius: 50%;
        margin: 20px;
        width: 20vw;
        height: 20vw;
    }

</style>