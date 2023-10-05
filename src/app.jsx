import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.inputRefTitle= React.createRef();
        this.inputRefDescription= React.createRef();
        this.inputRefSearch = React.createRef();
        this.editRefTitle= React.createRef();
        this.editRefDescription= React.createRef();
        this.dateRef = React.createRef();
    }

    state={
        tasks:[
            {id:1, title:'make my bed',description: 'dfi ioj oiej' , date:'Wed Oct 25 2023 00:00:00 GMT+0330 (Iran Standard Time)'},
            {id:2, title:'going to the gym' ,description: 'io t56 d ' , date:'Fri Dec 15 2023 00:00:00 GMT+0330 (Iran Standard Time)'},
            {id:3, title:'do homeworks' ,description: 'qwer qwr e 4g' , date:'Sun nov 25 2024 00:00:00 GMT+0330 (Iran Standard Time)'}
        ],

        selectedDate: null,
        id:null
    }

    render() {
        return (
            
            

            <div className="mx-auto my-5 w-50">     
                <div className="d-flex justify-content-center my-3 bg-secondary">
                    <input placeholder="search" className='col-4' onChange={this.handleSearch} ref={this.inputRefSearch}/>
                </div>

                {this.state.tasks.map((tsk,i)=>(
                                <div className='my-2 clearfix mx-auto bg-warning'>
                                    <div className=''>{tsk.id}</div>
                                    <div className='float-start'>{tsk.title}</div>
                                    <p className='text-white'>{tsk.description}</p>
                                    <div className=''>{tsk.date}</div>
                                <div className="input-group mb-3">
                                    
                                    
                                    <button className='ms-auto btn btn-outline-info btn-sm mx-2' onClick={() => this.handleEdit(tsk.id)}>Edit</button>
                                </div>
                                    <button className='btn btn-outline-danger float-end btn-sm' onClick={()=>{this.handleDelete(tsk.id)}}>Delete</button>
                                </div>
                ))}

                <div className="input-group mb-3">
                    <span className="input-group-text">Add new task</span>
                    <input type="text" className="form-control" placeholder="set title" ref={this.inputRefTitle}></input>
                    <input type="text" className="form-control" placeholder="set description" ref={this.inputRefDescription}></input>
                    <DatePicker
                    selected={this.state.selectedDate}
                    onChange={this.handleDateChange}
                    dateFormat="yyyy/MM/dd"
                    placeholderText="set a date"
                />
                    <button className='ms-auto btn btn-outline-info btn-sm mx-2' onClick={this.handleAdd}>Add</button>
                </div>

                <div>
                <span className="input-group-text">Edit task</span>
                <input type="text" className="form-control" placeholder="edit title" ref={this.editRefTitle}></input>
                <input type="text" className="form-control" placeholder="edit description" ref={this.editRefDescription}></input>
                <DatePicker
                    selected={this.state.selectedDate}
                    onChange={this.handleDateChange}
                    dateFormat="yyyy/MM/dd"
                    placeholderText="edit date"
                />
                <button className='ms-auto btn btn-outline-info btn-sm mx-2' onClick={this.saveChange}>Save changes</button>
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
        const date  = this.state.selectedDate.toString();
        const newTask  = {id: this.state.tasks.length + 1 ,title: titleValue,description: descriptionValue , date : date};
        this.setState({tasks:[...this.state.tasks, newTask]})
        this.inputRefTitle.current.value = '';
        this.inputRefDescription.current.value = '';
        this.state.selectedDate = null
    }

    handleSearch =()=>{
        const searchItem = this.inputRefSearch.current.value.toLowerCase();
        console.log(searchItem)
        const searchResults = this.state.tasks.filter(tsk=>tsk.title.toLocaleLowerCase().includes(searchItem))
        console.log(searchResults)
        this.setState({tasks:searchResults})
    }

    handleEdit = (id) => {
        console.log(id)
        this.setState({id:id})

   
    }

    handleDateChange = (date) => {
        console.log(date)
        this.setState({ selectedDate: date });
      };
    
      saveChange = ()=>{
        if(this.state.id == null){return}
        const newTasks = [...this.state.tasks];
        const indexToEdit = newTasks.findIndex(task => task.id === this.state.id);
        newTasks[indexToEdit].title = this.editRefTitle.current.value;
        newTasks[indexToEdit].description = this.editRefDescription.current.value;
        const date  = this.state.selectedDate.toString();
        newTasks[indexToEdit].date = date
        this.setState({ tasks: newTasks });
        this.editRefTitle.current.value = ''
        this.editRefDescription.current.value = ''
        this.state.selectedDate = null
      }
}
 
export default ToDoList;