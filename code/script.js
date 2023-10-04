// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)


// Step 1a* - Please enter your name //
// const userName = prompt(`Please enter your name`);//

let userName = prompt('Please enter your name:');


// Step 2 - Food choice
// Your code goes here
// Ask customer on choice // 


let foodChoice = prompt(
  `Please select your choice of meal:
    1 - Pizza
    2 - Salad
    3 - Pasta
    Please enter the number of your choice.`
  ); 

  // Keep prompting the user until a valid input is received//
  while (foodChoice !== '1' && foodChoice !== '2' && foodChoice !== '3') {
    alert('Invalid input! Please enter "1" or "2" or "3"');
    ageGroup = prompt('Is this meal for a child or an adult? Please enter "child" or "adult"');
}

// Initiate variable to store the selected choice//


// Determine the selected meal based on the user's choice //

switch (foodChoice) {
  case '1':
    console.log('You chose Pizza.');
    break;
  case '2':
    console.log('You chose Salad.');
    break;
  case '3':
    console.log('You chose Pasta.');
    break;
  default:
    console.log('Invalid choice, please enter a number between 1 and 3.');
}



// Step 3 - Subtype choice
// Your code goes here


//Determine the corresponding food group//
// Initalize specific flavour // // Initiate variable to store the selected choice//
// Nesting one switch statement inside another.



let subtypeChoice = "";
let subtype = "";

switch (foodChoice) {

  case '1':
    subtypeChoice = prompt(
    `Select a flavour for your pizza
     1 - Curry Banana
     2 - Nutella
     3 - Pepperoni
     Please enter a number of your choice.`
     );

  switch (subtypeChoice) {
    case '1':
      subtype = 'Curry Banana';
      break;
    case '2':
      subtype = 'Nutella';
      break;
    case '3':
      subtype = 'Pepperoni';
      break;
      default:
      alert('Please select a number!');
      break;
  }

  break;
  case '2':
    subtypeChoice = prompt(
      `Select what type of salad you would like
       1 - Ceasar
       2 - Shrimp
       3 - Asian
       Please select a number!`
    );

    switch (subtypeChoice) {
      case '1':
        subtype = 'Ceasar';
        break;
      case '2':
        subtype = 'Shrimp';
        break;
      case '3':
        subtype = 'Asian';
        break;
        default:
          alert('Please select a number!');
          break;
    }

  break;
  case '3': 
    subtypeChoice = prompt(
      `Select your pasta of choice 
       1 - Carbonara
       2 - Seafood Linguini
       3 - Spaghetti Bolognese
       Please enter a number of your choice.`
       )

    switch (subtypeChoice) {
      case '1':
        subtype = 'Carbonara'
        break;
      case '2':
        subtype = 'Seafood Linguini'
        break;
      case '3':
        subtype = 'Spaghetti Bolognese'
        break;
        default:
        alert('Please select a number!');
        break;

    }

    //break;//

    if (subtype) {
      alert(`Great choice! You chose ${subtype}.`);

    }

}


// Step 4 - Age
// Your code goes here

// Initiate all involved variables again. How many times should you declare a variable?//


let cost = "";


  if (subtype) {
    let ageGroup = prompt('Is this meal for a child or an adult? Please enter "child" or "adult"')

    // Keep prompting the user until a valid input is received//
  while (ageGroup !== 'child' && ageGroup !== 'adult') {
    alert('Invalid input! Please enter "child" or "adult"');
    ageGroup = prompt('Is this meal for a child or an adult? Please enter "child" or "adult"');
}

    switch (ageGroup) {
      case 'child':
    cost = '$3.00'; 
      break;

      case 'adult':
    cost = '$8.00';
      break;
      default:
    alert('Please enter "child" or "adult"');
    break;
    
}

if (cost) {
  let confirmation = prompt(`You chose a ${subtype} for a ${ageGroup}. The cost is ${cost}. Does this look good? Please enter "yes" or "no".`);

  // Check user's confirmation //
  // Step 5 - Order confirmation //
  // Your code goes here //

if (confirmation === "yes") {
  alert('Thank you for your order!');
  } else if (confirmation === "no") {
  alert('Your order is cancelled.');
  }
}
  }
  

  
