

// Question 1: Install Node.js, TypeScript and VS Code on your computer/Laptop.
//  Question 2 :Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric,
// would you like to learn some Python today?”
// Answer:
const name: string = "Eric";
console.log(`Hello ${name}, "whould you like to learn some python today?`);
// Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// Answer:
let personName: string = "hassan khan";
// lowercase
console.log("Lowercase:",personName.toLowerCase());
// uppercase
console.log("Uppercase:",personName.toUpperCase());
// titlecase
console.log("Titlecase:",personName.replace(/\w\s* /g,(text) => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()));

// Question 4: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// "Albert Einstein once said, “A person who never made a mistake never tried anything new."

Answer:
console.log(
  "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
);
// Question 5: Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

// Answer:
let famous_person: string = "Albert Einstein";
let message: string = `${famous_person} once said, “A person who never made a mistake never tried anything new.”`;

console.log(message);
// Question 6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.

// Answer:
const personNameWithWhitespace: string ="\t \n\t kiran \n\t ";
console.log("Name with Whitespace:",personNameWithWhitespace);
const strippedName: string = personNameWithWhitespace.trim();
console.log("stripped name:",strippedName);

// Question 7: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Enclose your operations in print statements.
// Answer:
console.log(5 + 3); // Addition
console.log(10 - 2); // Subtraction
console.log(4 * 2); // Multiplication
console.log(16 / 2); // Division

// Question 8: You should create four lines that look like this:
console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
// Answer:
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
// Question 9: Favorite Number: Store your favorite number in a variable. Then, create a message revealing your favorite number. Print that message.
// Answer:
let favoriteNumber: number = 8; // This saves your favorite number
console.log(`My favorite number is ${favoriteNumber}.`); // This shows the message with your favorite number
// Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.
// Answer:
// Kiran, 2024-03-05
// This program prints a personal message.
let myName: string = "Kiran";
console.log(`Hello ${myName}, would you like to learn some TypeScript today?`);

// Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.
// Answer :
let names: string[] = ["Alice", "Bob", "Charlie"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
// Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
// Answer:
let names: string[] = ["Alice", "Bob", "Charlie"];
for (let name of names) {
  console.log(`Hello ${name}, would you like to learn some TypeScript today?`);
}
// Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// Answer:
let transports: string[] = ["Honda motorcycle", "Tesla car", "Bianchi bicycle"];

transports.forEach((transport) => {
  console.log(`I would like to own a ${transport}.`);
});
// Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// Answer:
let guests: string[] = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];

