import { Group, Stack, Title } from '@mantine/core';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title: string;
}

const ReportingSection: FC<Props> = ({ children, title }) => {
  return (
    <Stack>
      <Title order={1}>{title}</Title>
      <Group>{children}</Group>
    </Stack>
  );
};

export default ReportingSection;
