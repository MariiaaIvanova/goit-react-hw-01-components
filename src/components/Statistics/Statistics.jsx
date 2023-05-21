import PropTypes from 'prop-types';
import { getRandomHexColor } from './getRandomHexColor';
import { StatsSection, Title, StatsList, StatsItem, StatsLabel, StatsPercentage } from './Statistics.styled';

export default function Statistics ({ title, stats }) {
    return (
        <StatsSection>
            {title && <Title>{title}</Title>}
            <StatsList>
                {stats.map(stat => (
                    <StatsItem key={stat.id} style={{ backgroundColor: getRandomHexColor() }}>
                        <StatsLabel>{stat.label}</StatsLabel>
                        <StatsPercentage>{stat.percentage}%</StatsPercentage>
                    </StatsItem>
                ))}
            </StatsList>
            
        </StatsSection>
    );
};
Statistics.propTypes={
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
    ).isRequired,
    
};
