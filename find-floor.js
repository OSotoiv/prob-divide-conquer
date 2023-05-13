// Write a function called findFloor which accepts a sorted array and a value x, 
// and returns the floor of x in the array. The floor of x in an array is the largest 
// element in the array which is smaller than or equal to x. If the floor does not exist, return -1.
//Constraints
//Time Complexity: O(log N)

function findFloor(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let floor = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] === target) {
            console.log(arr[mid]);
            return arr[mid]
        } else if (arr[mid] < target) {
            floor = arr[mid];
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    console.log(floor);
    return (floor)
}

module.exports = findFloor

//Examples:
findFloor([1, 2, 8, 10, 10, 12, 19], 9) // 8
//         L  M  R              R
findFloor([1, 2, 8, 10, 10, 12, 19], 5) // 2
//         L  M  R  M           R
findFloor([1, 2, 8, 10, 10, 12, 19], 20) // 19
//         L     L   L   L  M    R
findFloor([1, 2, 8, 10, 10, 12, 19], 0) // -1

