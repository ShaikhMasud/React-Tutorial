import Bloglist from "./bloglist";
import useFetch from "./usefetch";


const Home = () => {
    // const Click=(e)=>{
    //     console.log("hello"+e);
    // }
    // const Clickagain=(name,e)=>{
    //     console.log("hello"+name+e.target);
    // }
    // const [name,setname] =useState("Masud");
    // const [age,setage]=useState(19);
    // const handleClick=()=>{
    //     setname("isteq");
    //     setage(20);
    // }
    // const handleDelete=(id)=>{
    //     const newBlogs=blogs.filter( blog=> blog.id!==id );
    //     setblog(newBlogs);
    // }
    // const [name,setname]=useState("Masud");
    // const [blogs,setblog]=useState(null);
    // const [isPending,setPending]=useState(true);
    // const [error,seterror]=useState(null);
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         fetch("http://localhost:8000/blogs")
    //         .then(res=>{
    //             console.log(res);
    //             if(!res.ok){
    //                 throw Error("Other Error");
    //             }
    //             return res.json();
    //         })
    //         .then((data)=>{
    //             setblog(data);
    //             setPending(false);
    //             seterror(null);
    //         })
    //         .catch((e)=>{
    //             setPending(false);
    //             seterror(e.message);
    //         })
    //     },1000);
    // },[]);
    const {data:blogs,isPending,error}=useFetch("http://localhost:8000/blogs");
    return ( 
        
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading..</div>}
            {blogs && <Bloglist blogs={blogs} title="All blogs" />}
            {/* <button onClick={()=> setname("Saif")}>change name</button>
            <p>{name}</p> */}
            {/* <Bloglist blogs={blogs.filter((blog)=>{ return blog.author ==='mario'} )} title="mario's blog" handleDelete={handleDelete}/> */}
            {/* <p>{name}</p>
            <p>{age}</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={Click}>Click me</button>
            <button onClick={(e) => Clickagain("mario",e)}>Click again</button> */}
        </div>
     );
}
export default Home;