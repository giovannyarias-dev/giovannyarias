import styled from 'styled-components';

export const TimeBarStyled = styled.div`

  display: flex;

  .years-grid {
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .year {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    color: #ffffff82;
    position: relative;
    cursor: pointer;

    &:hover {
      color: #fff;
    }
  } 

  .divider {
    border-top: 1px solid #fff;
    width: 25px;
    position: absolute;
    right: 0;
    top: 0;
  }

  .duration-grid {
    display: flex;
    flex-direction: column;
  }

  .duration {
    background-color: #000;
    height: 40px;
    width: 12px;
    color: 20px;
  }

`;

