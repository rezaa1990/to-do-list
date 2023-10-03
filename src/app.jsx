import React, { Component } from 'react';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.inputRefAdd = React.createRef();
        this.inputRefSearch = React.createRef();
    }

    state={
        tasks:[
            {id:1, task:'make my bed'},
            {id:2, task:'going to the gym'},
            {id:3, task:'do homeworks'}
        ]
    }

    render() { 
        return (
            <div className="w-50 mx-auto my-5">
                <div className="d-flex justify-content-center my-3 bg-secondary">
                    <input placeholder="search" className='col-4' onChange={this.handleChange} ref={this.inputRefSearch}/>
                </div>

                {this.state.tasks.map((tsk,i)=>(
                                <div className='my-2 clearfix mx-auto bg-warning'>
                                    <div className='float-start'>{tsk.task}</div>
                                    <button className='btn btn-outline-danger float-end btn-sm mx-2' onClick={()=>{this.handleDelete(tsk.id)}}>Delete</button>
                                </div>
                ))}

                <div className="d-flex my-3 bg-secondary">
                    <input placeholder="write a new task" className='' ref={this.inputRefAdd}/>
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
        const inputValue = this.inputRefAdd.current.value;
        const newTask  = {id: this.state.tasks.length + 1 ,task: inputValue};
        this.setState({tasks:[...this.state.tasks, newTask]})
        this.inputRefAdd.current.value = '';
    }

    handleChange =()=>{
        const searchItem = this.inputRefSearch.current.value.toLowerCase();
        const searchResults = this.state.tasks.filter(tsk=>tsk.task.toLocaleLowerCase().includes(searchItem))
        console.log(searchResults)
        this.setState({tasks:searchResults})
    }
    
}
 
export default ToDoList;