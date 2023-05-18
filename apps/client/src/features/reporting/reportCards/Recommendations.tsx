import DataHandler from '../../../components/DataHandler';
import { FC } from 'react';
import { useRecommendations } from '../api/getRecommendations';
import { Paper, Text } from '@mantine/core';

const Recommendations: FC = () => {
  const recommendationsData = useRecommendations();
  const recommendations = recommendationsData.data || [];

  return (
    <DataHandler {...recommendationsData}>
      {recommendations.map((recommendation, index) => (
        <Paper key={index} p="md" radius="lg" withBorder h="200px">
          <Text fw="bolder">{recommendation.title}</Text>
          <Text maw="35ch">{recommendation.description}</Text>
        </Paper>
      ))}
    </DataHandler>
  );
};

export default Recommendations;
