import React from 'react'
import Navigation from './Navigation'

function Header(){
    return (
      <header className="border-b p-3 flex justify-between items-center">
        <span className="font-bold">
          Product App
        </span>

        <Navigation />
      </header>
    )
}

// class HelloWorld extends React.Component{
// 	render() {
// 		return (
// 			<h1> Hello {this.props.name} </h1>
// 		)
// 	}
// }

export default Header