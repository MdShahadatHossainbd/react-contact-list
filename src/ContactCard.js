import React,{ useState } from 'react'

const ContactCard = (props) => {
    const [showAge, setshowAge] = useState(false);
    return (
        <div className="contact-card">
        <img src={props.avatarUrl}
        alt="profile"></img>
        <div className="user-details">
          <p>Name: {props.name}</p>
          <p>Email: {props.email}</p>
          <button onClick={() => setshowAge(!showAge)}>Show age</button>
          {showAge && <p>Age: {props.age}</p> }
        </div>
      </div>
    )
}

export default ContactCard
