// Get the container element that wraps all the cards
var container = document.getElementById("container");

// Add a click event listener to the container
container.addEventListener("click", function(event) {
  // Check if the clicked element is the button with the id "selection-btn"
  if (event.target.id === "selection-btn") {
    // Get the h5 element with the class "card-title" within the clicked button's parent
    var h5Element = event.target.parentElement.querySelector(".card-title");

    // Get the inner text of the h5 element (e.g., Lionel Messi, Neymar Jr)
    var playerName = h5Element.innerText;

    // Save it to a variable or do something with it
    console.log(playerName); // You can replace this with your desired action
  }
});
