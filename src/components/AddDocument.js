import React from 'react';
import DocumentService from './DocumentService';

class AddDocument extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      first_name:'',
      last_name:'',
      email:'',
      phone:'',
      address:'',
      description:''
    }
  }

  addDoc=()=>{
    DocumentService.postApi('',{document_title:this.state.document_title,desc:this.state.desc,publisher:this.state.publisher})
    .then(json => {
      if(json.data.statusCode===200){
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

  handleChange= (e)=> {
    this.setState({[e.target.name]:e.target.value});
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
      <button type="button" onClick={this.addDoc} className="btn btn-primary">Submit</button>
      </form>
      </div>
      </div>
      </div>
    );
  }

}

export default AddDocument;
