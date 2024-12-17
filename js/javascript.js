document.addEventListener("DOMContentLoaded", function () {
  const currentPage = document.location.pathname.split("/").pop();

  console.log(`Hello, you are currently on: ${currentPage}`);
});
