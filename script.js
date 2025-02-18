// first we  generate a random number 
let rand = Math.random()
//generate the first word
let first, second, third;
if(rand<0.33){
    // 0  0.33  0.66  1

    first = "Crazy"
}else if(rand<0.66 && rand>=0.33){
    first  = "Amazing"
}else{
    first = "fire"
}
//generate the second word
 rand = Math.random()

if(rand<0.33){
    // 0  0.33  0.66  1

    second = "Engine"
}else if(rand<0.66 && rand>=0.33){
    second  = "Foods"
}else{
    second = "garments"
}
//generate the third word
 rand = Math.random()

if(rand<0.33){
    // 0  0.33  0.66  1

    third = "Bros"
}else if(rand<0.66 && rand>=0.33){
    third  = "limited"
}else{
    third = "Hub"
}

console.log(`${first} ${second} ${third}`)