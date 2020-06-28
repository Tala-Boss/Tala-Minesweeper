var time = document.getElementById("time");
var totalSeconds = 0;

NumberOpen = [];
arr = [];
boom = [];
numberM=[];


var i = 1;
for (i; i <= 100; i++) {
  var div = document.createElement("div");
  div.setAttribute("id", ""+i);
  div.setAttribute("class", "cell");
  document.getElementById("mm").appendChild(div);
  div.addEventListener ("click", function() { v(this.id); });
  if(i == 100){puhsMinesANDcal();}
}

function setTime() {++totalSeconds;time.innerHTML = totalSeconds}
function reloadg(){window.location.reload();}
function puhsMinesANDcal(){

  var i = 0 ;
	while (i < 10) { 
    	var randomNumber =  Math.floor(Math.random() * 99) + 1;
    	if(!boom.includes(randomNumber)){
    		boom[i] = randomNumber;
    		document.getElementById(randomNumber).name = "mines";
    		i++;
    	}
	}

for(var position=1; position<=100;position++){
   if (boom.includes(position)) {arr[position]=100000; }  
   else{
         if (position % 10 ==0) {

		    var count=0;
			if (boom.includes(position-11)) {count++}
			if (boom.includes(position-10)) {count++}
			if (boom.includes(position-1)) {count++}
			if (boom.includes(position+9)) {count++}
			if (boom.includes(position+10)) {count++}
	      	arr[position]=count;
                                                            } //end if (position % 10 ==0)
	 
	     else if(position % 10 ==1){
   
			var count=0;
			if (boom.includes(position-10)) {count++}
			if (boom.includes(position-9)) {count++}				
			if (boom.includes(position+1)) {count++}
			if (boom.includes(position+10)) {count++}
			if (boom.includes(position+11)) {count++}
			arr[position]=count;
                                                          }//end if(position % 10 ==1)
		else{

			var count=0;
			if (boom.includes(position-11)) {count++}
			if (boom.includes(position-10)) {count++}
			if (boom.includes(position-9)) {count++}
			if (boom.includes(position-1)) {count++}				
			if (boom.includes(position+1)) {count++}
			if (boom.includes(position+9)) {count++}
			if (boom.includes(position+10)) {count++}
			if (boom.includes(position+11)) {count++}
			arr[position]=count;
                                                      } // end final else

}//end if button not boom
}//end for loop calculation 
}// end function puhsMinesANDcal

 function v(position){
 	//console.log(arr[position]);	
	setInterval(setTime, 1000);
	if (document.getElementById(position).name == "mines") {
		setTimeout(function() {
           swal({ title: "OOps!", text: "Game Over!",icon: "error",}, function() {
		            window.location = "Minesweeper.html";
		        });
		          }, 200);

		for(var m=1 ;m<=10;m++){
			var icon = document.createElement("i");
             icon.setAttribute("class", "fas fa-bomb");
             icon.setAttribute("id", "bombicon");
            document.getElementById(boom[m]).appendChild(icon);
		       }

}//end if this mines

	else if(document.getElementById(position).name != "mines"){
    if(arr[position] != 100000){ setvalue(position);}
     
    if (arr[position]==0) {openNeighbors(position);}

	} //end if this not mines

 } //end function v


function openNeighbors(id){
	  var p = parseInt(id, 10);	
	  var result = arr[p];
	
	if(p < 0 || p > 99){return;}
	if(arr[p] == 100000 ) {return};

	if(result== 0){

		if((p+1)%10 !=0  && arr[p+1] != 100000){
			setvalue(p+1);
			document.getElementById(p+1).click;	}

		if(p-1 > 0 &&(p-1)%10 !=0  ){
			setvalue(p-1);
            document.getElementById(p-1).click;
			
		}
         
         if(p-9 > 0 && (p-9)%10 !=0 && arr[p-9] != 100000){
         	setvalue(p-9);
           document.getElementById(p-9).click;
			
		}
		if(p+9 < 99 && (p+9)%10 !=0 && (p+9) %9 != 0 && arr[p+9] != 100000) {
			setvalue(p+9);
            document.getElementById(p+9).click;
			}		

		if(p+10 < 99 && arr[p+10] != 100000){
			setvalue(p+10);
            document.getElementById(p+10).click;
			}
		
		if(p-10 > 0  && arr[p-10] != 100000){
			setvalue(p-10);
            document.getElementById(p-10).click;
			}
			 
		 if(p+11 < 99 && (p+11)%10 != 0 && arr[p+11] != 100000){
		 	setvalue(p+11);
           document.getElementById(p+11).click;
			}

		if(p-11 > 0 && (p-11)%10 != 0 && arr[p-11] != 100000){
			 setvalue(p-11);
             document.getElementById(p-11).click;
			}
}// end if arr[p]==0
	if(result != 0) {setvalue(p);}

} //end function  openNeighbors


function setvalue(id){
	
	document.getElementById(id).innerHTML = arr[id];
	document.getElementById(id).style.background="white";

	if (!NumberOpen.includes(id)){
		NumberOpen.push(id);
	}

	if (NumberOpen.length == 90 || NumberOpen.length == 89) {

		setTimeout(function() {
           swal({ title: "Very good", text: "You Wins!",icon: "success",}, function() {
		            window.location = "Minesweeper.html";
		        });
		          }, 200);
	}

}




