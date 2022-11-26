export const toBool = (param?: string): boolean | undefined => {
  if (param) {
    if (param.toLowerCase() === 'true' || param === '1') {
      return true;
    }
    return false;
  }
  return undefined;
};
