document.querySelector(".itinerary__save").addEventListener("click", event => {
  const restaurantsInput = document.querySelector("#restaurants_selection").value
  const parkInput = document.querySelector("#park_selection").value

  const savedItinerary = {
    park_choice: parkInput,
    restaurants_choice: restaurantsInput
  }
  let fetchData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(savedItinerary)
  }
  fetch(local_api, fetchData)
})