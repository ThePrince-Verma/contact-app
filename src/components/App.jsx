import React from "react";
import Card from "./Card"
import Avatar from "./Avatar"
import contacts from "../contacts"

function createCard(contact){
    return (
      <Card 
        key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
      />
    );
}

function App() {
  return (
    <div>
    <h1 className="heading">My Contacts</h1>
    <Avatar img ="https://media.licdn.com/dms/image/C4E03AQH0zIQKnWH4Nw/profile-displayphoto-shrink_800_800/0/1645965438156?e=2147483647&v=beta&t=n9peaJEDRywqkJ2yPCNU2i4uoS_6ifZcHIp5TPZ1UVY" />
  
      {contacts.map(createCard)}

  { /* <Card 
   name ="Katherine"
   img ="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
   tel="+6486845444"
   email="k@katherine.com"
    />
   <Card 
   name ="Jack Bauer"
   img ="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
   tel="+987 654 321"
   email="jack@nowhere.com"
    />
   <Card 
    name ="Chuck Norris"
      img= 
        "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      tel = "+918 372 574"
      email = "gmail@chucknorris.com"
    />
   <Card 
   name ="Beyonce"
   img ="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
   tel="+123 456 789"
   email="b@beyonce.com"
    />  */}

    </div>
  );
}

export default App;
