const ALL = 'ALL';
const ROCK = 'ROCK';
const JAZZ = 'JAZZ';
const TRAP = 'TRAP';
const CHILL = 'CHILL';



let timeline = [
  { name: `I love that new album from Eminem`, cat: ALL },
  { name: `Work out muis all day`, cat: ROCK },
  { name: `Jazz music is life`, cat: JAZZ },
  { name: `Dancing every day`, cat: TRAP },
  { name: `TRAP TRAP TRAP`, cat: TRAP },
  { name: `Chill and study`, cat: CHILL },
];



function newElement() {
  
  let inputValue = document.getElementById("newEkko").value;
  
  if (inputValue === '') {
    alert("Maybe Your keyboard isnt working! lol");
  } 
	else {
    
    timeline.push({ name: inputValue, cat: ALL });
    printList();
  }

 }
 

 
 function printList() {
   document.getElementById("timeline").innerHTML = timeline.map(item=>`<li>
           <div class="avatar">
             <img src="img\226 - Copy.jpg">
             <div class="hover">
             </div>
           </div>
           <div class="bubble-container">
             <div class="bubble">
               <h3>@carlf</h3> <br/>
             ${item.name}
             </div>
             </div>
         </li>`)
 } ;
  

