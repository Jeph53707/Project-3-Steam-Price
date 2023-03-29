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

const Form = (props) => {
    const [selectedValue, setSelectedValue] = useState ("placeholder");
    const handleChange = (e) => {
        //set the selected state 
        // console.log ("tt")
        console.log (e.target.value)
        setSelectedValue (e.target.value)


    }

    const [art, setArt] = useState ([]);

    // const [artOrientation, setArtOrientation] = useState (null)
    
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
          involvedMaker: selectedValue,
          ps: 6
         
         
        },
      }).then((response) => {
        console.log(response.data.artObjects);
        setArt (response.data.artObjects)
       
      })},[selectedValue]);

    
    return (
        <div className="artistForm">
            <h2> AA Finder </h2>
            <form>
              <label>Click to choose your artists!</label>
              <select onChange = {handleChange} value = {selectedValue}>
                  <option value="placeholder" disabled>Pick One!</option>
                  <option value="Vincent van Gogh">Vincent Van Gogh</option>
                  <option value="Pablo Picasso">Pablo Picasso</option>
                  <option value="Pieter Brueghel">Pieter Brueghel</option>
                  <option value="Leonardo da Vinci">Leonardo da Vinci</option>
                  <option value="Henri Matisse">Henri Matisse</option>
              </select>
            </form>
            <ArtGallery ArtArray = {art} />

        </div>

    )
       
   
}

export default Form;


