const checkBtn = document.getElementById("checkAvailabilityBtn");
const container = document.getElementById("availability-container");


checkBtn.addEventListener("click", function () {
    container.classList.contains("hidden");
    container.classList.toggle("hidden");
});




const form = document.querySelector(".contact-left");

function sendMsg(e) {
  e.preventDefault();
  alert("Thank you for your message. We will get back to you soon!");
  e.target.reset();
}

form.addEventListener("submit", sendMsg);






