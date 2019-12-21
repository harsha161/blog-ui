import React from 'react';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

class  Profile extends React.Component {
    constructor() {
        super()
        this.state = {
            name:'',
            bio:'',
            gender:'male',
            age: new Date(),
            profession: '',
            
        }
        
        this.handleName = this.handleName.bind(this)
        this.handleBio = this.handleBio.bind(this)
        this.handleOperation= this.handleOperation.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.handleProfession = this.handleProfession.bind(this)
        this.handleSubmit =this.handleSubmit.bind(this)
    }

    handleName(e){
        const name = e.target.value
        this.setState({name})
    }
    handleBio(e) {
        const bio = e.target.value
        this.setState({bio})
    }
                
    handleOperation(e) {
        const  gender=e.target.value
        this.setState({gender})
        
    }
    handleChange = (date)=> {
        this.setState({age: date})
    }
    handleProfession(e) {
        const profession = e.target.value
        if(profession !== 'selectProfession'){
            this.setState({profession});
        }
    }
    
    
    handleSubmit(e) {
        e.preventDefault()
        // const formsData= {
        //     name:this.state.name,
        //     bio:this.state.bio,
        //     gender:this.state.gender,
        //     age:this.state.age,
        //     profession:this.state.profession
        // }
        // console.log(formsData)
        // this.setState((prevState)=>{
        // this.state.prevState.forms.push({
        //         name:this.state.name,
        //         bio:this.state.bio,
        //         gender:this.state.selectOption,
        //         age:this.state.age,
        //         profession:this.state.profession
        //     })
        //console.log(prevState.forms)
            // return {
            //     name:'',
            //     bio:'',
            //     gender:'male',
            //     age: new Date(),
            //     profession:{value:'fresher'}
            // }

        //})
        localStorage.setItem('formInfo',JSON.stringify(this.state))
    
    }
    // endSubmit=()=>{
    //     this.setState({
    //         name:'',
    //         bio:''  onClick={this.endSubmit}
    //     })
    // }
    componentDidMount(){
        const obj= JSON.parse(localStorage.getItem('FormInfo'))
        if(obj!=null){
         this.setState(()=>{
             return{
                 name:obj.name,
                 bio:obj.bio,
                 gender:obj.gender,
                 age:obj.age,
                 profession:obj.profession
             }
         })
     }
       
        
    }
   render(){
       return(
           <div>
               <form onSubmit ={this.handleSubmit}>
               <label> Name: <input type = 'text' value={this.state.name} onChange={this.handleName}/>
                            
               </label>
              <br />
              <br />
              <label> Bio: <textarea value={this.state.bio} onChange={this.handleBio}/>
               </label>
              <br />
              <br />
              Gender:
              <label>  <input type = 'radio' value='male' onChange={this.handleOperation} checked={this.state.gender === 'male'}  />male</label>
                            
               <label><input type = 'radio' value='female' onChange={this.handleOperation} checked={this.state.gender === 'female'}  />female
                            
               </label>
               <br />
               <br />
                <label>Age:
                <DatePicker selected={this.state.age} onChange={this.handleChange}/></label>
                <br />
                <br />
                <label> profession:
                    <select required  value={this.state.profession} placeholder="Select" onChange={this.handleProfession}>
                        <option value="fresher">fresher</option>
                        <option value="experienced">experienced</option>
                        <option value="retired">retired</option>
                    
                    </select>

                </label>
                <br />
                <br />
                
               <input type='submit' value='submit' />
               </form>
           </div>
       )
   }
}

export default Profile