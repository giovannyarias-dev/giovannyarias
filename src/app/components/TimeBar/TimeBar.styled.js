import styled from 'styled-components';

export const TimeBarStyled = styled.div`

  display: flex;

  .years-grid {
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
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
  justify-content: center;
  width: 50px;
  height: ${props => props.height}px;
  color: #ffffff82;
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
  margin-left: 100%;

  animation-duration: 2s;
  animation-delay: ${props => props.order * 0.5}s;
  animation-name: slideFromTop;
  animation-fill-mode: forwards;


  .duration {
    width: 12px;
    background-color: ${props => props.color};
    display: flex;
    height: 100%;
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
    margin-left: 100%;
  }

  to {
    margin-left: 0%;
  }
}
`;