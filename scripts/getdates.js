const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const currentDay = new Date().getDate();

const lastModified = document.lastModified;

const footer = document.querySelector('footer');

const copyrightParagraph = document.createElement('p');
copyrightParagraph.textContent = ` ${currentDay}/${currentMonth}/${currentYear}`;
footer.appendChild(copyrightParagraph);
