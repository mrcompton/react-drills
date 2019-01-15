import React, { Component } from 'react'

class Login extends Component {
    constructor(){
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsername(val){
        this.setState({username : val})
      }
    
      handlePassword(val){
        this.setState({password : val})
      }
    
      handleAlert(username,password){
        window.alert(`Username: ${username} Password: ${password}`)
      }

    render(){
        return(
            <div>
                <input onChange={(e) => this.handleUsername(e.target.value)}/>
                <input onChange={(e) => this.handlePassword(e.target.value)}/>
                <button onClick={() => this.handleAlert(this.state.username,this.state.password)}>Login</button>
            </div>
        )
    }
}

export default Login