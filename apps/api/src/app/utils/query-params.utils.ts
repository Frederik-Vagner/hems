import { IsNull, Not } from 'typeorm';

export const toBool = (param?: string): boolean | undefined => {
  if (param) {
    if (param.toLowerCase() === 'true' || param === '1') {
      return true;
    }
    return false;
  }
  return undefined;
};

export const filterStatus = (status: boolean | undefined) => {
  if (status === undefined) {
    return undefined;
  } else if (status === true) {
    return Not(IsNull());
  }
  return IsNull();
};
