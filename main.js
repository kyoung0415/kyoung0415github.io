function sayThatWasEasy(){
   var thatWasEasy= new Audio("dogs.mp3");
   thatWasEasy.play();
}

 $("#easy").on("click", sayThatWasEasy);