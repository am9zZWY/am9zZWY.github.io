<script>
    import Nav from "./components/Nav.svelte";

    console.log('66c28bfe@protonmail.com')
</script>

<main>
    <Nav/>
    <section class="section" id="about" role="contentinfo" aria-label="section" aria-labelledby="about Josef Müller">
        <h1 aria-labelledby="greeting">
            Hello!
        </h1>
        <h3 aria-labelledby="introduction">
            My name is Josef Müller.
        </h3>
        <p>
            I study Applied Computer Science with focus on Embedded Systems at the HTWG Konstanz. In my spare time I work on small projects and like to experiment with new technologies.
            My interests lie especially in the frontend area, where I like to work with frameworks like Vue and Svelte.
            Furthermore I write projects in Python, Scala, Java and C from time to time.
        </p>
        <p>
            If you are interested in starting something with me or you have questions about a project feel free to contact me.
        </p>
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

    :global(a, a:visited) {
        color: black;
    }

    .shadow {
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
</style>