import React, { PureComponent } from 'react';
import { TimeBarWrapper, InnerTimeBarContainer, InnerTimeBar } from './style';

export default class TimeBar extends PureComponent {
    render() {
        const { leftOffset, width, color, text } = this.props;
        return (
            <TimeBarWrapper>
                <InnerTimeBarContainer leftOffset={leftOffset} width={width} >
                    <InnerTimeBar color={color}>{text}</InnerTimeBar>
                </InnerTimeBarContainer>
            </TimeBarWrapper>
        )
    }
}