import React, { Component } from 'react'
import {Link} from "react-router-dom"


export class Stars extends Component {
    render() {
        return (
            <div>
                {
                    this.props.data.map((a,i) => {
                        return(
                        <div key={i}>
                            <img className="img-thumbnail" src={a.photos[0]} alt="a.name" style={{height:"200px", width:"180px"}}/>
                            <Link to={`/stars/${a.id}`} ><h4>{a.name}</h4></Link>
                        </div>
                        )
                    }
                    
                   )
                }
            </div>
        )
    }
}

export default Stars
