
document.addEventListener('DOMContentLoaded', function () {
console.log('DOM fully loaded and parsed');
const hamburger = document.getElementById('hamburger');
const navUL = document.querySelector('nav ul');

hamburger.addEventListener('click', function () {
    navUL.classList.toggle('show');
    if (navUL.classList.contains('show')) {
    hamburger.innerHTML = '&times;';
    } else {
    hamburger.innerHTML = '&#9776;';
    }
});

const temples = [
    {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Cardston Alberta Temple",
        location: "Cardston AB",
        dedicated: "2023, April, 8",
        area: 88562,
        imageUrl:
        "images/cardston-alberta-temple.jpg"    
    },
    {
        templeName: "Port Vila Vanuatu Temple",
        location: "Vanuatu, Blacksands, Port Vila",
        dedicated: "2023, April, 8",
        area: 9999,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/port-vila-vanuatu-temple/port-vila-vanuatu-temple-19082-main.jpg"    
    }
];

createTempleCard(temples);

// const oldLink = document.querySelector("#old");

// oldLink.addEventListener("click", () => {
//     createTempleCard(temples.filter(temple => temple.location.includes("Utah")));
// });

const oldLink = document.querySelector("#old");

oldLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {
        const [year] = temple.dedicated.split(',').map(str => str.trim());
        return parseInt(year) < 1900;
    }));
});


const newLink = document.querySelector("#new");

newLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {
        const [year] = temple.dedicated.split(',').map(str => str.trim());
        return parseInt(year) > 2000;
    }));
});


const largeLink = document.querySelector("#large");

largeLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {
        return temple.area > 10000;
    }));
});


const smallLink = document.querySelector("#small");

smallLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {
        return temple.area < 10000;
    }));
});


const homeLink = document.querySelector("#home");

homeLink.addEventListener("click", () => {
    createTempleCard(temples);
});


function createTempleCard(filteredTemples) {
    console.log('Creating filtered temple cards');
    document.querySelector(".images").innerHTML = "";
    filteredTemples.forEach(temple => {
    let card = document.createElement("figure");
    let img = document.createElement("img");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let name = document.createElement("figcaption");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    const resGrid = document.querySelector(".images");
    if (resGrid) {
        resGrid.appendChild(card);
    } else {
        console.error('Cannot find .images element');
    }
    });
}
});
