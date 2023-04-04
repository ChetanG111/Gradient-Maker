//copy color hex code to clipboard
function copy_to_clip(code, display){
    //copies the value of the color to the clipboard
    navigator.clipboard.writeText(code);
    display.value = 'Copied';
    //Waits for 250 milliseconds and then executes the line written in curly braces
    setTimeout(() =>{display.value = code}, 250);
}

// Get all the h3 elements
const h3Elements = document.querySelectorAll('.card h3');

// Loop through the h3 elements and add a click event listener to each one
h3Elements.forEach((h3) => {
  h3.addEventListener('click', () => {
    // Change the text of the clicked h3 element to "Copied"
    h3.textContent = 'Copied';
    
    // Get the corresponding cardDis element and its background-image style value
    const cardDis = h3.parentNode.querySelector('.cardDis');
    const bgImage = window.getComputedStyle(cardDis).getPropertyValue('background-image');
    
    // Copy the style value to the clipboard
    navigator.clipboard.writeText(bgImage);

    setTimeout(() =>{h3.innerHTML = 'Copy CSS'}, 250);

  });
});
