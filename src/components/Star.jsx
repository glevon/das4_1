import React, { Component } from 'react'

class Star extends Component {
    render() {
        let id =this.props.match.params.id ;
        let item= this.props.data.find(a=>{
            return a.id==id
            
        })
        console.log(item);
        return (
            <div>
                {
                    item.photos.map((a,i)=>(
                        <img key={i} className="img-thumbnail" src={a} alt="i" style={{height:"200px", width:"180px"}}/>
                    ))
                }
                
            </div>
        )
    }
}

export default Star
