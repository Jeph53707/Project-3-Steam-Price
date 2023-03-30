import { useEffect, useState } from 'react';
import axios from 'axios'
import ArtGallery from './ArtGallery.js'

const Form = () => {
    const [selectedValue, setSelectedValue] = useState ("placeholder");
    const [buttonValue, setButtonValue] = useState ("placeholder")
    const handleChange = (e) => {
  
        setSelectedValue (e.target.value)


    }

    const [art, setArt] = useState ([]);

   
    const onSubmit = (e) => {
      e.preventDefault ()
      setButtonValue (selectedValue)
    }

    useEffect (() => {
      const apiKey = "BbPWn3yL"
      axios ({
        url: "https://www.rijksmuseum.nl/api/en/collection",
        method: "GET",
        dataResponse: "json",
        params: {
          key: apiKey,
          format: "json",
          imgonly: true,
          involvedMaker: buttonValue,
          ps: 6
         
         
        },
      }).then((response) => {
        setArt (response.data.artObjects)
      
        }
       
      )},[buttonValue]);
    
     
     

    
    return (
        <div className="artistForm">
          <div className="formHeader">
            <h2> AA Finder </h2>
            <form onSubmit = {onSubmit}>

              <label>Click to choose your artists!</label>
              <select onChange = {handleChange} value = {selectedValue}>
                  <option value="placeholder" disabled>Pick One!</option>
                  <option value="Vincent van Gogh">Vincent van Gogh</option>
                  <option value="Pablo Picasso">Pablo Picasso</option>
                  <option value="Pieter Brueghel">Pieter Brueghel</option>
                  <option value="Leonardo da Vinci">Leonardo da Vinci</option>
                  <option value="Henri Matisse">Henri Matisse</option>
                  <option value="Diego Rivera">Diego Rivera</option>
                  <option value="Edgar Degas">Edgar Degas</option>
                  <option value="Paul Cézanne">Paul Cézanne</option>
                  <option value="Paul Gauguin">Paul Gauguin</option>
                  <option value="Jeff Chen">Jeff Chen</option>
              </select>
              <button type="submit">Get Art</button>
            </form>
          </div>
            <ArtGallery ArtArray = {art} 
            noArt = {noArt} />
     
        </div>

    )
       
   
}

export default Form;


