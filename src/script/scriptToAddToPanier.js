async function addToPanier(key, IDPRODUIT, ETAT) {

    console.log('add to panier is clicked');
    try {
      const response = await fetch('http://127.0.0.1:3001/addToPanier', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key, IDPRODUIT, ETAT }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data.message); // Log the server response message
    } catch (error) {
      console.error('Error adding item to PANIER:', error);
    }
  }