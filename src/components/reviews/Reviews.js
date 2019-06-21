import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  renderReviews = () => {
    const reviews = this.props.reviews.filter(review => (
      review.restaurantId === this.props.restaurant.id
    ))

    return reviews.map(review => (
      <Review
        key={review.id}
        restaurantId={"hello"}
        review={review}
        deleteReview={this.props.deleteReview}
      />
    ))
  }

  render() {
    // console.log("Reviews props", this.props)
    return (
      <ul>
        {this.renderReviews() }
      </ul>
    );
  }
};

export default Reviews;
