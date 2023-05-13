// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

// Constraints:

// Time Complexity: O(log N)


// function countZeroesOofN(arr) {
//     const idx = arr.indexOf(0);
//     console.log(idx >= 0 ? arr.slice(idx).length : idx)
// }
function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if (arr[mid] === 1) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    console.log(arr.length - left)
    return arr.length - left;
}

module.exports = countZeroes;

// Examples:
countZeroes([1, 1, 1, 1, 0, 0]) // 2
countZeroes([1, 0, 0, 0, 0]) // 4
countZeroes([0, 0, 0]) // 3
countZeroes([1, 1, 1, 1]) // 0