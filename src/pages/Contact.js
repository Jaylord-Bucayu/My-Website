import Input from "../components/Input";
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import SuccessMsg from "../components/SuccessMsg";
const Contact = () => {
const form = useRef();
const [alert,setAlert] = useState(false);
const [sendLoad,setLoading] = useState('SEND');

const [inputs,setInputs] = useState({fname:"",lname:"",email:"",message:""});

const sendEmail = (e) => {
    e.preventDefault();
    setLoading('SENDING....');
    emailjs.sendForm('service_bxzfifx', 'template_3vv21yo', form.current, 'user_XRRYplSz4Roy5WGD2dTmu')
      .then((result) => {
          console.log(result.text);
      
          for(let i = 0; i < form.current.length; i++){

         
              form.current[i].value = '';
          }
            setAlert(true);
            setLoading('SEND');
            setTimeout(() => {
                setAlert(false);
               
            } , 3000);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div className="contact">
           {alert ? <SuccessMsg/> : null } 
            <div className="contact-details">

                <h2>Have something on mind ??</h2>
                <p>Please share it with me <span>jaylordbucayu@gmail.com</span></p>

                <form onSubmit={sendEmail} ref={form}>
                <div className="contact-form">
                    
                        <div className="contact-form-names">
                        <Input type={'text'} placeholder={'First Name'} name={"from_fname"}/>
                        <Input type={'text'} placeholder={'Last Name'} name={"from_lname"}/>
                                

                        </div>

                    <Input type={'email'} placeholder={'Email'} name={"from_email"}/>
                    <Input type={'text'} placeholder={'Tell me briefly about the project'} name={"from_message"}/>
                   
                   <button className="contact-form-btn" type="submit">{sendLoad}</button>

                 
                </div>
                </form>
                <p><a style={{textDecoration: 'none',color: 'black'}} href="https://github.com/Jaylord-Bucayu/">https://github.com/Jaylord-Bucayu</a></p>
            </div>


            <div className="contact-state">
                
                <span>"</span>
                    <p> 
                    
                    I love doing projects with people 
that same interest as mine.  So what are you waiting for let's bring it on ! “ 
                    </p>
                    <svg width="137" height="11" viewBox="0 0 137 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 4.50011C9.5 2.00011 16 -0.999885 23 1.00011C30 3.00011 36 6.5 38 7.5C40 8.5 47.5 12 53.5 7.5C59.5 3 66.5 1.50023 72.5 4.50011C78.5 7.5 76.5 10.5 98.5 10.5C116.1 10.5 131.5 10.5 137 10.5" stroke="black" stroke-width="0.5"/>
</svg>



            </div>
            </div>
    )
}
export default Contact;