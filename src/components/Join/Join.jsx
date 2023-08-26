import React, { useRef,useState } from "react";
import './Join.css'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2';

const Join = () => {

    const [inputValue, setInputValue] = useState('');
    const formRef = useRef(null)

    const sendEmail = async (e) => {
        e.preventDefault();
    
        // const formData = new FormData(formRef.current);
        // const data = Object.fromEntries(formData.entries());
        const data = {
            name: document.querySelector('input[name="name"]').value,
            email: document.querySelector('input[name="email"]').value,
            address: document.querySelector('input[name="address"]').value,
            number: document.querySelector('input[name="number"]').value,
            message: document.querySelector('textarea[name="message"]').value
        };
        console.log(data);
        const serverUrl = 'https://portfolio-personal-indol-omega.vercel.app';
        // const serverUrl = 'http://localhost:9000';

        try {
            const response = await fetch(`${serverUrl}/send-email`, {
                method:'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(data);
            if(response.ok){
                const alertSuccess = Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your message has been sent successfully',
                    showConfirmButton: false,
                    timer: 3000,
                  }).then(()=>{
                    formRef.current.reset();
                })
            }else{
                const alertError = Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Your message has not been sent',
                    showConfirmButton: false,
                    timer: 3000
                  }).then(()=>{
                    formRef.current.reset();
                  })
            }
    
        } catch (error) {
            console.log('Error', error); 
            const alertWentWrong = Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Something went wrong!',
                showConfirmButton: false,
                timer: 3000
            }).then(()=>{
                formRef.current.reset();
            })
        }
    }



    return(
        <div>

            <div className="join" id="join-us">
                <div className="left-j">
                    <hr />
                    <div>
                        <span className="stroke-text">LISTO PARA</span>
                        <span>SUBIR TU </span>    
                    </div>
                    <div>
                        <span> NIVEL</span>
                        <span className="stroke-text">CON NOSOTROS?</span>    
                    </div>
                </div>
         
            </div>
            <section id="contact" class="contact">
                <div class="main-text scroll-scale">
                    {/* <span className="stroke-text">Envia tus datos!</span> */}
                    {/* <h2 className=" contactar">Contactanos</h2> */}
                    <span className="stroke-text contacto-span" id="contact">CONTACTANOS</span>
                </div>

                <form ref={formRef}  id="contact-form" onSubmit={sendEmail} method="POST" class="scroll-bottom">
                    <input type="text" name="name" placeholder="Nombre" required></input>
                    <input type="email" name="email" placeholder="Email" required></input>
                    <input type="text" name="address" placeholder="Dirección" required></input>
                    <input type="number" name="number" placeholder="Número de contacto" required></input>
                    <textarea name="message" id="" cols="30" rows="10"  placeholder="Tú mensaje" required></textarea>
                    <div class="btn-box formBtn">
                        <button class="btn-contact" type="submit">Enviar Mensaje</button>
                    </div>
                </form>
            </section>   

        </div>
        
    )
} 
export default Join;