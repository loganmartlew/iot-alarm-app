import statusCodes from 'http-status-codes';

interface Code {
  message: string;
  statusCode: number;
}

class Code {
  constructor(input: { message: string; statusCode?: number }) {
    this.message = input.message;
    this.statusCode = input.statusCode ?? statusCodes.INTERNAL_SERVER_ERROR;
  }
}

type Codes = Record<number, Code>;

const unknownCodes: Codes = {
  1000: new Code({
    message: 'An unknown error occurred',
  }),
};

const httpCodes: Codes = {
  2000: new Code({
    message: 'An unknown HTTP error occurred',
  }),
  2001: new Code({
    message: 'Request failed due to rate limiting',
    statusCode: statusCodes.TOO_MANY_REQUESTS,
  }),
  2002: new Code({
    message: 'Request failed due to invalid credentials',
    statusCode: statusCodes.UNAUTHORIZED,
  }),
  2003: new Code({
    message: 'Request failed due to invalid permissions',
    statusCode: statusCodes.FORBIDDEN,
  }),
  2004: new Code({
    message: 'Request failed due to invalid input',
    statusCode: statusCodes.BAD_REQUEST,
  }),
  2005: new Code({
    message: 'Request failed due to a resource not being found',
    statusCode: statusCodes.NOT_FOUND,
  }),
};

const dbCodes: Codes = {
  3000: new Code({
    message: 'An unknown database error occurred',
  }),
  3001: new Code({
    message: 'Unable to connect to the database',
  }),
  3002: new Code({
    message: 'Object not found',
    statusCode: statusCodes.NOT_FOUND,
  }),
  3003: new Code({
    message: 'Unable to save object',
  }),
  3004: new Code({
    message: 'Unable to create object',
  }),
  3005: new Code({
    message: 'Unable to delete object',
  }),
  3006: new Code({
    message: 'Unable to update object',
  }),
};

const validationCodes: Codes = {
  4000: new Code({
    message: 'An unknown validation error occurred',
    statusCode: statusCodes.BAD_REQUEST,
  }),
  4001: new Code({
    message: 'Invalid data provided',
    statusCode: statusCodes.BAD_REQUEST,
  }),
  4002: new Code({
    message: 'Incorrect data format',
    statusCode: statusCodes.BAD_REQUEST,
  }),
  4003: new Code({
    message: 'Missing required data',
    statusCode: statusCodes.BAD_REQUEST,
  }),
  4004: new Code({
    message: 'Unable to process data',
    statusCode: statusCodes.UNPROCESSABLE_ENTITY,
  }),
  4005: new Code({
    message: 'System at capacity',
    statusCode: statusCodes.UNPROCESSABLE_ENTITY,
  }),
};

const allCodes = {
  ...unknownCodes,
  ...httpCodes,
  ...dbCodes,
  ...validationCodes,
};

const validCodesArr = Object.keys(allCodes).map((code) => parseInt(code, 10));

export const validCodes = new Set(validCodesArr);

export default allCodes;
