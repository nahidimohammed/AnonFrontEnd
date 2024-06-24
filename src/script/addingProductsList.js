
async function fetchProductList() {
    try {
        const response = await fetch('http://127.0.0.1:3001/api/latestAddedProducts');
        const productList = await response.json();

        // Assuming productList is an array of product objects
        const productGrid = document.getElementById('productDetails');
        let productDiv = `<h2 class="title">New Products</h2>`;
console.log(productList.length);
      let indis = 0 ;
        productList[0].forEach((productData) => {
            //const productDiv = document.createElement('div');
          //console.log(`${JSON.stringify(productData.IMG,customReplacer)}`);
            // Create HTML structure for each product (customize as needed)
            if (indis == 0){
              productDiv += `<div class="product-grid">`
            }
             
            productDiv += `
              
              <div class="showcase"><div class="showcase-banner">
    <img src="http:\\\\127.0.0.1:3001\\${productData.IMG}" alt="Mens Winter Leathers Jackets" width="300" class="product-img default">
    <img src="http:\\\\127.0.0.1:3001\\${productData.IMG}" alt="Mens Winter Leathers Jackets" width="300" class="product-img hover">
    <p class="showcase-badge">0%</p>
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
    <a href="src/userIntractionPages/ProductPage.html?id=${productData.IDPRODUIT}" class="showcase-category">${productData.TITRE}</a>
    <a href="#">
      <h3 class="showcase-title">Mens Winter Leathers Jackets</h3>
    </a>
    <div class="showcase-rating">
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star-outline"></ion-icon>
      <ion-icon name="star-outline"></ion-icon>
    </div>
    <div class="price-box">
      <p class="price">$${productData.PRIX}</p>
      <del>$75.00</del>
    </div>
  </div>
</div>
 `;
      
            console.log('indis = '+indis);
            indis +=1;

      if (indis == 4 ){
        productDiv += ` </div>`;
        indis = 0;
      }

            
        });

        //for (let i = 0; i < productList[0].length; i++) {
         //  const productData = productList[i];
         // console.log(productList[0][i]);}
          

  




        productGrid.innerHTML =productDiv;
    } catch (error) {
        console.error('Error fetching product list:', error);
    }
}

// Example usage
fetchProductList();