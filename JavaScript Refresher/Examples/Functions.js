// Create a function that completes the requirements
const combine = function(a,b,c) {
    return a*b/c
}

// Create an arrow function that completes the requirements
const combineArrowFunction = (a,b,c) => {
    const results = a*b/c
    console.log(results)
    return results
}

// Run the combine function
combine(3,2,3) // Outputs 2

// Run the combineArrowFunction function
combineArrowFunction(3,2,3) // Outputs 2