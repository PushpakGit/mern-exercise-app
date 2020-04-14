import React from 'react';
import Navbar from './navbar';
import axios from 'axios';
import { API_URL } from '../constant';

export default class CreateUser extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username:''
        }
    }

    createUser = () =>{
        axios.post(`${API_URL}/users/add`,{username:this.state.username})
        .then(res=>{
            console.log("res",res)
            if(res.status == 200){
                alert(res.data)
            }
        })
        .catch(err => console.log(err))
    }

    onFormSubmit = (e) =>{
        e.preventDefault()
        let userObj = {
            username:this.state.username.trim()
        }
        console.log("Obj",userObj);
        this.setState({username:''})
        this.createUser()
    }

    onChangeHandler = (key,e) =>{
        this.setState({[key]:e.target.value});
    }

    componentDidMount(){
    }

    render(){
        return <div>
            <Navbar />
            <h2>Create Exercise</h2>
            <form onSubmit={(e)=> this.onFormSubmit(e) }>
                

                <div className="form-group">
                    <label>Username</label>
                    <input className="form-control" 
                    type="text"
                    required
                    value={this.state.username}
                    onChange={(e)=>this.onChangeHandler('username',e)}></input>
                </div>

                <div className="form-group">
                    <input className="form-control btn btn-primary" 
                    type="submit"
                    value="Create User" />
                </div>

            </form>
        </div>
    }
}