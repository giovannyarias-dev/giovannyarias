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

export const DurationStyled = styled.div`
  background-color: ${props => props.color};
  height: ${props => props.height}px;
  width: 12px;
  color: 20px;
  position: absolute;
  margin-top: ${props => props.margin}px;
`;