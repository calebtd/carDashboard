let dropdown = document.getElementById("make");
dropdown.length = 0;

let defaultOption = document.createElement("option");
defaultOption.text = "Select Make";

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url =
  "https://raw.githubusercontent.com/FormidableLabs/radon-typeahead/master/demo/car-models.json";

fetch(url)
  .then(function (response) {
    if (response.status !== 200) {
      console.warn(
        "Looks like there was a problem. Status Code: " + response.status
      );
      return;
    }

    // Examine the text in the response
    response.json().then(function (data) {
      let option;

      for (let i = 0; i < data.length; i++) {
        option = document.createElement("option");
        option.text = data[i]["brand"];
        dropdown.add(option);
      }
    });
  })
  .catch(function (err) {
    console.error("Fetch Error -", err);
  });
