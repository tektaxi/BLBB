let pages = ["home", "about", "performances", "merch"];
let current = -1;

function load(id) {
    if ("content" in document.createElement("template") && id != current) {
        const page = document.getElementById(pages[Number(id)]);
        const node = document.importNode(page.content, true);
        document.body.appendChild(node);
        current = Number(id);
    }
}