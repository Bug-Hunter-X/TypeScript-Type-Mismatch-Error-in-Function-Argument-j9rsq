function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John User"];

// Solution 1: Iterate through the array and greet each person
user.forEach(name => console.log(greeter(name)));

// Solution 2: Change the function to accept an array of strings
function greeterArray(people: string[]): string[] {
  return people.map(person => "Hello, " + person);
}
console.log(greeterArray(user));

// Solution 3:  If only the first element is needed
console.log(greeter(user[0]));