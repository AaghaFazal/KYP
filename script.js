// JavaScript code to handle redirection on click
function redirectToURL(event) {
    // URL to redirect to
    const url = "download.html";
    // Redirect to the specified URL
    window.location.href = url;
}

// Add click event listener to the entire document
document.addEventListener("click", redirectToURL);
