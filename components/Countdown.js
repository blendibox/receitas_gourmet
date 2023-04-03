import React, { useRef, useEffect, useState } from "react";



export default function Countdown() {

  const [num, setNum] = useState(94);


  useEffect(() => {

    /*let intervalRef = useRef();

    const decreaseNum = () => setNum((prev) => prev - 1);

    intervalRef.current = setInterval(function(){setNum((prev) => prev - 1)}, 1200);

    console.log(num);

    return () => clearInterval(intervalRef.current);
    */

    var intervalId = setInterval(() => {
      setNum(num - 1 );
      //console.log(num);

     

    }, 1980);


     if(num <= 23){
        clearInterval(intervalId);
        return () => clearInterval(intervalId);

      }

    return () => clearInterval(intervalId);

     
   

  });

 
 

  return ( 

      <div>
         <div  style={{ fontSize:69,fontWeight:600,lineHeight:1,color:'#000000',marginTop:10 }}>{num}</div> 
         <div  style={{ textAlign: 'center', fontSize: 19, fontWeight: 400,  lineHeight: 2}}>Vagas Restantes</div>
      </div>
  )



}