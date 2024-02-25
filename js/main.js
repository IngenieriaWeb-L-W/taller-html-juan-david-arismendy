// Function to insert a number into the calculator display
function insert(num) {
    // Append the number to the current display value
    if (num == '**') {
        document.form.textview.value = document.form.textview.value + '^';
    }
    else
        document.form.textview.value = document.form.textview.value + num;
}

// Function to calculate the result of the expression in the display
function equal() {
    // Retrieve the current expression from the display
    let exp = document.form.textview.value;
    exp = exp.replace("^", "**")

    // If the expression is not empty, evaluate it and display the result
    if (exp) {
        document.form.textview.value = eval(exp);
    }
}

// Function to clear the calculator display
function clean() {
    // Set the display value to an empty string
    document.form.textview.value = '';
}

// Function to remove the last character from the calculator display
function back() {
    // Retrieve the current expression from the display
    let exp = document.form.textview.value;
    // Remove the last character from the expression and update the display
    document.form.textview.value = exp.substring(0, exp.length - 1);
}
