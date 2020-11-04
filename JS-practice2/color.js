var array1 = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

function Display(n) {
    var array2 = ["th", "st", "nd", "rd"],
        value = n % 100;
    return value + (array2[(value - 20) % 10] || array2[value] || array2[0]);
}

for (a = 0; a < array1.length; a++) {
    var display = a + 1;

    var output = (Display(display) + " choice is " + array1[a] + ".");

    console.log(output);
}