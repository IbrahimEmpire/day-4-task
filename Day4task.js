const xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.responseType = "json"; 

xhr.onload =  function displayResult(){
const countries = xhr.response;

for(var i = 0; i<=countries.length-1 ;i++){
    console.log(countries[i].flags.png);
    console.log(i + 1, countries[i].name.common);
    console.log(countries[i].region);
    console.log(countries[i].subregion);
   

}
return countries;

}
