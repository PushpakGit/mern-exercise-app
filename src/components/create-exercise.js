import React from 'react';
import Navbar from "./navbar";
import axios from 'axios';
import { API_URL } from '../constant';

export default class CreateExercise extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            description:'',
            duration:0,
            date: new Date(),
            users:[]
        }
    }

    saveExercise = (exercise) =>{
        axios.post(`${API_URL}/exercise/add`,exercise).then(res=>{
            if(res.status == 200){
                alert(res.data);
                window.location = "/"
            }
        })
    }

    onFormSubmit = (e) =>{
        e.preventDefault()
        let exercise = {
            username:this.state.username,
            description:this.state.description.trim(),
            duration:this.state.duration,
            date:this.state.date
        }
        console.log("Obj",exercise)
        this.saveExercise(exercise);
    }

    onUserChange = (e) =>{
       this.setState({username:e.target.value})
    }

    onChangeHandler = (key,e) =>{
        this.setState({[key]:e.target.value});
    }

    componentDidMount(){
        axios.get(`${API_URL}/users`).then(users =>{
            if(users.data)
            this.setState({users:users.data, username: users.data[0].username})
        })
        
    }

    render(){
        return <div>
            <Navbar />
            <h2>Create Exercise</h2>
            <form onSubmit={(e)=> this.onFormSubmit(e) }>
                <div className="form-group">
                    <label>Username</label>
                    <select
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onUserChange}
                    > 
                    {
                        this.state.users.map(user => 
                        <option key={user.username} value={user.username}>{user.username}</option>)
                    }
                    </select>
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <input className="form-control" 
                    type="text"
                    value={this.state.description}
                    onChange={(e)=>this.onChangeHandler('description',e)}></input>
                </div>

                <div className="form-group">
                    <label>Duration</label>
                    <input className="form-control" 
                    value={this.state.duration}
                    type="number"
                    onChange={(e)=>this.onChangeHandler('duration',e)}></input>
                </div>

                <div className="form-group">
                    <label>Date</label>
                    <input className="form-control" 
                    value={this.state.date}
                    type="date"
                    onChange={(e)=>this.onChangeHandler('date',e)}></input>
                </div>

                <div className="form-group">
                    <input className="form-control btn btn-primary" 
                    type="submit"
                    value="Create Exercise Log" />
                </div>

            </form>
        </div>
    }
}