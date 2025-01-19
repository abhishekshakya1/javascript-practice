// Get references to DOM elements
const todoInput = document.getElementById("todoInput");
const addTodoButton = document.getElementById("addTodoButton");
const todoList = document.getElementById("todoList");

// Add event listener to the "Add" button
addTodoButton.addEventListener("click", function () {
    const todoText = todoInput.value.trim(); // Get input value and trim whitespace

    if (todoText === "") {
        alert("Please enter a to-do item.");
        return;
    }

    // Create a new list item
    const listItem = document.createElement("li");
    listItem.textContent = todoText;

    // Add a "Remove" button to the list item
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
        todoList.removeChild(listItem); // Remove the list item when the button is clicked
    });

    listItem.appendChild(removeButton); // Add the button to the list item
    todoList.appendChild(listItem); // Add the list item to the list

    todoInput.value = ""; // Clear the input field
    todoInput.focus(); // Set focus back to the input field
});
