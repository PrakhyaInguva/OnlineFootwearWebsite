var header = document.querySelector("a")//grabbing the header
header
//Then you can interface with the object
header.style.color = 'purple'// The initial color of the header would be blue
function getRandomColor() {
    var letters = "0123456789ABCDEF" ;
    var color = '#';
    for (var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color
}
//Simple function for clarity
function changeHeaderColor() {
    colorInput = getRandomColor()
    header.style.color = colorInput;
}
//Now perform the action over intervals(milliseconds)
setInterval("changeHeaderColor()",500);
//Simple function for clarity
function shop(){
    alert("Go ahead and order your favourite product of ours")
}
function order(){
    alert("Your product has been added to the cart successfully")
}