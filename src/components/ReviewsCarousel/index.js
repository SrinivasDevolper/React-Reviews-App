import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {profileIndex: 0}

  leftFunc = () => {
    const {profileIndex} = this.state
    if (profileIndex > 0) {
      this.setState(prevState => ({profileIndex: prevState.profileIndex - 1}))
    }
  }

  rightFunc = () => {
    const {profileIndex} = this.state
    if (profileIndex < 3) {
      this.setState(prevState => ({profileIndex: prevState.profileIndex + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {profileIndex} = this.state
    return (
      <div className="bg-container">
        <button type="button" data-testid="leftArrow">
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            onClick={this.leftFunc}
          />
        </button>
        <div className="profile-container">
          <h1>Reviews</h1>
          <img
            src={reviewsList[profileIndex].imgUrl}
            alt={reviewsList[profileIndex].username}
          />
          <p className="profile-heading">{reviewsList[0].username}</p>
          <p>{reviewsList[profileIndex].companyName}</p>
          <p className="profile-paragraph">
            {reviewsList[profileIndex].description}
          </p>
        </div>
        <button type="button" data-testid="rightArrow">
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
            onClick={this.rightFunc}
          />
        </button>
      </div>
    )
  }
}
export default ReviewsCarousel
