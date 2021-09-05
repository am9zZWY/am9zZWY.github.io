<nav role="navigation" aria-label="main navigation">
    <ul class="nav-ul">
        <li class="nav-li">
            <a href="/#about">About Me</a>
        </li>
        <li class="nav-li">
            <a href="https://github.com/jpkmiller" target="_blank">Projects</a>
        </li>
    </ul>
</nav>

<style>
    nav {
        border: thin solid;
        background: white;
    }

    .nav-ul {
        padding: 0;
        display: flex;
        justify-content: space-evenly;
    }

    /* when screen is very very small */
    @media (max-width: 160px) {
        .nav-ul {
            display: none;
        }
    }

    /* change to list */
    @media (max-width: 280px) {
        .nav-ul {
            flex-direction: column;
        }
    }

    @media (min-width: 540px) {
        .nav-ul {
            justify-content: flex-start;
        }

        .nav-li {
            margin-left: 10px;
            margin-right: 10px;
        }
    }

    li {
        list-style: none;
        margin: auto;
    }

</style>