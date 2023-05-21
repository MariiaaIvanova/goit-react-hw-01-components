import styled from '@emotion/styled';

export const StatsSection = styled.section`
  text-align: center;
`;

export const Title = styled.h2`
  font-weight: 900;
  font-size: 25px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #e2f2df;
  color: black;
  padding-bottom: 20px;
  padding-top: 20px;
`;

export const StatsList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  background-color: #e2f2df;
  padding-bottom: 40px;
`;

export const StatsItem = styled.li`
  padding: 15px 10px;
  width: 70px;
  display: flex;
  flex-direction: column;
  color:  #ffffff;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.03em;
`;

export const StatsLabel = styled.span``;

export const StatsPercentage = styled.span`
  color:  #ffffff;
`;