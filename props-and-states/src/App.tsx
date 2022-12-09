import { useState } from 'react';
import './App.css'

const ContactItem = ({name, imageLink, notifyParent}: ContactItemProps) => {
  return <li onClick={()=>{
    notifyParent({name, imageLink});
  }} className='contact-item'>
    <img src={imageLink} alt="" />
    <div className='contact-desc'>
      <h1>{name}</h1>
      <span>https://forms.gle/c2GGGntAN9YmnwNv8</span>
    </div>
  </li>
}

type ContactType = {
  name: string,
  imageLink: string
}



type ContactItemProps = {
  name: string,
  imageLink: string
  notifyParent: (contact: {name: string, imageLink: string} )=>void
}

type ListOfContactProps = {
  contactList: ContactType[],
  notifyParent: (contact: ContactType)=>void
} 

const ListOfContactComponent = ({contactList, notifyParent}: ListOfContactProps) => {

  

  const contactItems = contactList.map(item=>{
    return <ContactItem notifyParent={notifyParent} name={item.name} imageLink={item.imageLink} />
  });
  
  return <aside className='contact-list'>
    <ul>
      {contactItems}
      
    </ul>

  </aside>
}
type ChatSpaceType = {
  contact?: ContactType
}
const ChatSpace = ({contact}: ChatSpaceType) => {
  return <section className='chats'>
    {
      contact ? <div>
        <img width="40" src={contact.imageLink} alt="" />
        <span>{contact.name}</span>
        
      </div>
      : <div>Chats</div>
    }
  </section>
}

function App() {
  const [currentChat, setCurrentChat] = useState<ContactType>();
  const contactListData = [
    {
      "name": "Rachel MUTONI",
      "imageLink": "https://pps.whatsapp.net/v/t61.24694-24/311442103_5511263055638676_5658167728318885884_n.jpg?ccb=11-4&oh=01_AdQjErTsjApZyBkczWftLZMezn9e_1fYbYgu46QMJw1xCA&oe=63A01F75"
    },
    {
      "name": "Nodes js  and React group",
      "imageLink": "https://pps.whatsapp.net/v/t61.24694-24/308463879_1337173040020578_2356834727661777236_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRzEPMmEGrWgFPBkNZrNBF_WRYLMDIAw1CAHg0mUCy8sg&oe=63A016FB"
    }
  ];
  const notifyMe = (contact: ContactType) => {
    setCurrentChat(contact);
  }
  return <>
  <ListOfContactComponent notifyParent={notifyMe} contactList={contactListData}/>
  <ChatSpace contact={currentChat}  />
  </>
}

export default App
