const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}

$(function() {
  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml()

  // When each button is clicked, it will "call" function for that button (functions are below)
  $('.treat-button').click(clickedTreatButton)
  $('.play-button').click(clickedPlayButton)
  $('.exercise-button').click(clickedExerciseButton)
})

const pet_info = {
  name: 'Lola',
  weight: 10,
  happiness: 50
}
// Add a variable "pet_info" equal to a dictionary with the name (string), weight (number), and happiness (number) of your pet

function clickedTreatButton() {
  // Increase pet happiness
  pet_info.happiness = pet_info.happiness + 3
  // Increase pet weight
  pet_info['weight'] = pet_info['weight'] + 2
  checkAndUpdatePetInfoInHtml()
}

function clickedPlayButton() {
  // Increase pet happiness
  pet_info.happiness++
  // Decrease pet weight
  pet_info.weight--
  checkAndUpdatePetInfoInHtml()
}

function clickedExerciseButton() {
  // Decrease pet happiness
  pet_info.happiness -= 2
  // Decrease pet weight
  pet_info.weight -= 3
  checkAndUpdatePetInfoInHtml()
}

function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating()
  updatePetInfoInHtml()
}

function checkWeightAndHappinessBeforeUpdating() {
  // Add conditional so if weight is lower than zero, set it back to zero
  if (pet_info.happiness <= 0) {
    pet_info.happiness = 1
  }
  if (pet_info.weight <= 0) {
    pet_info.weight = 1
  }
}

// Updates your HTML with the current values in your pet_info dictionary
function updatePetInfoInHtml() {
  $('.name').text(pet_info['name'])
  $('.weight').text(pet_info['weight'])
  $('.happiness').text(pet_info['happiness'])
}

document.addEventListener('DOMContentLoaded', main)
