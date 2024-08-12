import { Link } from "react-router-dom";
const Notfound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The page cannot be not found</p>
            <Link to="/">Back to the Homepage...</Link>
        </div>
     );
}
 
export default Notfound;