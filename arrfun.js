//Solving problems using array functions on rest countries data.
//a)Get all the countries from Asia continent /region using Filter function


var request = new XMLHttpRequest();

request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
  
request.send();

request.onload =function(){
    if(request.status>=200 && request.status<300){
    var data = JSON.parse(request.response);
    // console.log(data);
    const asia=data.filter((country)=>{
        return country.region==='Asia'
            })
     console.log(asia);
}
else{
    console.log("Data is not available");
}
};


//b) Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();

request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
  
request.send();

request.onload =function(){
    if(request.status>=200 && request.status<300){
    var data = JSON.parse(request.response);
    // console.log(data);
    const country=data.filter((element)=>{
        return element.population<200000
     })
     console.log(country);
}
else{
    console.log("Data is not available");
}
};

//c)Print the following details name, capital, flag using forEach function
var request = new XMLHttpRequest();

request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
  
request.send();

request.onload =function(){
    if(request.status>=200 && request.status<300){
    var data = JSON.parse(request.response);
    // console.log(data);
    data.forEach((element) => {
console.log(`name:${element.name}
capital:${element.capital}
flag:${element.flag}`)
    });
}
else{
    console.log("Data is not available");
}
};

//d)Print the total population of countries using reduce function

var request = new XMLHttpRequest();

request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
  
request.send();

request.onload =function(){
    if(request.status>=200 && request.status<300){
    var data = JSON.parse(request.response);
    // console.log(data);
   
    const popul=data.reduce((acc,element)=>{
        return acc+element.population;
    },0)
    console.log(popul);}
    
else{
    console.log("Data is not available");
}
};


//e) Print the country which uses US Dollars as currency.

var request = new XMLHttpRequest();

request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
  
request.send();

request.onload =function(){
    if(request.status>=200 && request.status<300){
    var data = JSON.parse(request.response);
     //console.log(data);
    var cur=[];
    for(i=0;i<data.length;i++){
        if(data[i].currencies[0].code==="USD")
        {
            console.log(`name:${data[i].name} ==> ${data[i].currencies[0].code}`)
        }
    }
}
    
else{
    console.log("Data is not available");
}
}
