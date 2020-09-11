import React, { Component } from 'react';
import axios from 'axios';
import DocumentService from './DocumentService';

class EditDocument extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      first_name:'',
      last_name:'',
      email: '',
      phone: '',
      address: '',
      description: ''
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/customers/?id='+this.props.match.params.id)
    .then(response => {
      this.setState({
        document_title: response.data.document_title,
        desc: response.data.desc,
        publisher: response.data.publisher
      });
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  handleChange= (e)=> {
    this.setState({[e.target.name]:e.target.value});
  }

  editDoc=()=>{
    console.log(this.props.match.params.id,'--id')
    DocumentService.postApi('',{first_name:this.state.first_name,last_name:this.state.last_name,email:this.state.email,id:this.props.match.params.id})
    .then(json => {
      console.log(json,'response on edit request!!!!!');
      if(json.data.statusCode===200){
        alert('Record updated successfully!!')
        this.props.history.push('/index')
      }
      else{
        alert('something went wrong!!');
        this.props.history.push('/index')
      }
    }).catch((error)=>{
      console.log("error-----------",error)
    })
  }

  render() {
    return (

      <div>
      <h2 className="text-center">Add Document Form</h2>
      <div className="row justify-content-md-center">
      <div className="col-md-6 col-md-offset-3">
      <form>
      <div className="form-group">
      <label>First name:</label>
      <input name="document_title" type="text" className="form-control" onChange={this.handleChange} value={this.state.first_name}></input>
      </div>

      <div className="form-group">
      <label>Last name:</label>
      <input name="desc" type="text" className="form-control" onChange={this.handleChange} value={this.state.last_name}></input>
      </div>

      <div className="form-group">
      <label>Email:</label>
      <input name="publisher" type="text" className="form-control" onChange={this.handleChange} value={this.state.email}></input>
      </div>
      <div className="form-group">
      <label>Phone:</label>
      <input name="document_title" type="number" className="form-control" onChange={this.handleChange} value={this.state.phone}></input>
      </div>

      <div className="form-group">
      <label>Address:</label>
      <input name="desc" type="text" className="form-control" onChange={this.handleChange} value={this.state.address}></input>
      </div>

      <div className="form-group">
      <label>Description:</label>
      <input name="publisher" type="text" className="form-control" onChange={this.handleChange} value={this.state.description}></input>
      </div>
      <button type="button" onClick={this.editDoc} className="btn btn-primary">Submit</button>
      </form>
      </div>
      </div>
      </div>

    );
  }
}

export default EditDocument;
