//Create random articles with random title and content and date
const articles = [
    {
        title: "Understanding the difference between grid-template and grid-auto",
        content:
            "In CSS Grid Layout, grid-template and grid-auto serve different purposes. The grid-template property is used to explicitly define the rows, columns, and areas of a grid. For example, grid-template-rows and grid-template-columns set fixed sizes for the grid’s rows and columns.",
        date: "Oct 09,2018",
    },
    {
        title: "What is the difference between flex and grid?",
        content:
            "Both Flexbox and CSS Grid are powerful layout systems in CSS, but they are designed for different purposes and use cases.",
        date: "Sep 12,2020",
    },
    {
        title: "How animations are used?",
        content:
            "CSS animations allow you to animate transitions between different styles or states of an element over time. Animations in CSS are created using keyframes and properties that control the timing, duration, and effects of the animation.",
        date: "Oct 21,2020",
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
        titleElement.innerHTML = highlightText(title, input);
        contentElement.innerHTML = highlightText(content, input);
        if (
            titleElement.querySelectorAll(".highlight").length !== 0 ||
            contentElement.querySelectorAll(".highlight").length !== 0
        ) {
            count++;
        }
    });
    if (count > 0) {
        nbPosts.innerHTML = "<strong>" + count + " articles </strong>found";
    } else {
        nbPosts.innerHTML = "";
    }
}
function highlightText(text, search) {
    if (!search) return text; //check if search term is not found
    const regex = new RegExp(`(${search})`, "gi"); // this means global and ignore case
    return text.replace(regex, '<span class="highlight">$1</span>'); //this will put the word in a span having class highlight
}
