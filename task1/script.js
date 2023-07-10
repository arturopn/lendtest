document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.getElementById("openDialog");
    const dialog = document.getElementById("dialog");
    const overlay = document.getElementById("overlay");
    const closeButton = document.getElementById("closeButton");
    const saveButton = document.getElementById("saveButton");
    const inputA = document.getElementById("inputA");
    const inputB = document.getElementById("inputB");
    const inputC = document.getElementById("inputC");
    const resultText = document.getElementById("resultText");
  
    openButton.addEventListener("click", function () {
      dialog.style.display = "block";
      overlay.style.display = "block";
    });
  
    closeButton.addEventListener("click", closeModal);
  
    overlay.addEventListener("click", closeModal);
  
    saveButton.addEventListener("click", function () {
        removeErrorStyles();
        const a = parseFloat(inputA.value.trim());
        const b = parseFloat(inputB.value.trim());
        const c = parseFloat(inputC.value.trim());
      
        if (isNaN(a)) {
          resultText.textContent = "Invalid input for A. Please provide a numeric value.";
          inputA.classList.add("error");
          resultText.classList.add("error");
          return;
        }
      
        if ((isNaN(b) && isNaN(c)) || (b === null && c === null)) {
          resultText.textContent = "At least one of the input fields B or C must be filled.";
          inputB.classList.add("error");
          inputC.classList.add("error");
          resultText.classList.add("error");
          return;
        }
      
        if (b === 0 || c === 0) {
          resultText.textContent = "Error: Division by zero";
          inputB.classList.add("error");
          inputC.classList.add("error");
          resultText.classList.add("error");
          return;
        }
      
        let result;
        if (isNaN(b)) {
          result = a / c;
        } else if (isNaN(c)) {
          result = a + b;
        } else {
          result = (a + b) / c;
        }
      
        if (!Number.isFinite(result)) {
          resultText.textContent = "Error: Infinity result";
          inputA.classList.add("error");
          inputB.classList.add("error");
          inputC.classList.add("error");
          resultText.classList.add("error");
        } else {
          resultText.textContent = "Result: " + result;
          resultText.classList.remove("error");
        }
      });
      
      
      
      
  
    function closeModal() {
      dialog.style.display = "none";
      overlay.style.display = "none";
      inputA.value = "";
      inputB.value = "";
      inputC.value = "";
      resultText.textContent = "";
      removeErrorStyles();
    }
  
    function removeErrorStyles() {
      inputA.classList.remove("error");
      inputB.classList.remove("error");
      inputC.classList.remove("error");
    }
  });
  