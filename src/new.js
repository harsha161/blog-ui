import React from 'react'
class Registration extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            email:'',
            bio:'',
            gender:{male:false,female:false},
            dob:new Date().toISOString().slice(0,10),
            profession:''
            
        }
        
    }
    nameHandle=(e)=>{
        const n=e.target.value
        this.setState((prevState)=>{
            return{
                name:n
            }
        })
    }
    emailHandle=(e)=>{
        const em=e.target.value
        this.setState((prevState)=>{
            return{
                email:em
            }
        })
    }
    bioHandle=(e)=>{
        const b=e.target.value
        this.setState((prevState)=>{
            return{
                bio:b
            }
        })
    }
    genderHandle=(e)=>{
        const g=e.target.name
        this.setState((prevState)=>{
            if(g==="male"){
                prevState.gender.male=true
            }
            else{
                prevState.gender.male=true
            }
            
            return{
               gender:prevState.gender
            }
        })
    }
    dobHandle=(e)=>{
        const db=e.target.value
        console.log(db)
        this.setState((prevState)=>{
            return{
                dob:db
            }
        })
    }
    professionHandle=(e)=>{
        const p=e.target.value
        this.setState((prevState)=>{
            return{
                profession:p
            }
        })
    }
    submitHandle=(e)=>{
        e.preventDefault()
        localStorage.setItem('FormInfo',JSON.stringify(this.state))
    }
    componentDidMount(){
       const obj= JSON.parse(localStorage.getItem('FormInfo'))
       if(obj!=null){
        this.setState(()=>{
            return{
                name:obj.name,
                email:obj.email,
                bio:obj.bio,
                gender:obj.gender,
                dob:obj.dob,
                profession:obj.profession
            }
        })
    }
    }
    render(){
        const st={
            
                width: '300px',
                border: '10px solid black',
                padding: '50px',
                margin: '20px'
              
        }
        return(
            <div style = {st}>
                <h1>Registration Form</h1>
                <form onSubmit={this.submitHandle}>
                    <label> Name: 
                        <input type="text" required value={this.state.name} onChange={this.nameHandle}/>

                    </label>
                    <br/>
                    <br/>
                    <label> Email:
                        <input type="email" required value ={this.state.email} onChange={this.emailHandle}/>
                    </label>
                    <br/><br/>
                    <label> Bio:
                        <br/>
                        <textarea value={this.state.bio} onChange={this.bioHandle}></textarea>
                    </label>
                    <br/><br/>
                    <label>Gender:
                        <input type="radio"  name="male" value={this.state.gender.male} onClick={this.genderHandle}/>Male 
                        <input type="radio"  name="female" value={this.state.gender.female} onClick={this.genderHandle}/>Female
                    </label>
                    <br/><br/>
                    <label>DOB: 
                        <input type="date" name="Dob" value={this.state.dob} onChange={this.dobHandle} />
                    </label>
                    <br/><br/>
                    <label>Profession:
                        <select value={this.state.profession} onChange={this.professionHandle}>
                            <option value="Select">Select</option>
                            <option value="Software Engineer">Software Engineer</option>
                            <option value="Electronics Engineer">Electronics Engineer</option>
                            <option value="Mechanical Engineer">Mechanical Engineer</option>
                            <option value="Architect">Architect</option>
                        </select>

                    </label>
                    <br/><br/>
                    <label>
                        <input type="Submit"/>
                    </label>
                </form>
            </div>
        )
    }
}
export default Registration