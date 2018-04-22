import React, { Component } from "react";
import { Table } from 'reactstrap';
import RosterTable from "../../components/Roster";
import EditModal from "../../components/Modal";
// import Button from "../../components/Button";
import { Col, Row, Container } from "../../components/Grid";

import API from "../../utils/API";

class FireRoster extends Component { 
 
  state = {
    fireFighters:[],
  
  };

  componentDidMount() {
    this.loadRoster()
  }
  
  loadRoster = () => {
    console.log("I'm triggered")
    API.getRoster()
   .then(res => this.setState({ fireFighters: res.data}))
   .catch(err => console.log(err));
  };

  deleteRecord = id => {
    console.log("I'm clicked to delete",id);
    API.deleteRecord(id)
      .then(res => this.loadRoster())
      .catch(err => console.log(err));
  };

  modifyRecord = (e,id) =>{
    let buttonValue = e.target.value
    if (buttonValue ==="delete") {
      this.deleteRecord(id);
    } else {
      this.EditModal.toggle();//React can't access the child component's methods
    } 

  }
  
 
    render() {

    return (
      <Container fluid>
        <Row>
          <Col size="md-9">
          <EditModal/>
      <Table>  
       <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Fire #</th>
            <th>Year</th>
            <th>Title</th>
            <th>Rank</th>
            <th>Station</th>
            <th>Company</th>
            <th>Admin</th>
          </tr>
        </thead>
       
        <tbody>
        {this.state.fireFighters.map(fireFighter =>( 
          
            <RosterTable
            key={fireFighter._id} 
            id={fireFighter._id} 
            firstName= {fireFighter.first_name}
            lastName = {fireFighter.last_name}  
            fireNumber={fireFighter.fire_number}   
            year={fireFighter.year_started}  
            title={fireFighter.title}  
            rank={fireFighter.rank}  
            station={fireFighter.station}  
            company={fireFighter.company}
            onClick={(e) => this.modifyRecord(e,fireFighter._id)}
            >
            </RosterTable>  
            
        
        ))}
        </tbody>
      </Table>
      </Col>
        </Row>
      </Container>
    )
  }
}

export default FireRoster;