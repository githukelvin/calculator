const output = document.querySelector(".output");
const al = output.value;
const inp = document.querySelector("input")
const btns = document.querySelectorAll(".btn");
let body = document.querySelector("body");


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

// toggle{}

inp.addEventListener("input",()=>{
    inpValue= parseInt(inp.value);
    if(inpValue ===1){
        body.classList.remove("theme2");               
        body.classList.remove("theme3");               
    }
    else if(inpValue === 2){
        body.classList.toggle("theme2");  
        body.classList.remove("theme3");            
    }
    else if(inpValue === 3){
        body.classList.remove("theme2");  
        body.classList.toggle("theme3")           
    }
})
