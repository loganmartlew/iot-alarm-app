interface Data {
  data: unknown;
  error: unknown;
  isLoading: boolean;
}

export const combineDataForWrapper = (...datas: Data[]) => {
  let allDataExists = true;
  let error: unknown = null;
  let isLoading = false;

  datas.forEach((data) => {
    if (data.isLoading) {
      isLoading = true;
    }

    if (data.error) {
      error = data.error;
    }

    if (!data.data) {
      allDataExists = false;
    }
  });

  const data = allDataExists ? datas[0] : null;

  return { data, error, isLoading };
};
