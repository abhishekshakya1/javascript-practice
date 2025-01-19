// Pre-existing array of list items
const items = [
    "Learn HTML basics",
    "Understand CSS styling",
    "Master JavaScript fundamentals",
    "Learn DOM manipulation",
    "Get started with backend development",
    "Build full-stack web applications"
];

let currentIndex = 0; // Tracks the index of the next item to add

const addItemButton = document.getElementById("addItemButton");
const learningList = document.getElementById("learningList");
const message = document.getElementById("message");

// Event listener for the button click
addItemButton.addEventListener("click", function () {
    // Check if there are remaining items in the array
    if (currentIndex < items.length) {
        // Create a new list item and add it to the ordered list
        const listItem = document.createElement("li");
        listItem.textContent = items[currentIndex];
        learningList.appendChild(listItem);
        
        // Move to the next item
        currentIndex++;
        message.textContent = ""; // Clear any previous message
    } else {
        // All items have been added
        message.textContent = "All items have been added.";
    }
});
