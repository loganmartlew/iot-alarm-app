import { Stack, Title, Group } from '@mantine/core';
import { FC, ReactNode } from 'react';
import DataHandler from './DataHandler';

interface Props {
  children: ReactNode;
  title: string;
  data?: {
    data: unknown;
    error: unknown;
    isLoading: boolean;
  };
  rightSection?: ReactNode;
}

const PageWrapper: FC<Props> = ({ children, title, data, rightSection }) => {
  const returnValue = data ? (
    <DataHandler {...data}>{children}</DataHandler>
  ) : (
    children
  );

  return (
    <Stack
      spacing="xs"
      p="md"
      sx={(theme) => ({
        color:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[0]
            : theme.colors.gray[8],
      })}
    >
      <Group spacing="xs" align="center">
        <Title order={1}>{title}</Title>
        {rightSection}
      </Group>
      {returnValue}
    </Stack>
  );
};

export default PageWrapper;
