// Function to log the fragment identifier when a link is clicked
function logFragmentLinkClick(event) {
    const href = event.target.getAttribute('href');
    if (href && href.startsWith('#')) {
        console.log(`Fragment link clicked: ${href}`);
    }
}

// Attach an event listener to all anchor links
document.addEventListener('DOMContentLoaded', () => {
    const fragmentLinks = document.querySelectorAll('a[href^="#"]');

    fragmentLinks.forEach(link => {
        link.addEventListener('click', logFragmentLinkClick);
    });
});