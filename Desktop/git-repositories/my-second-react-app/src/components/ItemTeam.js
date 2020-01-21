import React, {Component} from 'react' 

export default class ItemTeam extends Component {
  render() {
    return <div className="item team">
    <img className="image" src={this.props.imgUrl} />
    <div className="component-title title">
      {this.props.txt}
    </div>
  </div>
  }
}