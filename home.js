// this automatically sets the site to the homepage on load
window.addEventListener("load", () => {
    document.getElementById('home-btn').click();
})
// eventually we should manipulate the url so if you have a certain page selected it shows in the url
// so if you reload it goes back to that tab

function loadTab(id) {
    // hides all the tabs
    const openTabsNode = document.querySelectorAll('.current');
    const openTabs = Array.from(openTabsNode);
    if (openTabs !== undefined) {
        for (const item in openTabs) {
            openTabs[item].classList.remove('current');
            openTabs[item].classList.add('hide');
        }
    }
    // shows the correct tab
    const currentTab = document.getElementById(id);
    currentTab.classList.add('current');
    currentTab.classList.remove('hide');
}