import { useState, useEffect } from 'react'
  
  //Hook personalizado con la lógica de todo lo que necesita para buscar la imagen 
  export function useCatImage ({ fact }){

    const [imageURL, setImageURL] = useState()

    useEffect(() =>{
      if(!fact) return 
      
      const threeFirstWords = fact.split(' ',3).join(' ')
      //Segundo fetching de datos
      fetch(`https://cataas.com/cat/cute/says/${threeFirstWords}?json=true`)
      .then(res => res.json())
      .then(response => {
        //le envío toda la url porque la api no retorna la url
      setImageURL(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red`)
  
        }) 
    }, [fact])

    console.log(imageURL)
  
    return {imageURL}
  }