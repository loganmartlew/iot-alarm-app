import { Box } from '@mantine/core';
import { WeekDay } from '@prisma/client';
import { FC } from 'react';

interface Props {
  weekDay: WeekDay;
  active?: boolean;
}

const WeekDayBadge: FC<Props> = ({ weekDay, active }) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: active
          ? theme.colors[theme.primaryColor][5]
          : theme.colors.gray[3],
        color: active ? theme.white : theme.colors.gray[8],
        borderRadius: theme.radius.xl,
        width: '3ch',
        height: '3ch',
        textAlign: 'center',
      })}
    >
      {weekDay.name.charAt(0).toUpperCase()}
    </Box>
  );
};

export default WeekDayBadge;
