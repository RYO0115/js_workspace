var test_str    = "test_string";
var test_str2   = "test_string2"

var test_str3   = "ho,ho,ho";

console.log("\nstr1:",test_str, "==>");
console.log("\tcharAt(0):",test_str.charAt(0));

console.log("\nstr1:",test_str, "==>");
console.log("str2:",test_str2, "==>");
console.log("\tconcat (str1 + str2):", test_str.concat(test_str2));
console.log("\tstr1+str2:", test_str + test_str2);

console.log("\nstr1:",test_str, "==>");
console.log("\tindexOf('s'):", test_str.indexOf('s'));
console.log("\tlastIndexOf('s'):", test_str.lastIndexOf('s'));

console.log("\n", test_str3, "==>");
console.log("split(','):",test_str3.split(','));

console.log("\n", test_str, "==>");
console.log("toUpperCase(): ", test_str.toUpperCase());
