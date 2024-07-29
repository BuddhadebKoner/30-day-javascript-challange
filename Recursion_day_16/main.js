// 1. Factorial Calculation
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// 2. Fibonacci Sequence
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Recursion with Arrays

// 3. Sum of Array Elements
function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}

// 4. Maximum Element in Array
function maxArray(arr) {
    if (arr.length === 1) return arr[0];
    const subMax = maxArray(arr.slice(1));
    return arr[0] > subMax ? arr[0] : subMax;
}

// String Manipulation with Recursion

// 5. String Reversal
function reverseString(str) {
    if (str === "") return "";
    return reverseString(str.substr(1)) + str[0];
}

// 6. Palindrome Check
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    function checkPalindrome(s, start, end) {
        if (start >= end) return true;
        if (s[start] !== s[end]) return false;
        return checkPalindrome(s, start + 1, end - 1);
    }
    return checkPalindrome(cleanedStr, 0, cleanedStr.length - 1);
}

// Recursive Search

// 7. Binary Search
function binarySearch(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) return -1;
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, low, mid - 1);
    return binarySearch(arr, target, mid + 1, high);
}

// 8. Count Occurrences
function countOccurrences(arr, target) {
    function countHelper(arr, target, index) {
        if (index === arr.length) return 0;
        return (arr[index] === target ? 1 : 0) + countHelper(arr, target, index + 1);
    }
    return countHelper(arr, target, 0);
}

// Tree Traversal (Optional)

// 9. In-Order Traversal
function inOrderTraversal(node) {
    if (node === null) return;
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
}

// 10. Depth of Binary Tree
function depthOfTree(node) {
    if (node === null) return 0;
    const leftDepth = depthOfTree(node.left);
    const rightDepth = depthOfTree(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
}

// Example Test Cases
console.log("Factorial of 5:", factorial(5));
console.log("Fibonacci of 7:", fibonacci(7));
console.log("Sum of [1, 2, 3, 4]:", sumArray([1, 2, 3, 4]));
console.log("Max of [1, 5, 2, 4]:", maxArray([1, 5, 2, 4]));
console.log("Reverse of 'hello':", reverseString("hello"));
console.log("'racecar' is palindrome:", isPalindrome("racecar"));
console.log("Binary search for 5 in [1, 2, 3, 4, 5]:", binarySearch([1, 2, 3, 4, 5], 5));
console.log("Occurrences of 2 in [1, 2, 2, 3]:", countOccurrences([1, 2, 2, 3], 2));

// Example Tree Node Definition for Traversal and Depth
const tree = {
    value: 10,
    left: {
        value: 5,
        left: null,
        right: null
    },
    right: {
        value: 15,
        left: {
            value: 12,
            left: null,
            right: null
        },
        right: null
    }
};

console.log("In-order Traversal:");
inOrderTraversal(tree);
console.log("Depth of the tree:", depthOfTree(tree));
