import { useState } from "react"

const initialFormValues ={
    name: 'Name',
    email: 'Email@email.com',
    message: 'Message'
}

const checkEmail = (email) => {
    return /.+@.+\.[A-Za-z]+$/.test(email)
}

export default function Form(){
    const [formData, setFormData] = useState(initialFormValues)

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    return(
        <section className="formContainer">
        <h1>Contact Me</h1>
        <p>Feel free to reach out to me with any questions through the form below!</p>
            <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="c1c509eb-e75b-4a6c-8e7a-9241f9c9ae85"/>
                <input type="hidden" name="subject" value="New Submission from Portfolio Contact Me" />
                <input type="text" name="name" placeholder="Name" required onChange={handleInputChange}/>
                    {!formData.name && (<p>Name Required</p>)}
                <input type="text" name="email" placeholder="Email" required onChange={handleInputChange}/>
                    {!formData.email && (<p>Email Required</p>)}
                    {!checkEmail(formData.email) && (<p>Please enter a valid email</p>)}
                <textarea type="textarea" name="message" placeholder="Enter your Message" rows="3" required onChange={handleInputChange}></textarea>
                    {!formData.message && (<p>Message Required</p>)}
                <button type="submit">Submit</button>
            </form>
        </section>
        
    )
}