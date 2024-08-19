import { Link } from "react-router-dom";
import notfound from '../../assets/notfound.svg'
export default function NotFound(){
    return (
        <div className="container flex flex-col items-center justify-center absolute  h-full w-full left-0 top-0">
            <img src={notfound} alt=""/>
            <h1 className="text-6xl mt-5 font-bold text-gray-900">Page Not Found</h1>
            <Link to='./'>Back to Home Page</Link>
        </div>
    )
}