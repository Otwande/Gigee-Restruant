function showProductDetails(name, price) {
    const productNameElement = document.getElementById('popup-product-name');
    const productPriceElement = document.getElementById('popup-product-price');

    productNameElement.innerText = name;
    productPriceElement.innerText = price;

    const popupBackground = document.querySelector('.popup-background');
    const productDetailsPopup = document.querySelector('.product-details-popup');

    popupBackground.style.display = 'block';
    productDetailsPopup.style.display = 'block';
}

function closeProductDetails() {
    const popupBackground = document.querySelector('.popup-background');
    const productDetailsPopup = document.querySelector('.product-details-popup');

    popupBackground.style.display = 'none';
    productDetailsPopup.style.display = 'none';
}