import { useState } from "react"
import { Form } from "react-router"
import { useNavigate } from "react-router"

const initialState = [
    {boxSize: '',
    boxOwner: ''}
]
const MailboxForm = (props) => {
    const [formData, setFormData] = useState(initialState)
const navigate =useNavigate();
    const handelChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }
    const handelSubmit = (event) => {
        event.preventDefault()
        props.addBox(formData);//Add the data to list
        setFormData(initialState); //Clear data
        navigate('/mailboxes')
    }
    return (
        <>
            <h1>New Mailbox</h1>
            <form onSubmit={handelSubmit}>
                <label htmlFor="">Enter a Boxholder</label>
                <input type="text" name="Boxholder" value={formData.Boxholder} onChange={handelChange} />
                <label htmlFor="">Select a Box Size</label>
                <input type="text" name="Boxsize" value={formData.BoxSize} onChange={handelChange} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default MailboxForm;