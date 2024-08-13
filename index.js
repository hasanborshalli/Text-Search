//Create random articles with random title and content and date
const articles = [
    {
        title: "Understanding the difference between grid-template and grid-auto",
        content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisidolor harum consequuntur libero excepturi natus, culpa placeatatque ut a consequatur ipsam architecto ducimus animi quibusdam,perspiciatis explicabo odit aliquid.",
        date: "Oct 09,2018",
    },
    {
        title: "Understanding the difference between grid-template and grid-auto",
        content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisidolor harum consequuntur libero excepturi natus, culpa placeatatque ut a consequatur ipsam architecto ducimus animi quibusdam,perspiciatis explicabo odit aliquid.",

        date: "Oct 09,2018",
    },
];
const nbPosts = document.getElementById("nb-posts"); //this is used to determine the number of words found
//each article will be displayed in a div with a title in h1 and content in p and date in h4 italic
articles.forEach((article) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("article");

    let newHeader = document.createElement("h1");
    newHeader.textContent = article.title;

    let newDate = document.createElement("h4");
    newDate.innerHTML = "<i>" + article.date + "</i>";

    let newContent = document.createElement("p");
    newContent.textContent = article.content;

    newDiv.append(newHeader, newDate, newContent, document.createElement("hr"));
    nbPosts.insertAdjacentElement("afterend", newDiv);
});
function searchWord() {
    const input = document.getElementById("search").value.trim().toLowerCase(); //search term inserted
    const allArticles = document.querySelectorAll(".article");
    let count = 0;
    allArticles.forEach((article) => {
        const titleElement = article.querySelector("h1");
        const contentElement = article.querySelector("p");
        const title = titleElement.textContent;
        const content = contentElement.textContent;
        if (
            title.toLowerCase().includes(input) ||
            content.toLowerCase().includes(input)
        ) {
            titleElement.innerHTML = highlightText(title, input);
            contentElement.innerHTML = highlightText(content, input);
        }
    });
    // we will count how many spans with class highlight to identify words found
    const highlighted = document.querySelectorAll(".highlight");
    for (let i = 0; i < highlighted.length; i++) {
        count++;
    }
    if (count > 0) {
        nbPosts.innerHTML = "<strong>" + count + " posts </strong>found";
    } else {
        nbPosts.innerHTML = "";
    }
}
function highlightText(text, search, count) {
    if (!search) return text; //extra check if search term is not found
    const regex = new RegExp(`(${search})`, "gi"); // this means global and ignore case
    return text.replace(regex, '<span class="highlight">$1</span>'); //this will put the word in a span having class highlight
}
