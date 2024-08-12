import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title,setTitle]=useState("");
    const [body,setBody]=useState("");
    const [author,setAuthor]=useState("Beginner");
    const [isPending,setIsPending]=useState(false);
    const [error,seterror]=useState(null);
    const navigate =useNavigate();

    const HandleSubmit=(e)=>{
        e.preventDefault();
        setIsPending(true);
        const blog ={title,body,author};
        fetch('http://localhost:8000/blogs', {
            method : "POST",
            headers: {"content-Type":"application/json"},
            body : JSON.stringify(blog)
        }).then(()=>{
            setIsPending(false);
            navigate('/');
        }).catch((e)=>{
            setIsPending(false);
            seterror(e.message);
        }
        )
        
    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={HandleSubmit}>
                <label >Blog title:</label>
                <input 
                    type="text"
                    required 
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                 />
                <label >Blog Body:</label>
                <textarea
                 required 
                 value={body}
                  onChange={(e)=>setBody(e.target.value)} >
                </textarea>
                <label >Blog author:</label>
                <select
                value={author}
                onChange={(e)=> setAuthor(e.target.value)} >
                    <option value="Professional">Professional</option>
                    <option value="Hustler">Hustler</option>
                    <option value="Beginner">Beginner</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog....</button>}
            </form>
            {error && <div>{ error }</div>}
        </div>
     );
}
export default Create;