import {
  ActionIcon,
  Center,
  Group,
  Paper,
  Stack,
  Title,
  Tooltip,
} from '@mantine/core';
import { FC, ReactNode } from 'react';
import { MdInfo } from 'react-icons/md';
import DataHandler from '../../components/DataHandler';

interface Props {
  children: ReactNode;
  title: string;
  info: string;
  data: {
    data: unknown;
    error: unknown;
    isLoading: boolean;
  };
}

const ReportCard: FC<Props> = ({ children, data, title, info }) => {
  return (
    <Paper p="md" radius="lg" withBorder h="200px">
      <DataHandler {...data}>
        <Stack sx={{ height: '100%' }}>
          <Group>
            <Title order={3}>{title}</Title>
            <Tooltip label={info}>
              <ActionIcon fz="1.3rem" radius="xl">
                <MdInfo />
              </ActionIcon>
            </Tooltip>
          </Group>
          <Center pb="md" sx={{ flexGrow: 1 }}>
            {children}
          </Center>
        </Stack>
      </DataHandler>
    </Paper>
  );
};

export default ReportCard;
