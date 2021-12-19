let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

let sqrd = false;
let finish = false;

buttons.map( button => {
   button.addEventListener('click', (e) => {
      switch(e.target.innerText){
         case 'C':
            display.innerText = '';
            break;
         case '←':
            if(display.innerText){
               display.innerText = display.innerText.slice(0, -1);
            }
            break;
         case '2nd':
            sqrd = true;
            break;
         case '^2':
            if(sqrd){
               display.innerText += "**2";
               sqrd = false;
            }
            break;
         case '=':
            try{
               display.innerText = eval(display.innerText);
            }  catch{
               display.innerText = 'Error!';
            }
            finish = true; 
            break;
         default:
            if(finish){
               display.innerText = '';
               finish = false;
            }
            display.innerText += e.target.innerText;
      }
   });  
});

//test1.map( test2 => {
//   test2.addEventListener('click', (e) => {
//      if(sqrd){
//         display.innerText += '**2';
//         console.log(display.innerText);
//         sqrd = false;
//      } else {
//         display.innerText += '*';
//      }
//   });
//});
