import React, { Component } from 'react'
import styled from 'styled-components'
import Colors from '../StyleComponents/Colors'

const DescriptionWrapper = styled.div`
    padding: 0 25px;
    font-size: 12px;
    line-height: 1.3em;
    text-align: center;
    font-weight: 300;
    width: 100%;
    p {
      padding: 5px;
    }
    a {
        color: ${Colors.mediumPurple};
    }
`;

const ExpandedDescription = styled.div`
    p {
       padding: 5px;
    }
`;

const MoreOrLess = styled.span`
    display:block;
    color: ${Colors.lightPurple};
    font-weight: 500;
    padding: 10px 0px;
    &:hover{cursor: pointer;}
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
            { this.state.expanded ?
            <ExpandedDescription dangerouslySetInnerHTML={{ __html: this.props.item.description}} />
            : null}
          <MoreOrLess href='#' onClick={this.toggleLines}>{this.state.expanded ? "hide" : "show"} description</MoreOrLess>
        </DescriptionWrapper>
    )}
}

export default Description;
