import { useParams } from "react-router";

const MailboxDetails =(props)=>{

const { mailboxId } = useParams();
const selectedBox = props.mailboxes.find((mailbox) => (
   mailbox._id === Number(mailboxId)
));
return (
    <>
    <h1>Mailbox {mailboxId}</h1>
    <h3>Details</h3>
    <dl className="mail-box">
        <dt>Boxholder</dt>
        <dd>{selectedBox.boxOwner}</dd>
        <dt>Box Size:</dt>
        <dd>{selectedBox.boxSize}</dd>
    </dl>
    </>
)
}

export default MailboxDetails;