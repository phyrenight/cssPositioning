function adjustJr(){
  console.log("hello world!");
  var elem = document.forms[0];
  var box = document.getElementsByClassName("box");
  var totalPositions = 4;
  for(var i = 0; i < totalPositions; i++){
    if(parseInt(elem[i].value) > 0 ){
      for(var n = 0; n < 4; n++){
        if(i === 0){
      	  console.log(elem[i].value+"px")
          box[n].style.right = elem[i].value+"px";
        }
        else if(i === 1){
          box[n].style.bottom = elem[i].value+"px";
        }
        else if(i === 2){
          box[n].style.left = elem[i].value+"px";
        }
        else if(i === 3){
          box[n].style.top = elem[i].value+"px";
        }
      }
    }
    else{
      console.log(elem);
    }
  }
}