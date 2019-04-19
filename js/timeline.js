// const timeLine = document.getElementById(`timeline`);
const newEkko = document.getElementById(`newEkko`);
const filterForm = document.getElementById(`filterCategories`)

// Array will hold all off the shopping list items


const categories = {
    ALL: false,
    ROCK: true,
    JAZZ: true,
    TRAP: true,
    CHILL: true,
}

const iAm = 'Tim';

let timeLine = [
  { name: `I love that new album from Eminem`, cat: 'ALL' , who:'Tim' },
  { name: `Work out muis all day`, cat: 'ROCK', who:'Tim' },
  { name: `Jazz music is life`, cat: 'JAZZ', who:'Tim' },
  { name: `Dancing every day`, cat: 'TRAP', who:'Tim' },
  { name: `TRAP TRAP TRAP`, cat: 'TRAP', who:'Tim' },
  { name: `Chill and study`, cat: 'CHILL', who:'Tim' },
];

// GENERIC PRINTER //////////////////////////////////////////////
// Will clear out the current list to replace with a new list
function printList(theArrayToPrint = timeLine) {
    
    // Format and output whatever it was told to print (theArrayToPrint)

    // Get the current filter value, so that we only print based on that value set
    let catToShow = filterForm.category.value;

    // If no list was supplied, use the entire timeLine
    if ( catToShow != 'all' )
        theArrayToPrint = theArrayToPrint.filter(item => item.cat == catToShow)

    // Add the entire list of <li> items to the document
    timeLine.innerHTML = theArrayToPrint.map(item => `
        <li>
        <div class="avatar">
       
        <div class="hover">
        </div>
      </div>
      <div class="bubble-container">
        <div class="bubble">
          <h3>${item.who}</h3> <br/>
        <p>${item.name}</p>
        </div>
        </div>   
        </li>
    `).join('');
}

// CATEGORY FILTER PRINTER ////////////////////////////////////////
//Print filters from an object
function printFilters(allcats = categories) {
    document.querySelector('.filters').innerHTML = Object.keys(allcats).map((cat, i) => `<li><input type="radio" name="category" value="${cat}" id="filter${i}"><label for="filter${i}">${cat}</label></li>`).join('');
}

// ADD A NEW ITEM //////////////////////////////////////////////
// When the form is submit, take the field and add to the list
newEkko.addEventListener('submit', event => {
    // The form was submit, stop the refreshing of the page
    //      (which is what a form wants to do by default)
    event.preventDefault();

    // Get the text from the field
    let groceryItem = newEkko.item.value;
    
    // Clear the text from the field (so we can add a new item again later)
    newEkko.item.value = '';

    // Force focus the input field in case we want to add more
    newEkko.item.focus();

    // Store the category that is currently selected (from filter form)
    let defaultCategory = filterForm.category.value;

    // If the category selected doesn't exist (ex, "all"), default category to: false
    if (defaultCategory == "all")
        defaultCategory = false;

    // Use the current filter category as the default for any new items added
    // Push it into our dataset (Array: timeLine)
    // Default to 0 quantity, and no category
    timeLine.push( { id: timeLine.length, name: groceryItem, cat: defaultCategory } );

    // Save our timeLine to the browser
    window.localStorage.setItem('timeLine', JSON.stringify(timeLine));

    // Print the list
    printList();
});



// RADIO-BUTTON FILTERS //////////////////////////////////////////////
// Listen to the whole form, quit if what was clicked was NOT an input field
filterForm.addEventListener('click', event => {
    
    // If NOT an input (radio button), then "return" (quit immediately)
    if (!event.target.matches('input')) return;

    // We know for sure it was an input (radio), find out the value and set it to localstorage
    window.localStorage.setItem('category', filterForm.category.value);

    // Must be a radio button if we got this far. Go ahead and print
    printList();
});

window.addEventListener('load', event => {

    // Load up date from localStorage. If no data was 
    shoppingList = JSON.parse(window.localStorage.getItem('timeLine')) || [];

    // Add all the filters
    printFilters();

    // Before we print the list for the first time, check if there was a category that we left off with
    // If no category was set, default to "all"
    var theCategory = window.localStorage.getItem('category') || `all`;

    // Find the radio button that matches the category and set it to "checked"
    document.querySelector(`input[value="${theCategory}"]`).setAttribute('checked', 'checked');

    // PRINT THE LIST WHEN THE PAGE LOADS //////////////////////////////////
    // Default to the WHOLE list when a user arrives at the page
    printList();

});





// const ALL = 'ALL';
// const ROCK = 'ROCK';
// const JAZZ = 'JAZZ';
// const TRAP = 'TRAP';
// const CHILL = 'CHILL';





// function newElement() {
  
//   let inputValue = document.getElementById("newEkko").value;
  
//   if (inputValue === '') {
//     alert("Maybe Your keyboard isnt working! lol");
//   } 
// 	else {
    
//     timeLine.push({ name: inputValue, cat: 'ALL' });
//     printList();
//   }

//  }
 

 
//  function printList() {
//    document.getElementById("timeLine").innerHTML = timeLine.map(item=>`<li>
//            <div class="avatar">
//              <img src="img\226 - Copy.jpg">
//              <div class="hover">
//              </div>
//            </div>
//            <div class="bubble-container">
//              <div class="bubble">
//                <h3>@carlf</h3> <br/>
//              ${item.name}
//              </div>
//              </div>
//          </li>`)
//  } ;
  


//  const elChat = document.getElementById('chat');
//  const elCompose = document.getElementById('compose');
 
//  const iAm = 'Tim';
//  const messages = [ 
//    {text: "Hello", time: `2:06PM`, who:`GB`}, 
//    {text: "Oh hey", time: `2:07PM`, who:`RP`}, 
//    {text: "What's up?", time: `2:09PM`, who:`GB`}, 
//    {text: "Nothing. Chillin.", time: `2:10PM`, who:`RP`} 
//  ];
 
 
//  elCompose.addEventListener('submit', event => {
//    event.preventDefault();
 
//    var newText = elCompose.newMsg.value;
//    messages.push( {text: newText, time: `2:21PM`, who:`RP` } );
 
//    elCompose.reset();
 
//    printAllMessages();
 
//  });
 
 
//  const aMessage = (msg) => {
 
//    let whichDirection = `received`;
//    if (msg.who == iAm) {
//      whichDirection = `sent`
//    }
 
//    return `
//      <div class="message-${whichDirection}">
//        <div class="bubble">${msg.text}</div>
//        <div class="timestamp">
//          <div class="avatar">${msg.who}</div>
//          <div class="time">${msg.time}</div>
//        </div>
//      </div>`;
 
//  };
 
 
//  const printAllMessages = () => {
//    elChat.innerHTML = messages.map( aMessage ).join('');
//  }
 
 
//  printAllMessages();
 