function nav() {
    const icons = document.querySelectorAll('img');

    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            window.location.href = "../../index.html"
        });
    });
}

nav();