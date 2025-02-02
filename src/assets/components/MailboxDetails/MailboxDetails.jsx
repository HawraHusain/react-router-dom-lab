import { useParams } from "react-router";

const MailboxDetails =()=>{

const { mailboxId } = useParams();
const selectedBox = props.mailboxes.find((mailbox) => (
   mailbox._id === Number(mailboxId)
));
return (
    <>
    <h1>Mailbox Details</h1>
    <h3>{mailboxId}</h3>
    <dl>
        <dt>boxSize:</dt>
        <dd>{selectedBox.boxSize}</dd>
        <dt>boxOwner:</dt>
        <dd>{selectedBox.boxOwner}</dd>
    </dl>
    </>
)
}

export default MailboxDetails;