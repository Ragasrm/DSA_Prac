// Reverse array:

let array_number = [ 4, 1, 3, 5];

//1. Using reverse()
    console.log("Original Array: ");
    console.log(array_number);
     
    array_number.reverse();
     
    console.log("Reversed Array: ");
    console.log(array_number);


    // Using reverse for() loop
    let original_array = [1, 2, 3, 4];
    let reversedArray = [];
    console.log("Original Array: ");
    console.log(original_array);
 
    for (let i = original_array.length - 1; i >= 0; i--) {
        reversedArray.push(original_array[i]);
    };
    console.log("Reversed Array: ");
    console.log(reversedArray);;


    // Using unshift() method.

    let originalArray = [1, 2, 3, 4, 5, 6];
 
    let reversed_array = [];
 
    console.log("Original Array: ");
    console.log(originalArray);
 
    originalArray.forEach((element) => {
        reversed_array.unshift(element);
    });
    console.log("Reversed Array: ");
    console.log(reversed_array);

    // Using reduce() method.
    let original = [1, 2, 3, 4];
 
    let reversed = [];
 
    console.log("Original Array: ");
    console.log(original);
 
    reversed = original.reduce((acc, item)=> [item].concat(acc), [])
 
    console.log("Reversed Array: ");
    console.log(reversed);



