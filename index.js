const rateButton=document.querySelectorAll(".rating-options button");
const submittedRate = document.querySelector(".submitted-rate");
const submittedRateSpan = document.querySelector(".submitted-rate_selected-rate span");
const submitButton = document.querySelector(".submit-button");
const alert = document.querySelectorAll("d-none");
const rating = document.querySelector(".content");

let rated = false;

const resetbuttons=(nodeList)=>{
    nodeList.forEach((item) => item.classList.remove("active"));
};

const toggleClass = (item, className) => item.classList.toggle(className);

rateButton.forEach((item) =>
  item.addEventListener("click", () => {
    resetbuttons(rateButton);
    toggleClass(item, "active");
    const rateValue = item.getAttribute("rating-value");
    submittedRateSpan.textContent = rateValue;
    rated = true;
    console.log(item.getAttribute("rating-value"));
  })
);

submitButton.addEventListener("click",()=>{
    if (rated) {
        toggleClass(rating, "d-none");
        toggleClass(submittedRate, "d-none");
      } else {
        removeClass(alert, "d-none");
      }
});