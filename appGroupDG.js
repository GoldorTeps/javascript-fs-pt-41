// const prompt = 'requiere'('prompt-sync')({ sigint: true});

const randomNumber = () => {
const random = Math.floor((Math.random()*100)+1); 
return random; 
}
console.log(randomNumber())