function productsDisplay(productName, price, description, imageUrl) {
    return `
      <div class="product-main">
        <h2 class="title">New Products</h2>
        <div class="product-grid">
          <div class="showcase">
            <div class="showcase-banner">
              <img src="${imageUrl}" alt="${productName}" width="300" class="product-img default">
              <img src="${imageUrl}" alt="${productName}" width="300" class="product-img hover">
              <p class="showcase-badge">15%</p>
              <div class="showcase-actions">
                <button class="btn-action">
                  <ion-icon name="heart-outline"></ion-icon>
                </button>
                <button class="btn-action">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>
                <button class="btn-action">
                  <ion-icon name="repeat-outline"></ion-icon>
                </button>
                <button class="btn-action">
                  <ion-icon name="bag-add-outline"></ion-icon>
                </button>
              </div>
            </div>
            <div class="showcase-content">
              <a href="#" class="showcase-category">jacket</a>
              <a href="#">
                <h3 class="showcase-title">${productName}</h3>
              </a>
              <div class="showcase-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
              </div>
              <div class="price-box">
                <p class="price">$${price}</p>
                <del>$75.00</del>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  // Example usage:
  const productHtml = productsDisplay('Mens Winter Leathers Jackets', 48.00, 'High-quality jackets for winter', '../assets/images/products/jacket-3.jpg');
  console.log(productHtml); // You can use this string wherever needed
  