const fetchRestCountries = async () => {
    const reponse = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();
}