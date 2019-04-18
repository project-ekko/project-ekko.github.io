



























// const ALL = 'ALL';
// const ROCK = 'ROCK';
// const JAZZ = 'JAZZ';
// const TRAP = 'TRAP';
// const CHILL = 'CHILL';


// const iAm = 'Tim';
// let timeline = [
//   { name: `I love that new album from Eminem`, cat: 'ALL' , who:'Tim' },
//   { name: `Work out muis all day`, cat: 'ROCK', who:'Tim' },
//   { name: `Jazz music is life`, cat: 'JAZZ', who:'Tim' },
//   { name: `Dancing every day`, cat: 'TRAP', who:'Tim' },
//   { name: `TRAP TRAP TRAP`, cat: 'TRAP', who:'Tim' },
//   { name: `Chill and study`, cat: 'CHILL', who:'Tim' },
// ];



// function newElement() {
  
//   let inputValue = document.getElementById("newEkko").value;
  
//   if (inputValue === '') {
//     alert("Maybe Your keyboard isnt working! lol");
//   } 
// 	else {
    
//     timeline.push({ name: inputValue, cat: 'ALL' });
//     printList();
//   }

//  }
 

 
//  function printList() {
//    document.getElementById("timeline").innerHTML = timeline.map(item=>`<li>
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
 