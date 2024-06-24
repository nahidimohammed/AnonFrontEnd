
addingCategories = () => {



    async function fetchData() {
    try {
      const response = await fetch('http://127.0.0.1:3001/categories');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
  
  // Example: Display data on the webpage
  function displayData(data) {
    //const container = document.getElementById('data-container');
    if (data) {
      const listItem = document.getElementById('categoriesList');
      let textdata = "";
      // Assuming data is an array of objects with 'name' and 'id' properties
      console.log(data[0]);
      data.forEach(item => {
          //textdata += "<option value='"+item.IDCATEGORIE+"'>"+item.NAMECATEGORIE+"</option>";
  
          textdata += "<button class='sidebar-accordion-menu' data-accordion-btn>  <div class='menu-title-flex'><p class='menu-title'>"+item.NAMECATEGORIE+"</p></div> </button> "
        //container.appendChild(listItem);
        console.log(item.NAMECATEGORIE);
      });
      listItem.innerHTML = textdata;
    } else {
      container.textContent = 'Error fetching data. Please try again later.';
    }
  }
  
  // Example usage:
  fetchData().then(displayData);
  }
  addingCategories();