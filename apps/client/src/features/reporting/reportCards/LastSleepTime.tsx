import { dateTimeToDayjs } from '@iot-alarm-app/dates';
import { Text } from '@mantine/core';
import { FC, useEffect } from 'react';
import { useLastSleepSchedule } from '../api/getLastSleepSchedule';
import ReportCard from '../ReportCard';

interface Props {
  setSleepScheduleId: (id: string) => void;
}

const LastSleepTime: FC<Props> = ({ setSleepScheduleId }) => {
  const lastSleepScheduleData = useLastSleepSchedule();

  useEffect(() => {
    if (lastSleepScheduleData.data) {
      setSleepScheduleId(lastSleepScheduleData.data.id);
    }
  }, [lastSleepScheduleData.data, setSleepScheduleId]);

  return (
    <ReportCard
      data={lastSleepScheduleData}
      title="Last Sleep Time"
      info="The sleep time of your last recorded rest period"
    >
      <Text color="blue" fw="bolder" fz="3rem" align="center">
        {dateTimeToDayjs(lastSleepScheduleData?.data?.sleepTime || '').format(
          'HH:mm'
        )}
      </Text>
    </ReportCard>
  );
};

export default LastSleepTime;
