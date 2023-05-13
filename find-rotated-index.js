// findRotatedIndex
// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer.
// The function should return the index of num in the array. If the value is not found, return -1.

// Constraints:

// Time Complexity: O(log N)


function findRotatedIndex(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            console.log(mid);
            return mid;
        }

        // If the left half of the array is sorted
        if (arr[left] <= arr[mid]) {
            if (arr[left] <= target && target < arr[mid]) {
                right = mid - 1; // Search left half
            } else {
                left = mid + 1; // Search right half
            }
        }
        // If the right half of the array is sorted
        else {
            if (arr[mid] < target && target <= arr[right]) {
                left = mid + 1; // Search right half
            } else {
                right = mid - 1; // Search left half
            }
        }
    }

    // If the number is not found
    console.log(-1);
    return -1;
}

module.exports = findRotatedIndex
// Examples:
findRotatedIndex([3, 4, 1, 2], 4) // 1
findRotatedIndex([6, 7, 8, 9, 10, 11, 1, 2, 3, 4], 9) // 3
findRotatedIndex([6, 7, 8, 9, 10, 11, 1, 2, 3, 4], 1) // 6
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37, 44, 66, 102, 10, 22], 14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1

//if middle index is > middle+1 then right half is sorted left half is sorted
//search left if target is < middle-1 search right if target is > middle+1
//
//if middle index is < middle+1 and > middle-1 
//search right if target is >= middle+1 search left if target is <= middle+1
//