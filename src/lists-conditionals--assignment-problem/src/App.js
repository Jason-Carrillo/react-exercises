import React, { Component } from 'react';
import './App.css';
import ValidationComponent from "./ValidationComponent";
import CharComponent from "./CharComponent"

class App extends Component {

    state = {
        lengthSize: 0,
        inputString: ""
    }

    textLength = (event) => {
        this.setState({
            lengthSize: event.target.value.length,
            inputString: event.target.value}
            );
    }


  render() {
      let charString = (
          <div>
              {
                  this.state.inputString.split('').map((char) => {
                      return <CharComponent
                          letter={char}
                      />
                  })
              }
          </div>
      )
    return (
      <div className="App">
        <ol>
            <li><strike>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</strike></li>
            <li><strike>Create a new component (=> ValidationComponent) which receives the text length as a prop</strike></li>
            <li><strike>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</strike></li>
            <li><strike>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</strike></li>
            <li><strike>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</strike></li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

          <input onChange={this.textLength}/>
          <p >{this.state.lengthSize}</p>
          <ValidationComponent textLength={this.state.lengthSize} />

          <CharComponent letter={this.state.inputString} />
          {charString}

      </div>
    );
  }
}

export default App;
