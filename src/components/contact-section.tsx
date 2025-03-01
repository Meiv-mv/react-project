import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
    const form = useRef<HTMLFormElement>(null);
    const emailInput = useRef<HTMLInputElement>(null);
    const subjectInput = useRef<HTMLInputElement>(null);
    const messageInput = useRef<HTMLTextAreaElement>(null);

    function resetForm() {
        if (emailInput.current?.value && subjectInput.current?.value && messageInput.current?.value) {
            emailInput.current.value = ""
            subjectInput.current.value = ""
            messageInput.current.value = ""
        }
    }

    function handleSubmit(e: any) {
        e.preventDefault()

        if (form.current) {
            emailjs.sendForm(
                process.env.REACT_APP_SERVICE_ID as string,
                process.env.REACT_APP_TEMPLATE_ID as string,
                form.current,
                process.env.REACT_APP_PUBLIC_KEY as string
            ).then(() => {
                alert("Messaggio inviato correttamente!")
                resetForm()
            }, (err) => {
                alert("Errore durante l'invio della messaggio: " + err)
            })
        }
    }

    return (
        <form className="row g-3" action="/email-contact" method="POST" id="contact-form" ref={form} onSubmit={handleSubmit}>
            <div className="col-12">
                <h2 id="contact-section">Contattami</h2>
            </div>
            <div className="col-8 form-floating">
                <input className="form-control" ref={emailInput} type="email" name="email" id="email" placeholder="email@example.com" required/>
                <label htmlFor="email" className="floating-label" style={{color: "rgb(33, 37, 41)"}}>Email</label>
            </div>
            <div className="col-8 form-floating">
                <input className="form-control" ref={subjectInput} type="text" name="subject" id="subject" placeholder="Oggetto Email" required/>
                <label htmlFor="subject" className="floating-label" style={{color: "rgb(33, 37, 41)"}}>Oggetto Email</label>
            </div>
            <div className="col-10">
                <textarea className="form-control" ref={messageInput} name="message" id="message" cols={30} rows={10} style={{resize: "none"}} placeholder="Scrivi qui..." required></textarea>
            </div>
            <div className="col-10 d-flex justify-content-center">
                <button type="submit" className="btn btn-outline-info mb-2">Invia</button>
            </div>
        </form>
    )
}