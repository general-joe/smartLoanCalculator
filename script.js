 

// document.addEventListener("DOMContentLoaded", () => {
//   //Selection the elements
//   const calculateBtn = document.getElementById("calculateBtn");
//   const amountInput = document.getElementById("amount");
//   const interestInput = document.getElementById("interest");
//   const yearsInput = document.getElementById("years");
//   //Summary selection of elements
//   const monthlyPayment = document.getElementById("monthly");
//   const totalPayment = document.getElementById("total");
//   const totalInterestPayment = document.getElementById("totalInterest");

//   //Function to calculate the loan
//   function calculateLoan() {
//     //we will need the principal and we gonna convert everything to a number
//     const principal = parseFloat(amountInput.value);
//     const interest = parseFloat(interestInput.value) / 100 / 12;
//     const payments = parseFloat(yearsInput.value) * 12;
//     //check if the values are valid, if the user enter the valid number
//     if (isNaN(principal) || isNaN(interest) || isNaN(payments)) {
//       alert("Please enter valid numbers");
//       return;
//     }
//     //we are going to calculate for the monthly payment
//     const x = Math.pow(1 + interest, payments);
//     //formula for calculating monthly payment
//     const monthly = (principal * interest * x) / (x - 1);
//     //let validating the monthly payments using isFinite
//     if (isFinite(monthly)) {
//       //we are going provide the logic monthly payment and interest
//       const total = monthly * payments;
//       const interestPayment = total - principal;
//       //display the result

//       /*monthlyPayment.textContent = monthly;
//       totalPayment.textContent = total;
//       totalInterestPayment.textContent = interestPayment; */

//       //we are gonna use the animateValue function to animate the values
//       //Now after the calculation we are going to animate the values and we can remove the three lines of code above
//       animateValue(monthlyPayment, 0, monthly, 1000);
//       animateValue(totalPayment, 0, total, 1000);
//       animateValue(totalInterestPayment, 0, interestPayment, 1000);
//     }
//   }

//   //function for animation
//   function animateValue(element, start, end, duration) {
//     //this is a methode
//     const startTime = performance.now();
//     //another inner function
//     function update(currentTime) {
//       const elapsed = currentTime - startTime;
//       const progress = Math.min(elapsed / duration, 1);
//       const current = start + (end - start) * progress;
//       //Inject the content into the dom
//       element.textContent = current.toFixed(2);
//     }
//     if (progress < 1) {
//       //we are going to call the update using request Animation Frame and then pass in the update function
//       requestAnimationFrame(update);
//     } 
//   //else here, we gonna call the update function
//       requestAnimationFrame(update);
    
//   }
//   //Let's bind the event to calculateBtn
//   calculateBtn.addEventListener("click", calculateLoan);
// });


document.addEventListener("DOMContentLoaded", () => {
  // Select elements
  const calculateBtn = document.getElementById("calculateBtn");
  const amountInput = document.getElementById("amount");
  const interestInput = document.getElementById("interest");
  const yearsInput = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly");
  const totalPayment = document.getElementById("total");
  const totalInterestPayment = document.getElementById("totalInterest");

  // Function to calculate the loan
  function calculateLoan() {
    const principal = parseFloat(amountInput.value);
    const interest = parseFloat(interestInput.value) / 100 / 12; // Monthly rate
    const payments = parseFloat(yearsInput.value) * 12; // Total number of payments

    if (isNaN(principal) || isNaN(interest) || isNaN(payments)) {
      alert("Please enter valid numbers");
      return;
    }

    const x = Math.pow(1 + interest, payments); // Compound interest factor
    const monthly = (principal * interest * x) / (x - 1);

    if (isFinite(monthly)) {
      const total = parseFloat((monthly * payments).toFixed(2));
      const interestPayment = parseFloat((total - principal).toFixed(2));

      // Animate the results
      animateValue(monthlyPayment, 0, monthly, 1000);
      animateValue(totalPayment, 0, total, 1000);
      animateValue(totalInterestPayment, 0, interestPayment, 1000);
    }
  }

  // Function for animation
  function animateValue(element, start, end, duration) {
    const startTime = performance.now();
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = start + (end - start) * progress;
      element.textContent = current.toFixed(2);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
    requestAnimationFrame(update);
  }

  // Bind the event to calculateBtn
  calculateBtn.addEventListener("click", calculateLoan);
});