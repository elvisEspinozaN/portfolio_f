const form = document.getElementById("form");
const submitButton = document.getElementById("submit");

if (form && submitButton) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    submitButton.disabled = true;
    window.location.href = "thank-you.html";
  });
} else {
  console.error("Form or submit button element not found!");
}

document.addEventListener("DOMContentLoaded", function () {
  const currentPage = document.location.pathname.split("/").pop();

  console.log(`Hello, you are currently on: ${currentPage}`);
});
