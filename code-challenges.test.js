// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("when shuffleArr is called", () => {
    it("returns shuffled array when called with an array", () => {
        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        const actualShuffle = shuffleArr(colors1)
        expect(actualShuffle.sort()).toEqual(colors1.sort())
    })
    it("returns shuffled array when called with an array", () => { 
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        const actualShuffle = shuffleArr(colors2)
        expect(actualShuffle.sort()).toEqual(colors2.sort())
    })
    
})

// ReferenceError: shuffle is not defined

// b) Create the function that makes the test pass.

// pseudo code:
// 1. create a function that takes in an array
// 2. remove the first item from the array
// 3. create another variable that will store the length of the array
// 4. create a while loop that will run as long as there are elements in the array
// 5. create a variable that will represent the shuffling of the data
// 6. use math.floor to round the random number with -- and store it in the variable i
// 7. create a variable that will store the data that was shuffled
// 8. return the array
// 9. return the shuffled array



const shuffleArr = (array) => {
    array.shift()
    // create three variables one that will store the length of the array.
    var m = array.length, t, i
  
    // While loop for when there are elements to shuffle…
    while (m) {
  
      // i will represent the shuffling of the data
      i = Math.floor(Math.random() * m--)
  
      // here the array will swap the data that was shuffled with two separate arrays
      t = array[m]
      array[m] = array[i]
      array[i] = t
    }
  
    return array
  }


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

describe ("when minMax is called", () => {
    it("returns an array of the minimum and maximum numbers in that order", () => {
        const actualMinMax = minMax(nums1)
        const actualMinMax2 = minMax(nums2)
        expect(actualMinMax).toEqual([-8, 90])
        expect(actualMinMax2).toEqual([5, 109])
    }
    )
}
)

// ReferenceError: minMax is not defined


// pseudo code:
// 1. create a function that takes in an array
// 2. create a variable that will store the minimum number
// 3. create a variable that will store the maximum number
// 4. use math.min to find the minimum number
// 5. use math.max to find the maximum number
// 6. return the array
// 7. return the minimum and maximum numbers


// b) Create the function that makes the test pass.

const minMax = (array) => {
    const min = Math.min(...array) //use ...array to flatten the array and get the minimum number
    const max = Math.max(...array) //use ...array to flatten the array and get the maximum number
    // flatten means to take all the elements in both arrays and put them in one array
    return [min, max]
}






// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe ("when noDupes is called", () => {
    it("returns an array with no duplicate values", () => {
        const actualNoDupes = noDupes(testArray1, testArray2)
        expect(actualNoDupes).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    }
    )
}
)

// ReferenceError: noDupes is not defined

// pseudo code:
// 1. create a function that takes in two arrays
// 2. create a variable that will store the no duplicate values
// 3. use the spread operator to flatten the arrays
// 4. use the set method to remove duplicate values
// 5. return the array
// 6. return the no duplicate values


// b) Create the function that makes the test pass.

const noDupes = (...arrays) => {
    const noDupes = [...new Set(arrays.flat())]
    return noDupes
}