import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const submit = () => {
        if (name && email && phone && subject && message) {

            const serviceId = 'service_fbjsf3c';
            const templateId = 'template_3n1du9i';
            const userId = 'l0d9Veo2uTI_jCwL9';
            const templateParams = {
                name,
                email,
                phone,
                subject,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setPhone('');
            setSubject('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    return (
        <div id="contact-form" className="row contact-from">
            <div className="col-md-6">
                 <div className="input-form">
                     <i className="fa fa-user"></i>
                     <input  value={name} onChange={e => setName(e.target.value)} type="text" name="name" placeholder="Enter your name" />
                     {/* {errors.name && <span className="text-danger">Name is required</span>} */}
                 </div>
             </div>
             <div className="col-md-6">
                 <div className="input-form">
                     <i className="fa fa-envelope"></i>
                     <input  value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Enter your email" />
                     {/* {errors.email && <span className="text-danger">Email is required</span>} */}
                 </div>
             </div>
             <div className="col-md-6">
                 <div className="input-form">
                     <i className="fa fa-phone"></i>
                     <input  value={phone} onChange={e => setPhone(e.target.value)}type="text" name="phone" id="phone" placeholder="Phone number" />
                     {/* {errors.phone && <span className="text-danger">Phone Number is required</span>} */}
                 </div>
             </div>
             <div className="col-md-6">
                 <div className="input-form">
                     <i className="fa fa-pencil-alt"></i>
                     <input  value={subject} onChange={e => setSubject(e.target.value)} type="text" name="subject" id="subject" placeholder="Subject" />
                     {/* {errors.subject && <span className="text-danger">Subject is required</span>} */}
                 </div>
             </div>
             <div className="col-md-12">
                 <div className="input-form">
                     <i className="fa fa-edit"></i>
                     <textarea  value={message} onChange={e => setMessage(e.target.value)} name="message"  id="message" placeholder="Enter your message"></textarea>
                     {/* {errors.message && <span className="text-danger">Message is required</span>} */}
                 </div>
             </div>
             <div className="col-md-12 text-left">
                 <button className="quomodo-btn" type="submit" onClick={submit}>Send Message<i className="fa fa-long-arrow-right"></i></button>
             </div>


            <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
        </div>
    );
};

export default ContactForm;
