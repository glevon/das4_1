import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom"
import Home from './components/Home'
import Stars from './components/Stars'
import Star from './components/Star'

class App extends Component {
constructor(props) {
  super(props)

  this.state = {
     stars:[
       {
         id:1,
         name:"Nikol",
         photos:["/images/1_1.jpg","/images/1_2.jpg","/images/1_3.jpg"],
       },
       {
        id:2,
        name:"Hayko",
        photos:["/images/2_1.jpg","/images/2_2.jpg","/images/2_3.jpg"],
      },
      {
        id:3,
        name:"Garik",
        photos:["/images/3_1.jpg","/images/3_2.jpg","/images/3_3.jpg"],
      },
      {
        id:4,
        name:"Ashot",
        photos:["/images/4_1.jpg","/images/4_2.jpg","/images/4_3.jpg"],
      },


     ]
  }
}

  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/stars/all">Stars</Link>
          </li>
        </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/stars/all" exact render={(props)=>(<Stars data={this.state.stars}/>)} />
          <Route path="/stars/:id"  render={(props)=>(<Star {...props} data={this.state.stars}/>)}  />
        </Switch>
    </Router>
    )
  }
}

export default App
