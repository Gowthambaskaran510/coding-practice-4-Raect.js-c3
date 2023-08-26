import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, banana: 0}

  eatMango = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mangoes, banana} = this.state
    return (
      <div className="fruits-counter-bg">
        <div className="fruits-counter-card">
          <h1 className="fruits-counter-heading">
            Bob ate <span>{mangoes}</span> mangoes <span>{banana}</span> bananas
          </h1>
          <div className="fruits-items">
            <div className="fruits-item">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button type="button" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>
            <div className="fruits-item">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button type="button" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
