import PropTypes from 'prop-types';

import {
  StatisticsCard,
  StatisticsTitle,
  StatList,
  StatisticsItem,
  StatisticsLabel,
  StatisticsPercentage,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsCard>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatList>
        {stats.map(stat => (
          <StatisticsItem id={stat.id} key={stat.id}>
            <StatisticsLabel>{stat.label}</StatisticsLabel>
            <StatisticsPercentage>{stat.percentage}%</StatisticsPercentage>
          </StatisticsItem>
        ))}
      </StatList>
    </StatisticsCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
