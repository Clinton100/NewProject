// var Distance;
// var KM = parseInt(prompt("Enter distance to be covered"));
// if(KM >=1 && KM<= 10){
//     alert("Next")
// }

// if(KM >=11 && KM<=50){
//     alert("Continue")
// }

// if (Distance >=51 && Distance <=100){
//     alert("Next")
// }

// if(Distance >=101 && Distance <=200){
//     alert("Enter")
// } 

// if(Distance >=201 && Distance<=300){
//     alert("Continue")
// }

// if (Distance >=301 && Distance <=400){
//     alert("Next")
// }

// if(Distance >=400 && Distance <=401){
//     alert("continue") 
// }

// else{
//     alert("Bus doesn't go beyond this point")
// }
// alert("Proceed")

// function Passengers ()

function Cost(){
    var howfar =parseInt(document.getElementById('Distance').value);
     var KLM =parseInt(document.getElementById('persons').value);

     if(howfar >=1 && howfar <=10){
        document.getElementById('Equals').value = 1 * 100;
     }
     else if(howfar>=10 && howfar<=50){
        document.getElementById('Equals').value = 1 * 300;
     }
     else if(howfar>=50 && howfar<=100){
        document.getElementById('Equals').value = 1 * 500;
     }
     else if(howfar>=100 && howfar<=200){
        document.getElementById('Equals').value = 1 * 1000;
     }
     else if(howfar>=200 && howfar<=300){
        document.getElementById('Equals').value = 1 *1200;
     }
     else if(howfar>=300 && howfar<=400){
        document.getElementById('Equals').value = 1 * 1500;
     }
     else{
        document.getElementById('Equals').value = "No Buses beyond this Point!"
     }

     document.getElementById('Total').value = KLM * document.getElementById('Equals').value;
     
}




