import React, { Component } from 'react'
import Truncate from 'react-truncate'
import styled from 'styled-components'
import Colors from '../StyleComponents/Colors'

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
 
class ReadMore extends Component {
    constructor(...args) {
        super(...args);
 
        this.state = {
            expanded: false,
            truncated: false
        };
 
        this.handleTruncate = this.handleTruncate.bind(this);
        this.toggleLines = this.toggleLines.bind(this);
    }
 
    handleTruncate(truncated) {
        if (this.state.truncated !== truncated) {
            this.setState({
                truncated
            });
        }
    }
 
    toggleLines(event) {
        event.preventDefault();
 
        this.setState({
            expanded: !this.state.expanded
        });
    }
 
    render() {
        const {
            children,
            more,
            less,
            lines 
        } = this.props;
 
        const {
            expanded,
            truncated 
        } = this.state;
 
        return (
            <div>
                <Truncate
                    lines={!expanded && lines}
                    ellipsis={(
                        <MoreOrLessContainer>
                            <MoreOrLess href='#' onClick={this.toggleLines}>{more}</MoreOrLess>
                        </MoreOrLessContainer>
                    )}
                    onTruncate={this.handleTruncate}
                >
                    {children}
                </Truncate>
                {!truncated && expanded && (
                    <MoreOrLessContainer>
                        <MoreOrLess href='#' onClick={this.toggleLines}>{less}</MoreOrLess>
                    </MoreOrLessContainer>
                )}
            </div>
        );
    }
}
 
export default ReadMore;