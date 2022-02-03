import * as React from 'react';



function SideBar() {

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <div>
      sidebar 
    </div>
  )
}

export default SideBar;
