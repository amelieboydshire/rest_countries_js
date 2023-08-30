let countries = [];


const fetchRestCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();

    const countryList = document.querySelector("#country-list");


jsonData.forEach(countryData => {
    const restCountries = document.createElement("li");
    restCountries.textContent = countryData.name.common;
    countryList.appendChild(restCountries);

});

document.querySelector("body").appendChild(countryList);

};

fetchRestCountries();