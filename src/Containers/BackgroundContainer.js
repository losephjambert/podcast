import React, { Component } from 'react';
import Marquee from '../Components/Marquee';
import BackgroundHeadline from '../Components/BackgroundHeadline';
import BackgroundArticle from '../Components/BackgroundArticle';
import NewsPaperHeader from '../Components/NewsPaperHeader';


class BackgroundContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <p>-- Begin background container --</p>
        <Marquee headline={this.props.marquee.body} />
        <BackgroundHeadline headline={this.props.backgroundLeft.headline} />
        <BackgroundArticle body={this.props.backgroundLeft.body} />
        <NewsPaperHeader headline={this.props.backgroundMiddle.body} />
        <BackgroundHeadline headline={this.props.backgroundRight.headline} />
        <BackgroundArticle body={this.props.backgroundRight.body} />
        <p>-- End background container --</p>
      </div>
    );
  }
}

export default BackgroundContainer;
