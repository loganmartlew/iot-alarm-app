import { FC } from 'react';
import { Group, Title, Header, Avatar, Text } from '@mantine/core';

const HeaderComponent: FC = () => {
  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <Group>
        <Title sx={{ flexGrow: 1 }}>Smart Alarm</Title>
        <Text fz="sm" italic>
          Signed In
        </Text>
        <Avatar radius="xl" color="blue">
          LM
        </Avatar>
      </Group>
    </Header>
  );
};

export default HeaderComponent;
