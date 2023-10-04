import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.inputRefTitle= React.createRef();
        this.inputRefDescription= React.createRef();
        this.inputRefSearch = React.createRef();
    }

    state={
        tasks:[
            {id:1, title:'make my bed',description: 'des1'},
            {id:2, title:'going to the gym' ,description: 'des2'},
            {id:3, title:'do homeworks' ,description: 'des3'}
        ]
    }

    render() {
        return (
            <div className="mx-auto my-5">
                <div className="d-flex justify-content-center my-3 bg-secondary">
                    <input placeholder="search" className='col-4' onChange={this.handleChange} ref={this.inputRefSearch}/>
                </div>

                {this.state.tasks.map((tsk,i)=>(
                                <div className='my-2 clearfix mx-auto bg-warning'>
                                    <div className='float-start'>{tsk.title}</div>
                                    <p  style={{ color: 'blue' }}>{tsk.date}</p>
                                    <p className='text-white'>{tsk.description}</p>
                                    <button className='btn btn-outline-primary'onClick={this.handleEdit}>Edit</button>
                                    <button className='btn btn-outline-danger float-end btn-sm mx-2' onClick={()=>{this.handleDelete(tsk.id)}}>Delete</button>
                                </div>
                ))}
                <div class="input-group mb-3">
                    <span class="input-group-text">Add new task</span>
                    <input type="text" class="form-control" placeholder="title" ref={this.inputRefTitle}></input>
                    <input type="text" class="form-control" placeholder="description" ref={this.inputRefDescription}></input>
                    <button className='ms-auto btn btn-outline-info btn-sm mx-2' onClick={this.handleAdd}>Add</button>
                </div>
            </div>
        );
    }
    
    handleDelete (id){
        const newTasks = this.state.tasks.filter(ts=>ts.id !== id);
        this.setState({tasks:newTasks})
    }

    handleAdd =()=>{
        const titleValue = this.inputRefTitle.current.value;
        const descriptionValue = this.inputRefDescription.current.value;
        const newTask  = {id: this.state.tasks.length + 1 ,title: titleValue,description: descriptionValue};
        this.setState({tasks:[...this.state.tasks, newTask]})
        this.inputRefTitle.current.value = '';
        this.inputRefDescription.current.value = '';
    }

    handleChange =()=>{
        const searchItem = this.inputRefSearch.current.value.toLowerCase();
        console.log(searchItem)
        const searchResults = this.state.tasks.filter(tsk=>tsk.title.toLocaleLowerCase().includes(searchItem))
        console.log(searchResults)
        this.setState({tasks:searchResults})
    }

    handleEdit = () => {
        
    }
    
}
 
export default ToDoList;