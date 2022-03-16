const loadCountris = () => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => getCountries(data))
}

const getCountries = country => {
    console.log(country[0]);
    const countryHTML = country.map(country => indivitualData(country))
    // console.log(countryHTML[0]);
   

    const container = document.getElementById('countries');
    container.innerHTML = countryHTML.join(' ');

}

const indivitualData = ({name, flags, population, nativeName})  => {
    
 return `
     <div class="country">
     <h2>${name}</h2>
     <p>${population}</p>
     <h4>${nativeName}</h4>
     <img src="${flags.png}">
     </div>
  `
}

// const indivitualData = indCountry => {
//       const {name, flags, population} = indCountry; 
//       console.log(indCountry)
//    return `
//        <div class="country">
//        <h2>${name}</h2>
//        <p>${population}</p>
//        <img src="${flags.png}">
//        </div>
//     `
// }




// const indivitualData = Indcountry => {
//     console.log(Indcountry);
//    return `
//        <div class="country">
//        <h2>${Indcountry.name}</h2>
//        <img src="${Indcountry.flags.png}">
//        </div>
//     `
// }

loadCountris()