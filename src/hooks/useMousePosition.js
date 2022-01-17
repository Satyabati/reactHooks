import { useState, useEffect } from "react"

const useMousePosition = () =>{
    const [position, setPosition] = useState({ x: 0,y:0})
  
    useEffect(() =>{
      const handleMouseOver = (e)=>{
        setPosition({
          x: e.pageX,
          y: e.pageY
        })
      }
      document.addEventListener('mouseover', handleMouseOver );
      return ()=>{
        document.removeEventListener('mousemove',handleMouseOver)
     }
    },[])
    
    return position;
  }

  export { useMousePosition as default}