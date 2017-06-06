import React, { Component } from 'react'
import Truncate from 'react-truncate-html'
import styled from 'styled-components'
import Colors from '../StyleComponents/Colors'

const DescriptionWrapper = styled.div`
    margin-bottom: 40px;
    padding: 0 25px;
    font-size: 12px;
    line-height: 1.3em;
    text-align: center;
    font-weight: 300;
    width:100%;
    p {
        // adding padding to the description paragraph tags fuuucks this up
    }
    a {
        color: ${Colors.mediumPurple};
    }
`;

const MoreOrLessContainer = styled.span`
    display: flex;
        justify-content: center;
        align-items: center;
    position: relative;
`;

const MoreOrLess = styled.span`
    position: absolute;
    bottom: -20px;
    color: ${Colors.lightPurple};
    font-weight: 500;
`;

class Description extends Component {
    constructor(...args) {
        super(...args);

        this.state = {
            expanded: false,
        };

        this.toggleLines = this.toggleLines.bind(this);
    }

    toggleLines(event) {
        event.preventDefault();
        this.setState({
            expanded: !this.state.expanded
        });
    }

    render() {
        return(
        <DescriptionWrapper>
            { !this.state.expanded ?
            <Truncate lines={2} dangerouslySetInnerHTML={{ __html: this.props.item.description}}/>
            :
            <div dangerouslySetInnerHTML={{ __html: this.props.item.description}} />
            }
            <MoreOrLessContainer>
              <MoreOrLess href='#' onClick={this.toggleLines}>{this.state.expanded ? "less" : "more"}</MoreOrLess>
            </MoreOrLessContainer>
        </DescriptionWrapper>
    )}
}

export default Description;
