import styled from '@emotion/styled';

export const StatisticsCard = styled.section`
  text-align: center;
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;
export const StatisticsTitle = styled.section`
  font-size: 24px;
  text-transform: uppercase;
  color: #696969;
`;
export const StatList = styled.ul`
  width: 100%;
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const setBgColor = props => {
  switch (props.id) {
    case 'id-1':
      return 'red';
    case 'id-2':
      return 'green';
    case 'id-3':
      return 'blue';
    case 'id-4':
      return 'orange';
    case 'id-5':
      return 'teal';
    default:
      return 'black';
  }
};

export const StatisticsItem = styled.li`
  display: inherit;
  width: calc(100% / 5);
  align-items: center;
  flex-direction: column;
  gap: 4px;
  padding: 16px;
  color: #ffffff;
  background-color: ${setBgColor};
`;
export const StatisticsLabel = styled.span`
  font-size: 12px;
`;
export const StatisticsPercentage = styled.span`
  font-size: 24px;
  font-weight: 700;
`;
