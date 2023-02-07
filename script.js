"use strict";

// Task-1
// function GetDivide(num){
//     if(num%3==0 & num%7==0){
//         console.log("Ədəd 3 və 7-ə bölünür")
//     }else{
//         console.log("Ədəd 3 və 7-ə bölünmür")
//     }
// }

// GetDivide(21)


// let GetDivide=(num) =>{
//     if(num%3==0 & num%7==0){
//                 console.log("Ədəd 3 və 7-ə bölünür")
//             }else{
//                 console.log("Ədəd 3 və 7-ə bölünmür")
//             }
// }

// GetDivide(21)



// Task-2


// function GetFactorial(num){

//     let mult=1;
//     for( let i=1;i<=num; i++){
//         mult=mult*i

//     }

//     console.log(mult)
// }

// GetFactorial(4);


// let GetFact=(num)=>{
//     let mult=1;
//     for( let i=1;i<=num; i++){
//         mult=mult*i

//     }
//     console.log(mult) 
// }

// GetFact(5)

// Task-3

// Her hansisa number elementleri olan arayin icindeki 
// cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.


// function GetMultiple(arr){
//     let multiple=0;
//     let hasil=1;
//     for(let i=0; i<=arr.length;i++){
//         if(arr[i]%2==0){
//             hasil=arr[i]*arr[i]
//             multiple=multiple+hasil
            
             
//         }
//     }
//     console.log(multiple)
// }

//  let arry=[1,2,3,4,5,6,8];

// GetMultiple(arry)

// let GetMult=(arr)=>{
//     let multiple=0;
//     let hasil=1;
//     for(let i=0; i<=arr.length;i++){
//         if(arr[i]%2==0){
//             hasil=arr[i]*arr[i]
//             multiple=multiple+hasil
            
             
//         }
//     }
//     console.log(multiple)
// }
// let arry=[1,2,3,4,5,6,8];

// GetMult(arry)


// Task-4

// ) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve
//  password beraberdirse 12345 -e,
//  ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin. 

// function GetLogin(email,password){
//     if(email=="cavid@code.edu.az" & password==12345){
//         console.log("Girish olundu")
//     }else{
//         console.log("Mail ve yaxud password sehvdir")
//     }
// }

// GetLogin("cavid@code.edu.az", 12345)


// let GetLog=(email,password)=>{
//     if(email=="cavid@code.edu.az" & password==12345){
//         console.log("Girish olundu")
//     }else{
//         console.log("Mail ve yaxud password sehvdir")
//     }

// }
// GetLog("cavid@code.edu.az", 12345)


// Task-5

// Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.

// function GetArrMultiple(arr){
//     let multiple=0
//     for(let i=0;i<=arr.length;i++){
//         if(arr[i]%2==1){
//             multiple=multiple+arr[i]       
//         }
//     }
//     console.log(multiple)
// }
// let arry=[1,2,3,4,5,6,9]

// GetArrMultiple(arry)

// let GetMult=(arr)=>{
//     let multiple=0
//     for(let i=0;i<=arr.length;i++){
//         if(arr[i]%2==1){
//             multiple=multiple+arr[i]       
//         }
//     }
//     console.log(multiple)
// }
// let arry=[1,2,3,4,5,6,9]

// GetMult(arry)



// Task-6
// Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.


// function GetCount(arr){
//      let multiple=0;
//     for(let i=0;i<=arr.length;i++){
//         if(arr[i]%2==0){
//             multiple++
//         }
//     }
//     console.log(multiple)
// }

// let arry=[1,2,3,4,5,6,9,12]

// GetCount(arry)

// let GetCountNumber=(arr)=>{
//     let multiple=0;
//     for(let i=0;i<=arr.length;i++){
//         if(arr[i]%2==0){
//             multiple++
//         }
//     }
//     console.log(multiple)
// }

// let arr=[1,2,3,4,5,6,9,12]

// GetCountNumber(arr)