const butts = document.querySelectorAll('.button');
const input = document.querySelector('#input');
const ac = document.querySelector('.remove');
const result = document.querySelector('.res');
const remove = document.querySelector('.clear')
const errorbox = document.querySelector('#error'); 

//function to press the buttons and get the number to display------->done
//function to delete one num out of display-------->
//function to remove all nums--------->done
//error handelling ------->done
//show error------>done

var arr = [];

//   input.innerHTML += inp;
//   arr.push(inp)
  




let lem = input.innerHTML.length;
let equi;

// let nums = input.value


// // const arr = nums.split("")

// console.log(nums)

 const displayfunc = (e)=>{
    input.innerHTML += e;
    arr.push(e)
    console.log(arr)
  

 }






result.addEventListener("click",function(){
    if(lem != 0){
        equi = eval(input.innerHTML);
        

        try{
            equi
            input.innerHTML = equi;
            // showErr("bakc");

        }

        catch(error){

        }

        
        
    }


})



remove.addEventListener("click", function(){
    let rem = arr.pop();
    let impo = arr.join("");
    console.log(rem)
    console.log(impo)

    input.innerHTML = impo
    

    
    
})



ac.addEventListener("click", function(){
    input.innerHTML = "";
})


const showErr = ()=>{

    setTimeout(function(){
        input.innerHTML="";
    },50000)

}

