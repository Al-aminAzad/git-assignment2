let obj ={
    Bangladesh:'Dhaka',
    India:'Delhi',
    Nepal:'Kathmandu',
    Afganisthan:'Kabul',
    Thailand:'Bangkok'
};
// let capitals = Object.values(obj);
// console.log(capitals);
//ES5 
Object.keys(obj).map(function(country){
    console.log(`The capital of ${country} is= ${obj[country]}`);
})

//ES6

Object.keys(obj).map((country)=>console.log(`The capital of ${country} is= ${obj[country]}`));
