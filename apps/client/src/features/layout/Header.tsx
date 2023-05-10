import { FC } from 'react';
import {
  Group,
  Title,
  Header,
  Avatar,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';

interface Props {
  opened: boolean;
  openNavigation: () => void;
}

const HeaderComponent: FC<Props> = ({ opened, openNavigation }) => {
  const theme = useMantineTheme();

  return (
    <Header height={70} p="md">
      <Group>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => openNavigation()}
            size="sm"
            color={theme.colors.gray[6]}
          />
        </MediaQuery>
        <Title color="blue" sx={{ flexGrow: 1 }}>
          Smart Alarm
        </Title>
        <Group>
          <Text fz="sm" italic>
            Signed In
          </Text>
          <Avatar radius="xl" color="blue">
            LM
          </Avatar>
        </Group>
      </Group>
    </Header>
  );
};

export default HeaderComponent;
