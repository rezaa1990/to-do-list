import React, { Component, createRef } from 'react';

class Edit extends Component {
    constructor(props){
    super(props)
    this.titleRef= React.createRef();
    this.descRef = React.createRef();
    }

    render() { 
        console.log(this.props.id)
        return (
            <div className="input-group mb-3">
            <span className="input-group-text">edit task</span>
            <input type="text" className="form-control" placeholder="title" ref={this.titleRef}></input>
            <input type="text" className="form-control" placeholder="description" ref={this.descRef}></input>
            <button className='ms-auto btn btn-outline-info btn-sm mx-2' onClick={()=>{this.handleEdit(this.props.id)}}>edit</button>
        </div>
        );
    }
    handleEdit = (id) =>{
        console.log('reft',this.titleRef.current.value,this.descRef.current.value)
        console.log('id',this.props.id)
    }

}
 
export default Edit;