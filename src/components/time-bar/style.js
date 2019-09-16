import styled, { keyframes } from 'styled-components';

const BAR_HEIGHT = '40px';

export const TimeBarWrapper = styled.div`
    position: relative;
    margin: 10px 10px;
    line-height: ${BAR_HEIGHT};
    height: ${BAR_HEIGHT};
    background: -webkit-linear-gradient(left,#e4e3e4,#e4e5e4);
    background: -moz-linear-gradient(left,#e4e3e4,#e4e5e4);
    background: -o-linear-gradient(left,#e4e3e4,#e4e5e4);
    background: -ms-linear-gradient(left,#e4e3e4,#e4e5e4);
    background: linear-gradient(left,#e4e3e4,#e4e5e4);
    box-shadow: 0 3px 15px 3px rgba(51, 51, 51, 0.5);
`;



export const InnerTimeBarContainer = styled.div`
    position: absolute;
    left: ${props => props.leftOffset};
    width: ${props => props.width};
    height: 100%;
`;

const slideIn = keyframes`
    0% {
        opacity: 0;
        width: 0;
    }
    100% {
        opacity: 100%;
        width: 100%;
    }
`;

export const InnerTimeBar = styled.div`
    overflow: hidden;
    width: 0;
    height: 100%;
    text-align: center;
    text-overflow: ellipsis;
    color: white;
    background: ${props => props.color};
    animation: ${slideIn} 1s ease-in;
    animation-fill-mode: forwards;
`;