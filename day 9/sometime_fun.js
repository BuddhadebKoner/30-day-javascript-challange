// Activity 1
document.getElementById('text-button').addEventListener('click', () => {
    document.getElementById('text-paragraph').textContent = 'New text content';
});
document.querySelector('.example-class').style.backgroundColor = 'blue';

// Activity 2
document.getElementById('add-list-item').addEventListener('click', () => {
    const newLi = document.createElement('li');
    newLi.textContent = 'New list item';
    document.querySelector('ul').appendChild(newLi);
});

// Activity 3
document.getElementById('remove-this').addEventListener('click', () => {
    const elementToRemove = document.getElementById('remove-this');
    elementToRemove.parentNode.removeChild(elementToRemove);
});

document.getElementById('remove-last-child').addEventListener('click', () => {
    const parentElement = document.querySelector('.parent-class');
    if (parentElement.lastElementChild) {
        parentElement.removeChild(parentElement.lastElementChild);
    }
});

// Activity 4
document.getElementById('toggle-class-button').addEventListener('click', () => {
    const toggleElement = document.querySelector('.toggle-class');
    toggleElement.classList.toggle('new-class');
});

// Activity 5
document.getElementById('click-button').addEventListener('click', () => {
    document.getElementById('paragraph').textContent = 'Paragraph text changed!';
});

document.querySelector('.hover-element').addEventListener('mouseover', function() {
    this.style.borderColor = 'red';
});