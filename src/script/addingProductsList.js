async function fetchProductList(numberProductDisplayed , elementId ,link = 'src/userIntractionPages/ProductPage.html' ) {
    try {
        const response = await fetch('http://127.0.0.1:3001/api/latestAddedProducts');
        const productList = await response.json();

        // Assuming productList is an array of product objects
        const productGrid = document.getElementById(elementId);
        let productDiv = `<h2 class="title">New Products</h2>`;
console.log(productList.length);
      let indis = 0 ;
      let secIndis = 0;
        productList[0].forEach((productData) => {

          if (secIndis == numberProductDisplayed){
            return false;
              }

            else{
              if (indis == 0){
                productDiv += `<div class="product-grid">`
              }
               
              productDiv += `
                
                <div class="showcase"><div class="showcase-banner">
      <img src="http:\\\\127.0.0.1:3001\\${productData.IMG}" alt="Mens Winter Leathers Jackets" width="300" class="product-img default">
      <img src="http:\\\\127.0.0.1:3001\\${productData.IMG}" alt="Mens Winter Leathers Jackets" width="300" class="product-img hover">
      <p class="showcase-badge">0%</p>
      
    </div>
    <div class="showcase-content">
      <a href="${link}?id=${productData.IDPRODUIT}" class="showcase-category">${productData.TITRE}</a>
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
   indis +=1;

      if (indis == 4 ){
        productDiv += ` </div>`;
        indis = 0;
      }

            }

            //const productDiv = document.createElement('div');
          //console.log(`${JSON.stringify(productData.IMG,customReplacer)}`);
            // Create HTML structure for each product (customize as needed)
            
      
            
      secIndis +=1;
      
          
        });


  




        productGrid.innerHTML =productDiv;
    } catch (error) {
        console.error('Error fetching product list:', error);
    }
}

// Example usage




async function fetchProductListForNewArrival(numberProductDisplayed , elementId  , link = 'src/userIntractionPages/ProductPage.html') {
  try {
      const response = await fetch('http://127.0.0.1:3001/api/latestAddedProducts');
      const productList = await response.json();

      // Assuming productList is an array of product objects
      const productGrid = document.getElementById(elementId);
      let productDiv = ``;
console.log(productList.length);
    let indis = 0 ;
    let secIndis = 0;
      productList[0].forEach((productData) => {


        if (secIndis == numberProductDisplayed){
          return false;
            }

          else{
             
            productDiv += `
      


            <div class="showcase-container">
                
              <div class="showcase">
            
                <a href="#" class="showcase-img-box">
                  <img src="http:\\\\127.0.0.1:3001\\${productData.IMG}" alt="${productData.TITRE}" class="showcase-img"
                    width="70">
                </a>
            
                  <div class="showcase-content">
              
                    <a href="${link}?id=${productData.IDPRODUIT}">
                      <h4 class="showcase-title">${productData.TITRE}</h4>
                    </a>
              
                    <a href="#" class="showcase-category">Winter wear</a>
              
                    <div class="price-box">
                      <p class="price">${productData.PRIX}</p>
                      <del>${productData.PRIX}</del>
                    </div>
            
                  </div>
            
              </div>
          
            </div>
 `;
 indis +=1;

    

          }

          //const productDiv = document.createElement('div');
        //console.log(`${JSON.stringify(productData.IMG,customReplacer)}`);
          // Create HTML structure for each product (customize as needed)
          
    
          
    secIndis +=1;
    
        
      });







      productGrid.innerHTML =productDiv;
  } catch (error) {
      console.error('Error fetching product list:', error);
  }
}

fetchProductListForNewArrival(2,'showcaseNewArrival')