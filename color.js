function color() {
    let favcolors = [];

    for(let i = 0; i < 3; i++) {
        let enterColor = prompt("Enter your Three Favorite Colors.");
        favcolors.push(enterColor);
        alert("Your Favorite Colors Are: " + favcolors);
    }
    let pushcolor = prompt("Add another color you like.");
    favcolors.push(pushcolor);
    alert("Your new colors are: + favcolors")
}