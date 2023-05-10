import { FC, ReactNode } from 'react';
import { Loader } from '@mantine/core';

interface Props {
  children: ReactNode;
  data: unknown;
  error: unknown;
  isLoading: boolean;
}

const DataHandler: FC<Props> = ({ children, data, error, isLoading }) => {
  if (isLoading) {
    return <Loader />;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default DataHandler;
