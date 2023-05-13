// findRotationCount
// Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. 
// The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

// Constraints:

// Time Complexity: O(log N)

function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    // if the array is not rotated at all, return 0
    if (arr[left] <= arr[right]) {
        console.log(0)
        return 0;
    }

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // if the mid element is greater than its next element,
        // the next element is the smallest and the array has been rotated
        if (arr[mid] > arr[mid + 1]) {
            console.log(mid + 1)
            return mid + 1;
        }

        // if the mid element is less than its previous element,
        // the mid element is the smallest and the array has been rotated
        if (arr[mid - 1] > arr[mid]) {
            console.log(mid)
            return mid;
        }

        // if the left half is sorted, search the right half
        if (arr[left] <= arr[mid]) {
            left = mid + 1;
        } else { // otherwise, search the left half
            right = mid - 1;
        }
    }

    // if the loop terminates without finding a rotation point,
    // the array must not have been rotated at all (which is an error)
    console.log(-1)
    return -1;
}

module.exports = findRotationCount
// Examples:

findRotationCount([15, 18, 2, 3, 6, 12]) // 2
//                 L       M         R   
findRotationCount([6, 12, 15, 18, 2, 3]) // 4
//                             L  M   R
findRotationCount([7, 9, 11, 12, 5]) // 4
//                              LMR
findRotationCount([7, 9, 11, 12, 15]) // 0
//if L.value < R.value return 0 (has not been rotated)
// L=0
// R=arr.length - 1
// M = ((L+R) / 2) FLOOR
// 
//If M.value > M-1.value then L=M+1
// If M.value < M+1.value && M.value < M+1.value then return M.index.

