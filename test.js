const c = [-2, 1, -3, 4, -1, 2, 1, -5, 4, [0, 1, 2, [3, 4]]]
// console.log(b);
// console.log(c);

// const months = ["Mar", "Jan", "Feb", "Dec"];
// const sortedMonths = months.toSorted();
// console.log(sortedMonths);
function myFunction() {
    console.time('myFunction');
    // let b = [1, 5, 7, 10, 12, 14, 15, 18, 20,
    //     22, 25, 27, 300, 64, 110, 220]
    const b = new Int16Array(c.length)
    // console.log(b[5]); 

    // Start the timer
    let e = 1

    for (let i = 0; i < c.length; i++) {
        b[i] = c[i] * 2
    }
    console.log(b);

    // End the timer
    console.timeEnd('myFunction');
}

// Call the function
myFunction();