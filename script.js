// Sample menu data
const menuData = [
    { name: "Grilled Salmon", description: "Freshly grilled salmon with herbs and lemon.", price: "Rs.650" },
    { name: "Beef Steak", description: "Juicy beef steak cooked to perfection.", price: "Rs.799" },
    { name: "Vegetable Pasta", description: "Pasta with a mix of fresh vegetables and creamy sauce.", price: "Rs.1200" },
    { name: "Caesar Salad", description: "Classic Caesar salad with croutons and parmesan.", price: "Rs.499" },
    { name: "Chocolate Cake", description: "Rich and decadent chocolate cake.", price: "Rs.600" },
    { name: "Fruit Platter", description: "Assorted fresh fruits served with yogurt.", price: "Rs.800" },
  ];
  
  // Function to dynamically add menu items
  function loadMenu() {
    const menuContainer = document.querySelector('.menu-items');
    menuData.forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');
      menuItem.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p><strong>${item.price}</strong></p>
      `;
      menuContainer.appendChild(menuItem);
    });
  }
  
  // Function to scroll to the menu section
  function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
  }
  
  // Load menu when the page loads
  window.onload = loadMenu;