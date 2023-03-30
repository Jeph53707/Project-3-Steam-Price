// Two Network requests
// 1 request to get all games list | 1 map request to get detailed information if the first was successful 


// Form that would take in user input which would then fetch the API to send us a list of all games 
// This list of games is then placed in the Form drop down menu 
// If the user clicks on one of the items they are given additional information
// useEffect call to get the list of AppIDs from the API -> the list is passed down to form which will take care of   rendering each game and related information 
// Product Info and Game Info
// Wireframe 


// Make an API request for testing purposes on App.js via fetch 

import { useEffect, useState } from 'react';
import axios from 'axios'
import ArtGallery from './ArtGallery.js'

const Form = () => {
    const [selectedValue, setSelectedValue] = useState ("placeholder");
    const [buttonValue, setButtonValue] = useState ("placeholder")
    const [noArt, setNoArt] = useState (false)
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
      
        //Disabled for now due to errors 
        // if (art.length === 0) { setNoArt (true) }
        // else { setNoArt (false) }

        console.log (noArt)
        }
       
      )},[buttonValue])
    
     
     

    
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


