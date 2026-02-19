/* Project ID: 0001 */
const portfolioBtn = document.getElementById('app-tile-1');

portfolioBtn.addEventListener('click', () => {
    window.location.href = "app/portfolio/index.html";
});

/* Project ID: 0002 */
const repoBtn = document.getElementById('app-tile-2');

repoBtn.addEventListener('click', () => {
    window.open("https://github.com/TC-Brown");
});
const posBtn = document.getElementById('app-tile-3');

posBtn.addEventListener('click', () =>{
    window.location.href = "app/POS/index.html";
});
/* Project ID: 0003 */
// const posBtn = document.getElementById('app-tile-3');

// posBtn.addEventListener('click', () => {
// window.location.href = "app/app-3/thunderbolt-pos.html";
// });

/* Project ID: 0004 */

/* Project ID: 0005 */

/* Project ID: 0006 */

/* -- Functions --*/
function sendAlert() {
    alert('ALERT:\nThe page you are tying to reach is not available at the moment');
};
function devMsg() {
    var checker = window.confirm('Attention:\nYou are about to go to a page that is under development.\nAre you sure you want to leave the page');
    if (checker) {
        window.location.href = 'app/app-3/thunderbolt-pos.html';
    } else {
        return false;
    };
};