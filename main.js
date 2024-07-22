let originalState = document.querySelector(".original_state");
let ratings = document
  .querySelector("#rating-list")
  .querySelectorAll(".rating");
let submitButton = document.querySelector("#submit-button");
let thankyouState = document.querySelector(".thankyou_state");
let spanElement = thankyouState
  .querySelector(".user_rating")
  .querySelector("span");

let selectedRating;
var handleSubmitButton = () => {
  spanElement.textContent = selectedRating;
  originalState.classList.add("hidden");
  thankyouState.classList.remove("hidden");
};

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    selectedRating = rating.value;
  });
});
submitButton.addEventListener("click", handleSubmitButton);
