var i = 0;
function callfun(){
  move(80,'pythonjs');
  move(50,'javajs');
  move(60,'Cjs');
  move(60,'frontendjs');
  move(20,'gojs');
  function move(max_width,name) {
    i = 1;
    var elem = document.getElementById(name);
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() 
    {
      if (width > max_width) 
      {
        clearInterval(id);
        i = 0;
      }
      else 
      {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

// function my(){
//   alert("Heelo");
// }

function projectlinkover(id){
  var elem = document.getElementById(id);
  elem.style.boxShadow = "5px 5px 5px 5px #808080";
}

function projectlinkout(id){
  var elem = document.getElementById(id);
  elem.removeAttribute("style");
}