 
let count = 0 ;
// setInterval(function(){

//     count++;
//     console.log(count);
// }, 1000)

 

function counter() {
    console.log(count);
    count++;
    setTimeout(counter, 1000); // Call counter every 1000 milliseconds (1 second)
}

counter();
