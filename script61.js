function mufunc(){
    var b1,var b1,var b3,var b4,var b5,var b6,var b7,var b8,var b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;


    if (b1.toLowerCase() == 'х' && b3.toLowerCase() == 'х') {
        window.alert('You are a winner');
        reset();
    } else if (b4.toLowerCase() =='х' && b5.toLowerCase() == 'х' && b6.toLowerCase() == 'х') {
        window.alert('You are a winner'); 
        reset();
    } else if (b7.toLowerCase() =='х' && b8.toLowerCase() == 'х' && b9.toLowerCase() == 'х') {
        window.alert('You are a winner'); 
        reset();
    } else if (b1.toLowerCase() =='х' && b4.toLowerCase() == 'х' && b7.toLowerCase() == 'х') {
        window.alert('You are a winner'); 
        reset();
    } else if (b2.toLowerCase() =='х' && b5.toLowerCase() == 'х' && b8.toLowerCase() == 'х') {
        window.alert('You are a winner'); 
        reset();
    } else if (b3.toLowerCase() =='х' && b6.toLowerCase() == 'х' && b9.toLowerCase() == 'х') {
        window.alert('You are a winner'); 
        reset();
    } else if (b1.toLowerCase() =='х' && b5.toLowerCase() == 'х' && b9.toLowerCase() == 'х') {
        window.alert('You are a winner'); 
        reset();
    } else if (b3.toLowerCase() =='х' && b5.toLowerCase() == 'х' && b7.toLowerCase() == 'х') {
        window.alert('You are a winner'); 
        reset();
    }
    if (b1.toLowerCase() =='o' && b2.toLowerCase() == 'o' && b3.toLowerCase() == 'o') {
        window.alert('You are a winner'); 
        reset();
    } else if (b4.toLowerCase() =='o' && b5.toLowerCase() == 'o' && b6.toLowerCase() == 'o') {
        window.alert('You are a winner'); 
        reset();
    } else if (b7.toLowerCase() =='o' && b8.toLowerCase() == 'o' && b9.toLowerCase() == 'o') {
        window.alert('You are a winner'); 
        reset();   
    } else if (b1.toLowerCase() =='o' && b4.toLowerCase() == 'o' && b7.toLowerCase() == 'o') {
        window.alert('You are a winner'); 
        reset();
    } else if (b2.toLowerCase() =='o' && b5.toLowerCase() == 'o' && b8.toLowerCase() == 'o') {
        window.alert('You are a winner'); 
        reset();
    } else if (b3.toLowerCase() =='o' && b6.toLowerCase() == 'o' && b9.toLowerCase() == 'o') {
        window.alert('You are a winner'); 
        reset();
    } else if (b1.toLowerCase() =='o' && b5.toLowerCase() == 'o' && b9.toLowerCase() == 'o') {
        window.alert('You are a winner'); 
        reset();
    } else if (b3.toLowerCase() =='o' && b5.toLowerCase() == 'o' && b7.toLowerCase() == 'o') {
        window.alert('You are a winner'); 
        reset();
    }
}
function reset(){
    location.reload();
    document.getElementById("b1").value = ' ';
    document.getElementById("b2").value = ' ';
    document.getElementById("b3").value = ' ';
    document.getElementById("b4").value = ' ';
    document.getElementById("b5").value = ' ';
    document.getElementById("b6").value = ' ';
    document.getElementById("b7").value = ' ';
    document.getElementById("b8").value = ' ';
    document.getElementById("b9").value = ' ';

}
 
let flag = 1;
function setValue() {
    if (flag == ) {
        this.value = "X";
        this.disabled = true;
        flag = 0;

    } else {
        this.value = "O";
        this.disabled = true;  
        flag = 1;
    }
}
