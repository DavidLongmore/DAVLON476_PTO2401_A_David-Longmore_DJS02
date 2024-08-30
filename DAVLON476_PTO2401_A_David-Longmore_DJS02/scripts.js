const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (isNaN(dividend) || isNaN(divider)) {
    // Create a full-screen div with the critical error class
    const criticalErrorDiv = document.createElement("div");
    criticalErrorDiv.className = "critical-error";
    criticalErrorDiv.innerText = "Something critical went wrong. Please reload the page.";
    document.body.appendChild(criticalErrorDiv);
    console.error("Critical Error: YOLO and +++ detected in the inputs.");
  } else if (!dividend || !divider) {
    result.className = "error-message";
    result.innerText = "Division not performed. Both values are required in inputs. Try again.";
  } else if (Number(divider) === 0) {
    result.className = "error-message";
    result.innerText = "Division not performed. Invalid number provided. Try again.";
    console.error("Error: Invalid number provided for division.");
  } else {
    result.className = ""; //Removes any previously added entries
    result.innerText = Math.floor(dividend / divider); // Rounds number down
  }
});