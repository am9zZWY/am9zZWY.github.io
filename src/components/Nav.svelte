<nav aria-label="main navigation">
    <ul class="nav-ul">
        <li class="nav-li">
            <a href="#about">About Me</a>
        </li>
        <li class="nav-li">
            <a href="#projects">Projects</a>
        </li>
    </ul>
    <ul class="nav-ul">
        <li class="nav-li">
            <a href="https://www.linkedin.com/in/josefmüller"><i class="fa-brands fa-linkedin"></i></a>
        </li>
        <li class="nav-li">
            <a href="https://github.com/am9zZWY"><i class="fa-brands fa-github"></i></a>
        </li>
        <li class="nav-li">
            <a href="https://www.xing.com/profile/Josef_Mueller253"><i class="fa-brands fa-square-xing"></i></a>
        </li>
    </ul>
</nav>

<style>
    nav {
        background: var(--light-color);
        display: flex;
        justify-content: space-between;
    }

    .nav-ul {
        margin: 0;
        padding-inline: var(--medium-space) 0;
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
            margin-left: 0;
            margin-right: var(--medium-space);
        }
    }

    li {
        list-style: none;
        margin: 0;
        padding: 0;
    }

</style>