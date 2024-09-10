const heroTypeWriter = document.getElementById('hero-typewriter-text');
const heroText = 'Automation Developer @ Cleardata.';

let heroIndex = 0;
let isHeroDeleting = false;

function heroTypeEffect() {
    heroTypeWriter.innerHTML = heroText.substring(0, heroIndex); // Keep the text and let CSS handle the cursor

    if (isHeroDeleting) {
        if (heroIndex > 0) {
            heroIndex--;
        } else {
            isHeroDeleting = false;
        }
    } else {
        if (heroIndex < heroText.length) {
            heroIndex++;
        } else {
            isHeroDeleting = true;
        }
    }

    setTimeout(heroTypeEffect, isHeroDeleting ? 400 : 100); // Faster deletion, slower typing
}

heroTypeEffect();

window.addEventListener('load', function() {
    // Remove the hash from the URL without reloading the page
    if (window.location.hash) {
        window.history.replaceState(null, null, window.location.pathname);
    }

    // Ensure the page scrolls to the top after loading
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 0);  // A timeout of 0 ensures it runs after the load event
});

