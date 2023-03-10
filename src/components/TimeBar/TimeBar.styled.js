import styled from 'styled-components';

export const TimeBarStyled = styled.div`

  display: flex;

  .years-grid {
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 2;
  }

  .duration-grid {
    display: flex;
    flex-direction: column;
    width: 12px;
    background-color: #458acf;
  }
`;

export const YearStyled = styled.div`
  display: flex;
  align-items: center;
  width: 50px;
  height: ${props => props.height}px;
  color: #ffffff40;
  position: relative;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  .divider {
    border-top: 1px solid #fff;
    width: 25px;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const JobStyled = styled.div`
  height: ${props => props.height}px;
  position: absolute;
  margin-top: ${props => props.margin}px;
  display: flex;
  opacity: 0;
  min-width: 300px;

  animation-duration: 1.5s;
  animation-delay: ${props => props.order * 0.3}s;
  animation-name: slideFromTop;
  animation-fill-mode: forwards;
  
  .duration {
    width: 12px;
    background-color: ${props => props.color};
    display: flex;
    height: 100%;

    &.active {
      animation-duration: 0.3s;
      animation-name: slideFromRight;
      animation-fill-mode: forwards;
    }
  }

  .job {
    padding-left: 24px;
    color: #fff;
  }

  .company {
    font-weight: bold;
    font-size: 12px;
  }

  @keyframes slideFromTop {
    from {
      margin-left: 60%;
      opacity: 0;
    }

    to {
      margin-left: 0%;
      opacity: 1;
    }
  }

  @keyframes slideFromRight {
    from {
      width: 12px;
      margin-left: 0;
    }

    to {
      width: 20px;
      margin-left: -8px;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }  
  }
`;