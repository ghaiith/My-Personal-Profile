// function viewmore() {
//     var viewcont = document.getElementById("pbef");
//     viewcont.classList.remove("pbef");
//   } 

  function toggleText(button_id) 
  {
     var el = document.getElementById(button_id);
     var viewcont = document.getElementById("pbef");
     if (el.firstChild.data == "Read More") 
     {
         el.firstChild.data = "Read less";
         viewcont.classList.remove("pbef");
     }
     else 
     {
       el.firstChild.data = "Read More";
       viewcont.classList.add("pbef");
     }
  }