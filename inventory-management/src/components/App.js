import React, {Component} from 'react';
import Order from './Orders'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      test: 'not fetched'
    }
  }
  componentDidMount() {
     console.log('mounted')
     fetch("/test")
      .then((res) => res.json())
      .then((data) => {
        this.setState({test: data.test})
      })
  }

  render() {
    return (
      <div>
        <Order/>
      </div>
    )
  }
}


export default App
