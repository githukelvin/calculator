const output = document.querySelector(".output");
const btns = document.querySelectorAll(".btn");


// FUNCTION TO PRINT  NUMBERS ON THE SCREEN
function change(number){
    output.value+=number;


}
let result=()=>{
    try{
        output.value=eval(output.value)
    }
    catch(err){
        alert('enter the  valid input')
    }
}
function reset(){
    
    output.value ="" ;
}
function del(){
    
    output.value = output.value.slice(0,-1);
}
