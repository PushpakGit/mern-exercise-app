import React from 'react';
import axios from 'axios';
import Navbar from './navbar'
import { Link } from 'react-router-dom';
import { API_URL } from '../constant';


export default class ExerciseList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            exerciseList:[]
        }
    }

    deleteExercise = (id) =>{
        axios.delete(`${API_URL}/exercise/${id}`)
        .then(res =>{
            if(res.status ===200){
                alert(res.data);
                let list = this.state.exerciseList.filter(rec => rec._id !== id);
                this.setState({exerciseList:list})
            }
        }).catch(err => console.log(err));
    } 

    getExerciseLogTable = () =>{
        if(this.state.exerciseList.length){
            return this.state.exerciseList.map(rec => {
                return <tr key={rec.username} >
                    <td>{rec.username}</td>
                    <td>{rec.description}</td>
                    <td>{rec.duration}</td>
                    <td>{rec.date}</td>    
                    <td>
                        <Link to={`/edit/${rec._id}`}><span>Edit </span></Link>|
                        <span onClick={()=>{ this.deleteExercise(rec._id) }} style={{cursor:"pointer"}}> Delete</span>
                    </td>
                </tr>
            })
        }
    }

    componentDidMount(){
        axios.get(`${API_URL}/exercise`).then(res=>{
            if(res.status === 200){
                this.setState({exerciseList:res.data})
            }
        })
    }

    render(){
        return <div>
            <Navbar />
            <h2>Exercise List</h2>
            <table className="table table-stripped table-bordered">
            <thead>
                <tr>
                    <th>User</th><th>Description</th><th>Duration</th><th>Date</th><th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                this.getExerciseLogTable()
            }
            </tbody>
            </table>
            
        </div>
    }
}