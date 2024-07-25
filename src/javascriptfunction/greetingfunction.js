
 export default function Greetingfn(){
    let date = new Date();
    let hours = date.getHours();
let Greeting = ""
if(hours>=0 && hours<=6){
    Greeting="Early Morning"
}else if(hours>=6 && hours <=11){
    Greeting="Morning"
}else if (hours>=11&&hours<=16){
    Greeting="Afternoon"
}else if (hours>=16&&hours<=20){
    Greeting="Evening"
}else{
    Greeting="Night"
}
return (`Good ${Greeting}`)
}
Greetingfn()
