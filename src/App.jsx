import ProfileCard from './components/ProfileCard.jsx';
import React from 'react';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';
import './App.css'


const shiruProfileData = {
  name: "Shiru",
  title: "Full Stack Developer",
  imageUrl: "/src/assets/cas.png",
  socials: [
    { id: "github", url: "#", icon: "Github"},
    { id: "tiktok", url: "#", icon: "Tiktok" },
    { id: "instagram", url: "#", icon: "Instagram" },
  ],

  techStack: [
   "React", ".NET", "C#", "D365", "Power Platform"
  ],
  hobbies: {
    title: "Hobby",
    text: "Proud cosplayer! Going to cosplay as Vivian Banshee at the upcoming Comic Fiesta 2025."
  },
  games: {
    title: "Currently Playing",
    list: ["Honkai: Star Rail", "Genshin Impact", "Zenless Zone Zero"]
  }
};

function App(){
  return (
   

    <div className = "app-container">
       <ShaderGradientCanvas
      style = {{ position: 'absolute', 
      minHeight: '100vh',
      width: '100vw',
      inset: '0',
      zIndex: '-1',
      }}
      pointerEvents='none'
      >
      <ShaderGradient
        control='query'
        urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.5&cAzimuthAngle=250&cDistance=1.5&cPolarAngle=140&cameraZoom=12.5&color1=%23809bd6&color2=%23910aff&color3=%23af38ff&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.5&rotationX=0&rotationY=0&rotationZ=140&shader=defaults&type=sphere&uAmplitude=7&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.4&uTime=0&wireframe=false'/>
        </ShaderGradientCanvas>
        <ProfileCard data = {shiruProfileData}/>
      <div className='greetings-container'>
      <h1 className='greetings-title'> 
        Shiru's Profile
        <p className='greetings-subtitle'>
        Hi there! I'm Shiru, a passionate Full Stack Developer with a knack for creating dynamic and responsive web applications. Explore my profile to learn more about my skills and projects.
      </p>
      </h1>
      </div>
    
    
    </div>
  )
}

export default App;