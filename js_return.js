/* ' return ' statement in js : return statement use inside a function block of code which helps to return the value(result) to the function where it had been invoked..
After return statements is executed it stops the function and provides control to the caller function ..  
we can return complex data types from return statements like objects,arrays and even functions..  */

//
function x (a,b){
  a+b;
  return 100;
};

let  a = x(10,10)  
console.log(a);   // here value will be 100 ...not a+b=20


//
function add(a,b){
return a+b;
}
let b = add(10,10);
console.log(b);      // now output a+b=10+10=20

//

const  ab = (a,b)=>{

  const c = a+b;
  return 'suman thapa'
  
  }
  
  let xy = ab(12,12);
  document.write(xy);   // here output will be 'suman thapa'

  //

  let abc = (x,y)  =>{
    return x + y
    }
    
    document.write(abc('suman',123))

  //

    function hello(){
      console.log('hello there')
      }
      hello();

  //
      
      function hi(a){
      return 'a';
      }
      
      console.log(hi("hi it's me"));   //output: beacuse of return 'a '
      
   //

      function sum(a,b){
      return 'java'+' '+'javascript'
      }
      console.log(sum(10,13));   //output:  java javascript
      
   //
   
   function sum1(a,b){
     return 2+2;    
      }
     console.log(sum1(1000,13)) ;;    //ouput : 4   because of return 2+2 =4

//

let arrow = (a,b) => {
  a+b;
  return (function xy(){
    console.log('hi')
  })
  }
  
  console.log(arrow(12,12))    //output:    function xy(){console.log('hi')}

  
  //

  function array(a,b){
    return [2,3,4]
    }
    
    const save = array(20,30)
    document.write(save)      //output: 2,3,4


/* Note: we can declare return statement only once in function after return no other statement will be execute..   but in some usecases we can use multiple "return" statement check the differences in given below example      */

/* in this example we can use return only one time   */

let arr = (val1,val2) =>{
  return 0;                 // <= below return 0 ; no other return statment will execute
 let arr = [2,3,4];
 return arr
 }
 const theResult = arr(20,30)
 document.write(theResult);       // output : 0



 /* But in this case like conditions  if...else if... we can use multiple "return"  */

 const compare = (a,b)=>{
  if(a>b){
    return 'No 5 is not smaller then 10'
  }
  else if(b<a){
    return 'this is false'
  }
  else{
    return 'yes this statement is true';   // this one will execute
  }
  
  };
  
  const atLast = compare (5,10);
  document.write(atLast)            // output: yes this statement is true


//

const myArrowfunc = (name,age) =>{
  console.log(name,age);            // output : suman 29 ... will print in console
  return name+"  "+age
};

const now = myArrowfunc('suman' , 29)
document.write(now)                   // suman 29 ...will print outside in interface
 

//


function toCalculate (a,b,callback){
  return callback(a,b)
}

const thisResult = toCalculate(20,30,function(nmbr1,nmbr2){
 return nmbr1+nmbr2
});

document.write(thisResult);

// subtraction..

const thisSubtraction = (x,y) => x-y

const ow = toCalculate(10,50,thisSubtraction)
document.write(ow);

//multiply 

function multiplYIs (m,n){
 return m*n
};

const multiResult = toCalculate(12,12,multiplYIs)
document.write(multiResult);


//

function xyw (a,b,cb){

  return cb(a,b)
 }
 const final = xyw (100,12,
               function (ab,bc){return (ab+bc) })
 
 console.log(final)     // output: 100+12=112
                                

 //

 function last (a,b,cb){
  console.log(cb(a,b))      //output:  5
  }
  
  last (2,3,(x,y)=>{
   return (x+y)
  })
  
  //
  function stat (a,b,cb){
   return cb(a,b)
  }
  
  stat (5,3,(x,y)=>{
  console.log(x+y)        //output : 7
  })



  //
   function stat (a,b,cb){
 
    cb()                     //output : hi
     console.log(a+b)        //output : 5+3 = 8
    }
    
    stat (5,3,()=>{
    console.log('hi')
    })

 //
 
 function last (name,age,cb) {
  console.log( cb(name,age))
}

last ('suman',29,function(a,b){
return (a+b)
})

//
function here (name,country,cb) {
  return cb(name,country)
}

here ('thapa','nepal',function(a,b){
 document.write(a+b)
})


               /*  THE   END     */