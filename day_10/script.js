document.addEventListener('DOMContentLoaded', () => {
    // Basic Event Handling
    const paragraph = document.getElementById('text-paragraph');
    const button = document.getElementById('text-button');
    const image = document.getElementById('toggle-image');

    // Task 1: Click event to change paragraph text
    button.addEventListener('click', () => {
        paragraph.textContent = 'The text has been changed!';
    });

    // Task 2: Double-click event to toggle image visibility
    image.addEventListener('dblclick', () => {
        image.style.display = (image.style.display === 'none') ? 'block' : 'none';
    });

    // Mouse Events
    const colorElement = document.getElementById('color-element');

    // Task 3: Mouseover event to change background color
    colorElement.addEventListener('mouseover', () => {
        colorElement.style.backgroundColor = 'yellow';
    });

    // Task 4: Mouseout event to reset background color
    colorElement.addEventListener('mouseout', () => {
        colorElement.style.backgroundColor = '';
    });

    // Keyboard Events
    const inputField = document.getElementById('input-field');
    const displayParagraph = document.getElementById('display-paragraph');

    // Task 5: Keydown event to log key pressed
    inputField.addEventListener('keydown', (event) => {
        console.log('Key pressed:', event.key);
    });

    // Task 6: Keyup event to display current value
    inputField.addEventListener('keyup', () => {
        displayParagraph.textContent = `Current value: ${inputField.value}`;
    });

    // Form Events
    const form = document.getElementById('sample-form');
    const selectDropdown = document.getElementById('select-dropdown');

    // Task 7: Form submit event to prevent default and log form data
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
    });

    // Task 8: Change event to display selected value
    selectDropdown.addEventListener('change', () => {
        const selectedValue = selectDropdown.value;
        document.getElementById('select-display').textContent = `Selected value: ${selectedValue}`;
    });

    // Event Delegation
    const list = document.getElementById('item-list');

    // Task 9: Click event on list items using event delegation
    list.addEventListener('click', (event) => {
        if (event.target && event.target.nodeName === 'LI') {
            console.log('Clicked item:', event.target.textContent);
        }
    });

    // Task 10: Event listener on parent element for dynamically added children
    const addButton = document.getElementById('add-item-button');
    addButton.addEventListener('click', () => {
        const newItem = document.createElement('li');
        newItem.textContent = 'New Item';
        list.appendChild(newItem);
    });
});
