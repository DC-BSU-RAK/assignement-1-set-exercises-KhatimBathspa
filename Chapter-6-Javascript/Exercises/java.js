// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Get references to elements
    const costInput = document.getElementById("cost-per-liter");
    const litersInput = document.getElementById("liters");
    const calculateBtn = document.getElementById("calculate-btn");
    const totalCostDisplay = document.getElementById("total-cost");
  
    // When the calculate button is clicked
    calculateBtn.addEventListener("click", () => {
      // Get numeric values from inputs
      const costPerLiter = parseFloat(costInput.value);
      const liters = parseFloat(litersInput.value);
  
      // Calculate total cost
      const totalCost = costPerLiter * liters;
  
      // Display result with 2 decimal places
      totalCostDisplay.textContent = `Total Cost: £${totalCost.toFixed(2)}`;
    });
  });
  