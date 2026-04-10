import React,{useEffect,useState} from 'react';
import axios from "axios";
import {useSearchParams} from "react-router-dom";

// TODO: Import any API functions you need from '../../api/client'
// Example: import { get, post } from '../../api/client';

function QuestionComponent() {
  const [tasks,setTasks]=useState([]);
  const [searchParams,setSearchParams]=useSearchParams();
  const keyword=searchParams.get("search")||"";
  const [search,setSearch]=useState(keyword);
  const fetchTasks=async(searchKeyword)=>{
    try{
      const res=await axios.get(`/api/tasks?search=${searchKeyword}`);
      setTasks(res.data);

    }catch(err){
      console.error(err);
    }
  };
  useEffect(()=>{
    fetchTasks(keyword);
  },[keyword]);
  const handleSearch=(e)=>{
    e.preventDefault();
    setSearchParams({search});

  };
  // TODO: Define state variables needed for your question set
  

  // TODO: Implement data fetching inside a useEffect hook
  

  // TODO: Implement any event handlers required by your question set
  

  return (
    <div style={{padding:"20px"}}>
      <h2>Task Search</h2>
      <form onSubmit={handleSearch}>
        <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
        <button type="submit">Search</button>

      </form>
      <ul>
        {tasks.length>0 ?(
          tasks.map((task)=>(
            <li key={task._id}>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <p>Status:{task.status}</p>
            </li>
          ))
        ):(
          <p>No tasks found</p>
        )}
    
      </ul>
    </div>
  );
}

export default QuestionComponent;
