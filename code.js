// Select and change the text of the heading with id "main-heading"
const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = 'Updated Heading';

// Select and change the color of paragraphs with the class "text-content"
const paragraphs = document.getElementsByClassName('text-content');
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = 'blue';
}

// Select and change the source of the image with id "main-image"
const mainImage = document.querySelector('#main-image');
mainImage.src = 'updated-image.jpg';

// Select and change the background color of the div with class "container"
const containerDiv = document.querySelector('.container');
containerDiv.style.backgroundColor = 'lightblue';

// Additional: Select all paragraphs and change their font style
const allParagraphs = document.querySelectorAll('p');
allParagraphs.forEach(paragraph => {
    paragraph.style.fontStyle = 'italic';
});
