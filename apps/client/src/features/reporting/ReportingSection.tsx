import { Group, Stack, Title } from '@mantine/core';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title: string;
  rightSection?: ReactNode;
}

const ReportingSection: FC<Props> = ({ children, title, rightSection }) => {
  return (
    <Stack>
      <Group spacing="xl">
        <Title order={1}>{title}</Title>
        {rightSection}
      </Group>
      <Group>{children}</Group>
    </Stack>
  );
};

export default ReportingSection;
