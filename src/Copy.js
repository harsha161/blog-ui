import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const formStyle = {
    background: "#eee",
    padding: "20px",
    margin: "20px",
    float: "left",
    textAlign:"center",
    font:"arial"
};

const lableStyle = {
    margin: "0 0 10px",
    width:"100%",
    float:"left",
    textAlign:"left"
};

const buttonStyle = {
    top: "100%"
};

class Profile extends React.Component {
    constructor() {
        super ()
        this.state = {
            name : '',
            bio : '',
            gender:'male',
            startDate: new Date(),
            selectValue: '',
            forms : ''
        }
        this.handleName = this.handleName.bind(this)
        this.handleBio = this.handleBio.bind(this)
        this.handleGender = this.handleGender.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleProfession = this.handleProfession.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleName(e) {
        const name = e.target.value
        this.setState({name});
    }

    handleBio(e) {
        const bio = e.target.value
        this.setState({bio});
    }

    handleGender(e) {
        const gender = e.target.value
        this.setState({gender});
    }

    handleChange = date => {
        this.setState({
          startDate: date
        })
    }

    handleProfession(e) {
        const selectValue = e.target.value
        if(selectValue !== 'selectProfession'){
            this.setState({selectValue});
        }
    }

    handleSubmit(e) {
        e.preventDefault()

        const formData = {
            name : this.state.name,
            bio : this.state.bio,            
            startDate : this.state.startDate,
            gender : this.state.gender,
            selectValue : this.state.selectValue

        }
        console.log(formData)

        this.setState((prevState) => {
            // prevState.forms.push({
            //     name : this.state.name,
            //     bio : this.state.bio,            
            //     startDate : this.state.startDate,
            //     gender : this.state.gender,
            //     selectValue : this.state.selectValue
            // })
            console.log(prevState.forms)
            return {
                forms:localStorage.setItem('forms',JSON.stringify(formData))
            }
        })
        
    }

    componentDidMount=()=>{
        if(JSON.parse(localStorage.getItem('forms'))!=null){
        this.setState((prevState)=>{
                return{
                    forms:JSON.parse(localStorage.getItem('forms'))
                }
            })
        }
    }
     

    render () {
        return (
            <div>
                <form style={formStyle} onSubmit={this.handleSubmit}>
                    <label style={lableStyle}> Name:
                        <input type="text" value={this.state.name} onChange={this.handleName} required />
                    </label> <br />

                    <label style={lableStyle}> Bio :
                        <textarea rows="4" cols="30" value={this.state.bio} onChange={this.handleBio} required></textarea>
                    </label> <br />

                    <label style={lableStyle}> Gender :
                        <label><input type="radio" name="gender" value="male"   onChange={this.handleGender} defaultChecked />Male</label>
                        <label><input type="radio" name="gender" value="female"  onChange={this.handleGender} />Female</label>
                    </label> <br />

                    <label style={lableStyle}> Age :
                        <DatePicker selected={this.state.startDate} onChange={this.handleChange} dateFormat="yyyy/MM/dd" />
                    </label> <br />

                    <label style={lableStyle}> Profession :
                        <select required  value={this.state.selectValue} placeholder="Select" onChange={this.handleProfession}>
                            <option value="selectProfession">select Profession</option>
                            <option value="Fresher">Fresher</option>
                            <option value="Experienced">Experienced</option>
                            <option value="Retired">Retired</option>
                        </select>
                    </label><br />

                    <input type="submit" style={buttonStyle} />
                </form>
            </div>
        )
    }
}

export default Profile