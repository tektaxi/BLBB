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

    // updates the page title
    document.getElementById("title").innerHTML = "Band Land Brass Band | " + id.charAt(0).toUpperCase() + id.slice(1);
}

const members = [
    {
        "name": "Emma Blanc",
        "instrument": "Tenor Saxophone",
        "catchphrase": "Secret weapon",
        "photo": "images/instruments/tenor-sax.png"
    },
    {
        "name": "Seth Goldman",
        "instrument": "Alto Saxophone",
        "catchphrase": "Strong harmonies, stronger jawline",
        "photo": "images/instruments/alto-sax.png"
    },
    {
        "name": "Jade Buckwalter",
        "instrument": "Alto Saxophone",
        "catchphrase": "Actually a flautist",
        "photo": "images/instruments/alto-sax.png"
    },
    {
        "name": "Mike Benoit-Latour",
        "instrument": "Alto Saxophone",
        "catchphrase": "Gamer boiii",
        "photo": "images/instruments/alto-sax.png"
    },
    {
        "name": "Elizabeth Lucas-Foley",
        "instrument": "Trumpet",
        "catchphrase": "Board game wizard",
        "photo": "images/instruments/trumpet.png"
    },
    {
        "name": "Raleigh Berman",
        "instrument": "Trumpet",
        "catchphrase": "Smash Bros champion",
        "photo": "images/instruments/trumpet.png"
    },
    {
        "name": "Lewis Bryant III",
        "instrument": "Trombone",
        "catchphrase": "Sweatpants aficionado",
        "photo": "images/instruments/trombone.png"
    },
    {
        "name": "Ari Berman",
        "instrument": "Sousaphone",
        "catchphrase": "Sousa screamer",
        "photo": "images/instruments/sousaphone.png"
    },
    {
        "name": "Aleyana Pina",
        "instrument": "Baritone Saxophone",
        "catchphrase": "Copycat killer",
        "photo": "images/instruments/bari-sax.png"
    },
    {
        "name": "Ellen Jacobson",
        "instrument": "Percussion",
        "catchphrase": "Get the London look",
        "photo": "images/instruments/drums.png"
    },
    {
        "name": "Sam Marshall",
        "instrument": "Percussion",
        "catchphrase": "BLBB intern",
        "photo": "images/instruments/drums.png"
    },
    {
        "name": "Tavi Pollard",
        "instrument": "Percussion",
        "catchphrase": "Photographer extraordinaire",
        "photo": "images/instruments/drums.png"
    },
    {
        "name": "Ezra Rudel",
        "instrument": "Trumpet",
        "catchphrase": "BLBB founder, sorta a famous jazz musician",
        "photo": "images/instruments/trumpet.png"
    },
    {
        "name": "Fritz Duverglas",
        "instrument": "Trumpet",
        "catchphrase": "Pizzzaaaa",
        "photo": "images/instruments/trumpet.png"
    },
    {
        "name": "Franny Oppenheimer",
        "instrument": "Trombone",
        "catchphrase": "Group chat overlord",
        "photo": "images/instruments/trombone.png"
    },
    {
        "name": "Theo Lennhoff",
        "instrument": "Percussion",
        "catchphrase": "ScrewDRIVER",
        "photo": "images/instruments/drums.png"
    },
]

const aboutBtn = document.getElementById("about-btn");
aboutBtn.addEventListener("click", loadMembers);
function loadMembers() {
    // Loop through members, starting with the second element (the first one doesn't need to be cloned)
    for (let i = 1; i < members.length; i++) {
        // Clone the original card
        const clone = document.getElementById("card").cloneNode(true);

        // Get the info from the array and copy it into the clone
        clone.querySelector("#name").innerHTML = members[i].name;
        clone.querySelector("#instrument").innerHTML = members[i].instrument;
        clone.querySelector("#catchphrase").innerHTML = members[i].catchphrase;
        clone.querySelector("#photo").src = members[i].photo;

        document.getElementById("members").appendChild(clone);
    }
    aboutBtn.removeEventListener("click", loadMembers);
}