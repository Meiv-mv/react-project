export default function ContactSection() {
    return (
        <form className="row g-3" action="/email-contact" method="POST" id="contact-form">
            <div className="col-12">
                <h2 id="contact-section">Contattami</h2>
            </div>
            <div className="col-8 form-floating">
                <input className="form-control" type="email" name="email" id="email" placeholder="email@example.com" required/>
                <label htmlFor="email" className="floating-label" style={{color: "rgb(33, 37, 41)"}}>Email</label>
            </div>
            <div className="col-8 form-floating">
                <input className="form-control" type="text" name="subject" id="subject" placeholder="Oggetto Email" required/>
                <label htmlFor="subject" className="floating-label" style={{color: "rgb(33, 37, 41)"}}>Oggetto Email</label>
            </div>
            <div className="col-10">
                <textarea className="form-control" name="message" id="message" cols={30} rows={10} style={{resize: "none"}} placeholder="Scrivi qui..." required></textarea>
            </div>
            <div className="col-10 d-flex justify-content-center">
                <button type="submit" className="btn btn-outline-info mb-2">Invia</button>
            </div>
        </form>
    )
}