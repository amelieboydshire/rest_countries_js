let countries = [];


const fetchRestCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();
    countries = jsonData;
    SetUp(); // Call setUp function after fetching data

};
    
    const populateCountryList = () => {
    const countryList = document.querySelector("#country-list");

    // Remove original <p> element if exists
    const originalParagraph = document.querySelector("#original-paragraph");
    if (originalParagraph) {
        originalParagraph.remove();
    }


    // Populate the list with country information
    countries.forEach(countryData => {
    const restCountries = document.createElement("li");
    restCountries.textContent = `Country: ${countryData.name.common}, Population: ${countryData.population}`;
    countryList.appendChild(restCountries);

});

};

const SetUp = () => {
    fetchRestCountries(); 
    populateCountryList(); 
  };

  window.addEventListener("DOMContentLoaded", SetUp);