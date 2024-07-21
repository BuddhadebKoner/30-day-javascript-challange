// Activity 1: Selecting and Manipulating Elements
document.getElementById('example-id').textContent = 'New text content';
document.querySelector('.example-class').style.backgroundColor = 'blue';

// Activity 2: Creating and Appending Elements
const newDiv = document.createElement('div');
newDiv.textContent = 'This is a new div element';
document.body.appendChild(newDiv);

const newLi = document.createElement('li');
newLi.textContent = 'New list item';
document.querySelector('ul').appendChild(newLi);

// Activity 3: Removing Elements
const elementToRemove = document.getElementById('remove-this');
elementToRemove.parentNode.removeChild(elementToRemove);

const parentElement = document.querySelector('.parent-class');
parentElement.removeChild(parentElement.lastElementChild);

// Activity 4: Modifying Attributes and Classes
document.querySelector('img').setAttribute('src', 'new-image-src.jpg');
const element = document.querySelector('.toggle-class');
element.classList.add('new-class');
element.classList.remove('old-class');

// Activity 5: Event Handling
document.querySelector('button').addEventListener('click', function() {
    document.querySelector('p').textContent = 'Paragraph text changed!';
});
document.querySelector('.hover-element').addEventListener('mouseover', function() {
    this.style.borderColor = 'red';
});

// Feature Request Scripts
document.getElementById('text-manipulate').textContent = 'Text content has been changed';

const newDivFeature = document.createElement('div');
newDivFeature.textContent = 'New div created by feature script';
document.body.appendChild(newDivFeature);

const elementToRemoveFeature = document.getElementById('remove-element');
elementToRemoveFeature.parentNode.removeChild(elementToRemoveFeature);

document.querySelector('.attribute-modify').setAttribute('title', 'New title attribute');

document.querySelector('.click-event').addEventListener('click', function() {
    this.textContent = 'Clicked!';
});
document.querySelector('.mouseover-event').addEventListener('mouseover', function() {
    this.style.color = 'green';
});