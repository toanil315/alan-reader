import React from 'react'

export default function IntroCard({title, description, command, bgColor}) {
  return (
    <div style={{color: 'white', backgroundColor: bgColor, padding: '25px', textAlign: 'center', borderRadius: '10px', margin: '0 15px', width: '300px', display: 'flex', flexFlow: 'column nowrap', justifyContent: 'space-between'}}>
        <h2 style={{fontSize: '28px', marginBottom: '30px'}}>{title}</h2>
        <p style={{fontSize: '18px', lineHeight: 1.5, marginBottom: '30px'}}>{description && description}</p>
        <div style={{fontSize: '18px', marginTop: 'auto'}}>
            <p>Try saying:</p>
            <p style={{fontStyle: 'italic', fontSize: '20px', marginTop: '5px'}}>{command}</p>
        </div>
    </div>
  )
}
