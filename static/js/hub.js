/*-- Project ID: 260226 --*/
const inventoryBtn = document.getElementById('app-tile-260226');

inventoryBtn.addEventListener('click', () => {
    window.location.href = "app/inventory/index.html";
});

/*-- Project ID: 260302 --*/
const portfolioBtn = document.getElementById('app-tile-260302');

portfolioBtn.addEventListener('click', () => {
    window.location.href = "app/portfolio/index.html";
});


/* -- Development page navigation --*/
const devBtn = document.getElementById('app-tile-dev');

devBtn.addEventListener('click', () => { 
    if(confirm("The page you are trying to access is under development. Do you want you to continue?") == true) {
        window.location.href = "app/POS/index.html";
    } else {
        window.location.href = "index.html";
    };
});