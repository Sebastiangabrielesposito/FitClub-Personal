import React from "react"
import './Reason.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'



const Reasons = () =>{
    return(
        <div className="reasons" id="reasons">
            <div className="left-r">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
            
            <div className="right-r">
                <span className="reasons-text-header-div">Algunas razones</span>
                <div className="reasons-text-header-div">
                    <span className="stroke-text reasons-text-header">Por qué</span>
                    <span className="reasons-text-header"> Elegirnos?</span>
                </div>

                <div className="details-r">
                    <div>
                        <img src={tick} alt=""></img>
                        <span>Contamos con 15+ años de experiencia </span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>ENTRENA DE MANERA MÁS INTELIGENTE Y RÁPIDA QUE ANTES</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>Dieta primer mes free para nuevos miembros</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>Entrenamientos personalizados y a medida</span>
                    </div>
                </div>
                {/* <span style={{
                    color : 'var(--gray)', fontWeight: 'normal'
                }}>Nuestros patrocinadores</span>
                <div className="partners">
                    <img src={nb} alt="" />
                    <img src={adidas} alt="" />
                    <img src={nike} alt="" />
                </div> */}
            </div>
        </div>
    )
}
export default Reasons