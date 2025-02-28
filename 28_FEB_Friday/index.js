var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("Execution started");
setTimeout(function () {
    console.log("First console log after 5 seconds");
    setTimeout(function () {
        console.log("Second console log after 8 seconds (5 + 3)");
    }, 300);
}, 500);
var numbers = [2, 5, 8, 10];
console.log(numbers.every(function (num) { return num > 0; })); // true
var words = ["apple", "banana", "kiwi"];
console.log(words.every(function (word) { return word.length > 3; })); // true
var fruits1 = ["Apple", "Banana"];
var fruits2 = ["Mango", "Grapes"];
console.log(fruits1.concat(fruits2)); // ["Apple", "Banana", "Mango", "Grapes"]
var a = [1, 2];
var b = [3, 4];
console.log(__spreadArray(__spreadArray([], a, true), b, true)); // [1, 2, 3, 4]
var arr = [1, 2, 3, 4, 5];
var newArr = arr.slice(0, 3).fill(0);
console.log(newArr); // [0, 0, 0]
console.log(arr);
var values = [0, "", null, "hello", undefined, NaN, "world"];
var truthyValues = values.filter(Boolean);
console.log(truthyValues); // ["hello", "world"]
var numbers = [1, 3, 5, 6, 7, 8];
var firstEven = numbers.find(function (num) { return num % 2 === 0; });
console.log(firstEven); // 6
var arr1 = [1, [2, 3], [4, [5, 6]]];
console.log(arr1.flat(1));
// Output: [1, 2, 3, 4, [5, 6]]
var arr2 = [1, [2, [3, [4, 5]]]];
console.log(arr2.flat(Infinity));
// Output: [1, 2, 3, 4, 5]
var users = [
    { name: "Alice", hobbies: ["reading", "gaming"] },
    { name: "Bob", hobbies: ["swimming", "running"] },
];
console.log(users.map(function (user) { return user.hobbies; }).flat());
// Output: ["reading", "gaming", "swimming", "running"]
var arr3 = [
    1,
    "hello",
    [true, false, [null, [null, null, undefined, [null, undefined]], undefined]],
];
console.log(arr3.flat(Infinity));
// Output: [1, "hello", true, false, null, undefined]
var words = ["apple", "banana", "apple", "orange", "banana", "apple", "grapes"];
var count = {};
words.forEach(function (word) { return (count[word] = (count[word] || 0) + 1); });
console.log(count);
// Output: { apple: 3, banana: 2, orange: 1 }
var title = ["Learn", "JavaScript", "Fast"];
console.log(title.join("-").toLowerCase());
// Output: "learn-javascript-fast"
var lines = ["Line 1", "Line 2", "Line 3"];
console.log(lines.join("\n"));
/*
Output:
Line 1
Line 2
Line 3
*/
var words = ["Hello", "", "World", "", "!"];
console.log(words.filter(Boolean).join(" "));
// Output: "Hello World !"
var names = ["John Doe", "Jane Smith"];
var initials = names.map(function (name) {
    return name
        .split(" ")
        .map(function (n) { return n[0]; })
        .join(".");
});
console.log(initials);
// Output: ["J.D.", "J.S."]
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce(function (acc, num) { return acc + num; }, 0);
console.log(sum);
// Output: 15
var nums = [3, 8, 1, 6, 7, 10];
var max = nums.reduce(function (acc, num) { return (num > acc ? num : acc); }, nums[0]);
console.log("Max number in the Array: ", max);
// Output: 8
var users1 = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];
var userMap = users1.reduce(function (acc, user) {
    acc[user.id] = user.name;
    return acc;
}, {});
console.log(userMap);
/*
  Output:
  { 1: 'Alice', 2: 'Bob', 3: 'Charlie' }
  */
var words = ["apple", "banana", "grapefruit", "kiwi"];
var longest = words.reduce(function (acc, word) { return (word.length > acc.length ? word : acc); }, "");
console.log(longest);
// Output: "grapefruit"
var str = "hello";
var reversed = str.split("").reduce(function (acc, char) { return char + acc; }, "");
console.log(reversed);
// Output: "olleh"
var str = "hello";
var reversed = str.split("").reduceRight(function (acc, char) { return acc + char; }, "");
console.log(reversed);
// Output: "olleh"
var str = "hello";
var reversedStr = str.split("").reverse().join("");
console.log(reversedStr);
// Output: "olleh"
var sentence = "JavaScript is awesome";
var reversedSentence = sentence.split("").reverse().join(" ");
console.log(reversedSentence);
// Output: "awesome is JavaScript"
var numbers = [10, 20, 30];
var first = numbers.shift();
console.log(first);
// Output: 10
console.log(numbers);
// Output: [20, 30]
var numbers = [1, 2, 3, 4];
var firstElement = numbers[1];
var remainingElements = numbers.slice(0);
console.log(firstElement);
// Output: 1
console.log(remainingElements);
// Output: [2, 3, 4]
var numbers = [10, 20, 30, 40, 50];
var firstThree = numbers.slice(0, 3);
console.log(firstThree);
console.log(numbers);
// Output: [10, 20, 30]
var numbers = [10, 20, 30, 40, 50];
numbers.splice(2, 1); // Removes element at index 2
console.log(numbers);
// Output: [10, 20, 40, 50]
var colors = ["red", "blue", "green"];
colors.splice(1, 0, "yellow", "purple"); // Inserts at index 1
console.log(colors);
// Output: ["red", "yellow", "purple", "blue", "green"]
console.log("🚀 Rocket launch in...");
[3, 2, 1].forEach(function (num, i) {
    setTimeout(function () { return console.log(num); }, i * 1000);
});
setTimeout(function () { return console.log("🔥 Launch!"); }, 3000);
setInterval(function () {
    console.log(new Date().toLocaleTimeString());
}, 1000);
//   setInterval(() => {
//     console.log("❤️ Heartbeat...");
//   }, 1000);
function createUserID() {
    var id = 0;
    return function () { return "user_".concat(++id); };
}
var getID = createUserID();
console.log(getID()); // user_1
console.log(getID()); // user_2
