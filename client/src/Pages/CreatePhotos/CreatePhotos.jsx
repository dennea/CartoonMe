import React from 'react'
import './CreatePhotos.css'
import ButtonAppBar from '../../Components/ButtonAppBar'
import NewPhoto from '../../Components/NewPhoto/NewPhoto'


const CreatePhotos = () => {
    return (
        <div className = "CreatePhotos">
            <ButtonAppBar/>
            <NewPhoto />
        </div>
    )
}

export default CreatePhotos