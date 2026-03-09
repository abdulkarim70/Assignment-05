1️⃣ What is the difference between var, let, and const?
Ans: Var is Function-scoped,it's visible throughout that function. Outside functions, it's global.
Var declarations are hoisted to the top of their scope. Var Can be  reassigned and redeclared in the same scope.

let is Block-scoped. let is hoisted, but not initialized.let Can be reassigned but cannot be redeclared in the same scope.

 const is Block-scoped (like let). It is  hoisted, but not initialized.const Cannot be reassigned or redeclared.

2️⃣ What is the spread operator (...)?
Ans.
 spread operator  is represented by  (three dots). It allows  to expand an array, object, or iterable into individual elements. Think of it as “spreading” the contents.


3️⃣ What is the difference between map(), filter(), and forEach()?
Ans.
forEach() execute something for each element and iterate over an array and perform a side effect.
forEach Returns undefined (does NOT return a new array).Original array is not changed unless  explicitly modify it inside forEach.

map() transform each element in an array into a new array.
Returns  A new array of the same length. map is a new array based on the original.

filter()Filter elements based on a condition.
Returns a new array containing only elements that satisfy the condition.

4️⃣ What is an arrow function?
Ans.
arrow function Use => instead of the function keyword.
arrow function assign to a variable  for reuse it.
auto return.No need parentheses if one parameter.

5️⃣ What are template literals?
Ans.
Template literals use backticks (`) instead of single ' or double " quotes.
By using template literals, interpolate variables and write multi-line strings.
${...} is used to insert expressions or variables into a string.

Anything inside ${...} will be evaluated.
