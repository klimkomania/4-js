var a = prompt ("Wpisz wartość a"),
    b = prompt ("Wpisz wartość b"),
    value = (a * a) + (2 * a * b) - (b * b);
console.log( value );

if ( value > 0) {
    console.log("Dodatnia");
} else if ( value < 0 ) {
    console.log("Ujemna");
} else {
    alert("0");
}