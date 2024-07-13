document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            id: 'fc-1888',
            name: "flux capacitor",
            avgRating: 4.5
        },
        {
            id: 'fc-2050',
            name: "power laces",
            avgRating: 4.7
        },
        {
            id: 'fs-1987',
            name: "time circuits",
            avgRating: 3.5
        },
        {
            id: 'ac-2000',
            name: "low voltage reactor",
            avgRating: 3.9
        },
        {
            id: 'jj-1969',
            name: "warp equalizer",
            avgRating: 5.0
        }
    ];

    const productSelect = document.getElementById('product-select');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    const reviewForm = document.getElementById('review-form');
    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Increment review counter in localStorage
        let reviewCount = localStorage.getItem('reviewCount') || 0;
        reviewCount++;
        localStorage.setItem('reviewCount', reviewCount);

        // Proceed with form submission
        alert('Review submitted! You have submitted ' + reviewCount + ' reviews.');
        reviewForm.submit();
    });
});
