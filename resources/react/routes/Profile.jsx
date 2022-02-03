import React, {useState} from 'react';
import { SideBar } from "../includes";






function Profile() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="profile">

    </div>
  )
}

export default Profile;
