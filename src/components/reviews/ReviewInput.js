import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = { text: '' }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addReview(this.props.restaurantId, this.state.text)
    this.setState({ text: '' })
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={e => this.setState({text: e.target.value})}
          />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
