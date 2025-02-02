  import { Link } from "react-router";

const MailboxList = ({ mailboxes }) => {
    return (
      <>
      <h1>Mailbox List</h1>
      <ul>
        {mailboxes.map((mailbox) => (
          <li key={mailbox._id}>
            <Link to={`/mailboxes/${mailbox._id}`}>
             <p>Mailbox {mailbox._id}</p>
            </Link>
          </li>
        ))}
        </ul>
        </>
    );
  };
  export default MailboxList;
