// First, tell us your name
let yourName = "Andrew M Thompson"

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0   //Total Order Size

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`



// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    gb += 1
    document.getElementById('qty-gb').textContent = gb
    document.getElementById('qty-total').textContent = gb + cc + sugar
})
// Event listener for clicks on the "-" button for Gingerbread cookies
document.getElementById('minus-gb').addEventListener('click', function() {
    if(gb > 0){
        gb -= 1
        document.getElementById('qty-gb').textContent = gb
        document.getElementById('qty-total').textContent = gb + cc + sugar
    } 
})



// Event listener for clicks on the "+" button for Chocolate Chip cookies
document.getElementById('add-cc').addEventListener('click', function() {
    cc += 1
    document.getElementById('qty-cc').textContent = cc
    document.getElementById('qty-total').textContent = gb + cc + sugar
})
// Event listener for clicks on the "-" button for Chocolate Chip cookies
document.getElementById('minus-cc').addEventListener('click', function() {
    if(cc > 0){
        cc -= 1
        document.getElementById('qty-cc').textContent = cc
        document.getElementById('qty-total').textContent = gb + cc + sugar
    } 
})


// Event listener for clicks on the "+" button for Sugar cookies
document.getElementById('add-sugar').addEventListener('click', function() {
    sugar += 1
    document.getElementById('qty-sugar').textContent = sugar
    document.getElementById('qty-total').textContent = gb + cc + sugar
})
// Event listener for clicks on the "-" button for Sugar cookies
document.getElementById('minus-sugar').addEventListener('click', function() {
    if(sugar > 0){
        sugar -= 1
        document.getElementById('qty-sugar').textContent = sugar
        document.getElementById('qty-total').textContent = gb + cc + sugar
    } 
})
