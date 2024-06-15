const currentYear = new Date().getFullYear();

const lastModified = document.lastModified;

const footer = document.querySelector('footer');

const copyrightParagraph = document.createElement('p');
copyrightParagraph.textContent = `©️ ${currentYear}`;
footer.appendChild(copyrightParagraph);
