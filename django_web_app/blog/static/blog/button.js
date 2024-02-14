function handle_interested(clickedButton) {
  // Find the parent container of the clicked button to limit the scope to the current post
  var parentArticle = clickedButton.closest('.media-body');

  // Find all buttons within this parent container
  var buttons = parentArticle.querySelectorAll('.btn-interested');

  // First, determine and update the state of the clicked button
  if (clickedButton.textContent === "I'm interested") {
    clickedButton.textContent = "Interest Noted";
    // Ensure the clicked button retains its original color (blue for "I'm interested")
    clickedButton.classList.remove('btn-secondary');
    clickedButton.classList.add('btn-primary');
  } else if (clickedButton.textContent === "Not interested") {
    clickedButton.textContent = "Disinterest Noted";
    // Ensure the clicked button retains its original color (red for "Not interested")
    clickedButton.classList.remove('btn-secondary');
    clickedButton.classList.add('btn-danger');
  }

  // Then, update the non-clicked button to turn grey and revert its text if needed
  buttons.forEach(function(button) {
    if (button !== clickedButton) {
      // Turn the non-clicked button grey
      button.classList.remove('btn-primary', 'btn-danger');
      button.classList.add('btn-secondary');

      // Revert text of the non-clicked button to its original state
      if (button.textContent === "Interest Noted") {
        button.textContent = "I'm interested";
      } else if (button.textContent === "Disinterest Noted") {
        button.textContent = "Not interested";
      }
    }
  });
}
