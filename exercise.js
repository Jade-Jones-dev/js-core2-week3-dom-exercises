/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

// console.log(document.querySelectorAll(".p"))
// console.log(document.querySelector(".site-header"))
// console.log(document.querySelector("#jumbotron-text"))
// console.log(document.QuerySelectorAll(".primary-content p"))


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
/*
let button = document.querySelector("#alertBtn");

function alertText() {
	alert("Thanks for visiting Bikes for Refugees!");
}

button.addEventListener("click", alertText);
// function changeBgColour() {
//   return (document.querySelector("body").style.backgroundColor = "Grey");
// }
changeColourButton.addEventListener("click", () => {
	return (document.querySelector("body").style.backgroundColor = "Grey");
});

// class solution

function changeColor() {
	if (document.body.style.backgroundColor === "red") {
		document.body.style.backgroundColor = "white";
	} else {
		document.body.style.backgroundColor = "red";
	}
}

var colorBtn = document.querySelector("#bgrChangeBtn");
colorBtn.addEventListener("click", changeColor);
/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

let paragraph = document.createElement("p");
paragraph.innerText = "Read more below";

let placeToInsert = document.querySelector("#jumbotron-text");

let addTextButton = document.querySelector("#addTextBtn");

function addText (){
    placeToInsert.appendChild(paragraph);
}

addTextButton.addEventListener('click', addText);

//class solution below

var addTextBtn = document.querySelector(#addTextBtn);

addTextBtn.addEventListener('click', addText);
function addText(){
    //step 1
    var p =document.createElement('p');
    p.className = 'red'; // compared to <p class ="red">...</>
    //step 2
    p.innerText = 'Read More';
    // step 3
    buttonDiv.appendChild(p)
}



/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.


//steps to add an element
//create teh element
let paragraph = document.createElement("p");
paragraph.innerText = "This is a paragraph";

// locate the place to insert it

let placeToInsert = document.querySelector('#content')

// instert
placeToInsert.appendChild(paragraph);
*/