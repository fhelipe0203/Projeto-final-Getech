import React  from "react";
import {Link} from "react-router-dom"



function Headermain(){
    return(
       <header>       
        <div>
            <div>   <div className="">    
                    <Link to="/user">
                        <button>talento</button>
                    </Link>
                    </div>
                    <div className="">
                        <Link to="/tecnicos">
                        <button>seja talento</button>
                        </Link>
                    </div>  
            </div>
        </div>
        
        </header>

    )
}

export default Headermain