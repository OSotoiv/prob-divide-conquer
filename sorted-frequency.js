// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

// Constraints:

// Time Complexity: O(log N)


function sortedFrequency(arr, target) {
    let start = findStart(arr, target);
    let end = findEnd(arr, target);

    if (start === -1) {
        return -1;
    }

    return end - start + 1;
}

function findStart(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    //left is the index of the starting point of the group of targeted nums
    return arr[left] === target ? left : -1;
}

function findEnd(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return arr[right] === target ? right : -1;
}

module.exports = sortedFrequency

// Examples:
// lenth=30
// target=4
// left=0
// right=29
// mid=0 || ((l+r) / 2)
// [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 03, 04, 04, 04, 05, 05, 05, 06, 06, 06, 07, 07, 07, 07, 08, 08, 08, 09, 09, 09]
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, RI, LmI, 14, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
// // FIND THE START search left
// While LEFT <= RIGTH
// if middleValue >= target Then move RightIDX = middleIDX - 1
// if middleValue < target Then move LeftIDX = middleIDX + 1
//if LEFT === target return LEFT else return -1;

// [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 03, 04, 04, 04, 05, 05, 05, 06, 06, 06, 07, 07, 07, 07, 08, 08, 08, 09, 09, 09]
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, RI, LI, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
// FIND THE END
// While LEFT <= RIGTH
// middleIDX = 
// if middleIDX <= target Then move LeftIDX = middleIDX + 1
// if middleIDX > target Then move RightIDX = middleIDX - 1
//if RIGHT === target return Right else return -1;


sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2) // 4
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3) // 1
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1) // 2
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4) // -1


