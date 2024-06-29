const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const currentDay = new Date().getDate();

let lastModified = Date(document.lastModified);

const footer = document.querySelector('footer');
//${currentDay}/${currentMonth}/${currentYear}`;
const copyrightParagraph = document.createElement('p');
copyrightParagraph.textContent = `Last Modified : ${lastModified}`;
footer.appendChild(copyrightParagraph);