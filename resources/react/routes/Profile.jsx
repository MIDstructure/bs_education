import React from 'react';
import { SideBar } from "../includes";

import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";
import axios from "axios";




const Dashboard = ({user}) => {
  return (
    <div className="row">
      <div className="col-md-3 border-right">
        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
          <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
          <span className="font-weight-bold">{user.name}</span></div>
      </div>
      <div className="col-md-5 border-right">
        <div className="p-3 py-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="text-right">Настройки профиля</h4>
          </div>
          <div className="row mt-2">
            <div className="col-md-6"><label className="labels">Имя</label><input type="text" className="form-control" value={user.name}  /></div>
            <div className="col-md-6"><label className="labels">Фамилия</label><input type="text" className="form-control"  /></div>
            <div className="col-md-12"><label className="my-2 labels">ID пользователя</label><input type="text" className="form-control"  /></div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12"><label className="my-2 labels">Почта</label><input type="text" className="form-control" value={user.email} /></div>
            <div className="col-md-12"><label className="my-2 labels">Телефон</label><input type="text" className="form-control" /></div>
            <div className="col-md-12"><label className="my-2 labels">Город</label><input type="text" className="form-control" /></div>
          </div>
          <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Сохранить изменения</button></div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="p-3 py-5">
          <div className="d-flex justify-content-between align-items-center experience"><span>Допольнительно</span><span className="border px-3 p-1 add-experience">
            <i className="fa fa-plus" />&nbsp;Сертификаты</span></div><br />
          <div className="col-md-12"><label className="labels">Experience in Designing</label><input type="text" className="form-control" placeholder="experience" /></div> <br />
          <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="additional details" /></div>
        </div>
      </div>
    </div>

  )
}
const MyAds = e => {
  return (
    <Row xs={1} lg={3}>
      {Array(6).fill(1).map((e, index) => {
        return (
          <Card key={index} className="col-sm my-2 mx-4" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://wallpaperaccess.com/full/1285952.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        )
      })}
    </Row>
  )
}
const Something = e => {
  return (
    <div>
      Something
    </div>
  )
}
const Zxc = e => {
  return (
    <div>
      Zxc
    </div>
  )
}

function Profile() {

  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    axios.get("api/user")
    .then(e => {
      setUser(e.data)
    })
  
    return () => {
      setUser({})
    };
  }, []);
  

  const [current, setCurrent] = React.useState(1)

  return (
    <div className="profile">
      <div className="container">
        <div className="profile_inner d-flex">
          <SideBar setCurrent={setCurrent} current={current} />
          <div className="profile_content">
            {current == 1 && <Dashboard user={user} />}
            {current == 2 && <MyAds/>}
            {current == 3 && <Something/>}
            {current == 4 && <Zxc/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
