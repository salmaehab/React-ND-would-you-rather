import React, { Component } from 'react'
import {connect} from 'react-redux'
import { handleAddQuestion} from '../actions/questions'
 class AddQuestionPage extends Component {
    state={
        optionOneText: '',
        optionTwoText: '',
    }
    handleOptionOne = (e)=>{
        const optionOneText = e.target.value

        this.setState(()=>({
            optionOneText
        }))
    }

    handleOptionTwo = (e)=>{
        const optionTwoText = e.target.value
        this.setState(()=>({
            optionTwoText
        }))
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        const { optionOneText, optionTwoText } = this.state
        const {dispatch, authedUser} = this.props
        console.log(this.props)
        //Add question to store
        dispatch(handleAddQuestion({optionOneText:optionOneText,optionTwoText: optionTwoText,author: authedUser}))
        console.log( 'options', optionOneText, optionTwoText)
        this.setState(()=>({ 
            optionOneText: '',
            optionTwoText: '',
        }))
        this.props.history.push('/')
        
    }

    render() {
        const {optionOneText, optionTwoText} = this.state
        
        return (
            <div>
                 <h2 className="center">Add new question</h2>
                 <h3 className="center">Would you rather?</h3>
                 <form className="new-question" onSubmit={this.handleSubmit}>
                    
                     <textarea
                     className="text-area"
                     placeholder="Enter first option"
                     value={optionOneText}
                     onChange={this.handleOptionOne}
                    />
                    <br></br>
                     <textarea
                     className="text-area"
                     placeholder="Enter second option"
                     value={optionTwoText}
                     onChange={this.handleOptionTwo}
                    />
                    <button 
                    className="btn"
                    type="submit"                    
                    >
                    Submit
                    </button>
                 </form>
            </div>
        )
    }
} 

export default connect(({authedUser})=>({authedUser}))(AddQuestionPage)