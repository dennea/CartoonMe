import React from 'react'
import './NewPhoto.css'
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import { StyleTypes } from '../../Data/styleTypes';
import { useState } from 'react';

const NewPhoto = () => {
    const [state, setState] = useState(null)

    const selectState = (stateName) => {
        setState(stateName)
    }
    return (
        <div className = "NewPhoto">
            <div className="styleSelect">
                <h2 style={{color:"#777777"}}>Select a Style: </h2>
                {StyleTypes.map((style)=>{
                    return(
                        <button 
                        className="style" 
                        style={{background: state === style.name ? 'linear-gradient(98.63deg, #fec534 0%, #FF8A00 100%)':'rgb(245, 245, 245)'}} 
                        onClick = {() => selectState(style.name)}>
                            <h1 style={{color:"#777777", fontSize:"20px"}}>
                                {style.name}
                            </h1>
                        </button>
                    )
                })}
            </div>
            <div className="photos">
                <div className="AddPhoto wrapper">
                    <div className="icon">
                        <AddAPhotoOutlinedIcon  style={{ fontSize: '100px', color: 'grey' }}/>
                    </div>
                    <input type="file"/> 
                </div>
                <div className="GeneratePhoto">
                    <div className="icon">
                        <SentimentSatisfiedAltOutlinedIcon  style={{ fontSize: '100px', color: 'grey' }}/>
                    </div>
                </div>
            </div>
            <button className='submit'>
                <h1 style={{color:"white", fontSize:"20px"}}>
                    Submit
                </h1>
            </button>
        </div>
    )
}

export default NewPhoto