guests.forEach((guest) => {
  console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
// Answer:
let unableToAttend = "Nikola Tesla";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "Leonardo da Vinci";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
guests.forEach((guest) => {
  console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
// Answer:
let guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("Isaac Newton");
guests.splice(guests.length / 2, 0, "Charles Darwin");
guests.push("Ada Lovelace");

guests.forEach((guest) => {
  console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
// Answer:
console.log("Unfortunately, I can only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guests.splice(0, guests.length);
console.log(guests); // Shows an empty list
// Question 18: Seeing the World: Think of at least five places you’d like to visit.
// Answer:
let places: string[] = ["New Zealand", "Iceland", "Japan", "Switzerland", "Norway"];

console.log("Original order:", places);

console.log("Alphabetical order:", [...places].sort());

console.log("Original order:", places);

console.log("Reverse alphabetical order:", [...places].sort().reverse());

console.log("Original order:", places);

places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);

Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.
Answer:
let guests: string[] = [
  "Albert Einstein",
  "Marie Curie",
  "Leonardo da Vinci",
  "Isaac Newton",
  "Charles Darwin",
];
console.log(`I am inviting ${guests.length} people to dinner.`);
// Question 20: Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// Answer:
let countries: string[] = [
  "Japan",
  "Canada",
  "New Zealand",
  "Iceland",
  "Switzerland",
];
console.log("Countries I'd like to visit:", countries);
// Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// Answer:
let book: { title: string; author: string; yearPublished: number } = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  yearPublished: 1937,
};
console.log(
  `Book Info: ${book.title} by ${book.author}, published in ${book.yearPublished}`
);
// Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.

// Answer:
let friends: string[] = ["Alice", "Bob", "Charlie"];

console.log(friends[3]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
friends[2] = "Charlie"; // Correcting the error by accessing a valid index.
// Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.
// Answer:
let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True

console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota'); // False

Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
// Answer:
```typescript
// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True
console.log("apple" == "Apple"); // False

// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True

// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true  false); // True

// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True

// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True
```||
// Question 25: Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red' to a variable called alien_color.
// Answer:
let alien_color = "green";
if (alien_color == "green") {
  console.log("You just earned 5 points!");
}
Version that fails (no output):
alien_color = "red";
if (alien_color == "green") {
  // No output because the condition is false
}
// Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.
// Answer:
alien_color = "green";
if (alien_color == "green") {
  console.log("You just earned 5 points for shooting the alien!");
} else {
  console.log("You just earned 10 points.");
}
Version that runs the else block:
alien_color = "yellow";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien!");
} else {
    console.log("You just earned 10 points.");
}
// Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.
// Answer:
alien_color = "green";
if (alien_color == "green") {
  console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("You earned 10 points.");
} else if (alien_color == "red") {
  console.log("You earned 15 points.");
}
Yellow alien version:
alien_color = "yellow";
if (alien_color == "green") {
  console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("You earned 10 points.");
} else if (alien_color == "red") {
  console.log("You earned 15 points.");
}
Red alien version:
alien_color = "red";
if (alien_color == "green") {
  console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("You earned 10 points.");
} else if (alien_color == "red") {
  console.log("You earned 15 points.");
}

// Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.
// Answer:
let age: number = 25;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age < 4) {
  console.log("The person is a toddler.");
} else if (age < 13) {
  console.log("The person is a kid.");
} else if (age < 20) {
  console.log("The person is a teenager.");
} else if (age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}
// Question 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.
// Answer:
let favorite_fruits: string[] = ["apples", "bananas", "cherries"];

if (favorite_fruits.includes("bananas")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("apples")) {
    console.log("You really like apples!");
}
Continue with more fruits
// Question 30: Hello Admin: Greet users differently, especially 'admin'
// Answer:
let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];

usernames.forEach((username) => {
  if (username === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
});
// Question 31: No Users: Ensure your user list isn’t empty.
// Answer:
let usernames: string[] = [];

if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    Greet users
}
Removing all usernames ensures the message "We need to find some users!" is printed.
// Question 32: Checking Usernames: Ensure uniqueness in usernames.
// Answer:
let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];
let new_users: string[] = ["User1", "User6", "user7", "admin", "User9"];

new_users.forEach((newUser) => {
  if (
    current_users.some(
      (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
    )
  ) {
    console.log(`${newUser} will need to enter a new username.`);
  } else {
    console.log(`${newUser} is available.`);
  }
});
// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
// Answer:
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(number => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    } else if (number === 2) {
        suffix = "nd";
    } else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
});
// Question 34: Pizzas: Share your favorite pizzas and express your love for them.
// Answer:
let pizzas: string[] = ["pepperoni", "margherita", "hawaiian"];

pizzas.forEach(pizza => {
    console.log(`I like ${pizza} pizza.`);
});
console.log("I really love pizza!");
// Question 35: Animals: Highlight animals with a common trait.
// Answer:
let animals: string[] = ["dog", "cat", "rabbit"];

animals.forEach(animal => {
    console.log(`A ${animal} would make a great pet.`);
});
console.log("Any of these animals would make a great pet!");
// Question 36: T-Shirt: Create a function for customizing t-shirts.
// Answer:
function make_shirt(size: string, message: string) {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt("medium", "Code is Life");
// Question 37: Large Shirts: Default values in make_shirt().
// Answer:
function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt(); // Default large and message
make_shirt("medium"); // Default message, medium size
make_shirt("small", "Dive into Coding"); // Custom message, small size
// Question 38: Cities: Describing cities with a function.
// Answer:
function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");
// Question 39: City Names: Formatting city-country pairs.
// Answer:
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
// Question 40: Album: Create objects for music albums.
// Answer:
function make_album(artist: string, title: string, tracks?: number) {
    let album = { artist, title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}

console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));
// Question 41: Magicians: Display magician names from an array.
// Answer:
let magicians: string[] = ["Alice", "David", "Chris"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);
// Question 42: Great Magicians: Add "the Great" to magician names.
// Answer:
function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}

make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names
// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
// Answer:
let magicians: string[] = ["Alice", "David", "Chris"];

function make_great(magicians: string[]): string[] {
    let greatMagicians = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}

let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names
// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.
// Answer:
function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}

make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");

// Question 45: Cars: Create detailed car objects with flexible properties.
// Answer:
function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));