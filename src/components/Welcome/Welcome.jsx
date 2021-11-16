import React from 'react'
import "./Welcome.css"
export const Welcome = () => {
    return (
        <div className="welcome-container">
            <div className="glass-container">
                <h1>¡Bienvenidos a BIENESTAR CON PRETTAN!</h1>
                <p>Somos una comunidad profesional dedicada a ver por tu bienestar y salud, haciéndote llegar una variedad de información
                    gratuita y productos de origen natural de calidad premium disponibles a través de <span><a href="https://www.amazon.com.mx/s?me=A6KPL46OPBDX8&marketplaceID=A1AM78C64UM0Y8" target="_blank">Amazon</a></span>
                </p>
            </div>
        </div>
    )
}