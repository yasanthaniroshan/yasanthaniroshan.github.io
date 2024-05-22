<script>
    import { onMount, afterUpdate, onDestroy } from 'svelte';
    import { fade, crossfade } from 'svelte/transition';
    import openbook from '$lib/images/open-book.png';
    import medium from '$lib/images/medium.png';

    let articles = [];
    let displayedArticles = [];
    let count = 4; // Number of articles to display initially
    let observer;

    // Function to fetch articles from Medium RSS feed
    async function fetchArticles() {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@niroshanyi');
        const data = await response.json();
        articles = data.items;
        displayedArticles = articles.slice(0, count);
    }

    const loadMoreArticles = () => {
        if (count < articles.length) {
            displayedArticles = articles.slice(0, ++count);
        }
    };

    function setupObserver() {
        if (observer) observer.disconnect();
        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadMoreArticles();
                }
            });
        });
        const lastArticle = document.querySelector('.article:last-child');
        if (lastArticle) {
            observer.observe(lastArticle);
        }
    }

    onMount(async () => {
        await fetchArticles();
    });

    afterUpdate(() => {
        setupObserver();
    });

    onDestroy(() => {
        if (observer) {
            observer.disconnect();
        }
    });
</script>

<svelte:head>
    <title>Articles</title>
    <meta name="description" content="Articles" />
</svelte:head>

<section class="articles" transition:fade>
    {#each displayedArticles as article}
        <article class="article" transition:fade>
            <h1 class="title">{article.title}</h1>
            <a href={article.link} target="_blank" style="text-decoration: none;">
                <img src={openbook} alt="" style="height: 20px;">
                <img src={medium} alt="" style="height: 20px;">
             </a>
        </article>
    {/each}
</section>

<style>
    .articles {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        padding: 2rem;
    }
    .article {
        border: 1px solid #ccc;
        padding: 1rem;
        border-radius: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }
    @media only screen and (max-width: 1325px)
    {
        .articles {
            grid-template-columns: 1fr;
            padding-top: 0;
        }
        .article {
            align-items: center;
        }
        .title {
            text-align: center;
        }

    }
</style>
