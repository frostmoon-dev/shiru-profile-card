// src/components/ProfileCard.jsx

import cas from "../assets/cas.png";

function ProfileCard(){
    return (
        <div className = "profile-card">
            <img
            src = {cas}
            alt = "Profile"
            className= "profile-image"
            />
            <h2> Shiru </h2>
            <p>  Full Stack Developer </p>
        </div>
    )
}

export default ProfileCard;