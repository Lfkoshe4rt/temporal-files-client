export const persistSessionStorage = (key: string, value: string) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const getSessionStorage = (key: string) => {
  const value = sessionStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

export const removeSessionStorage = (key: string) => {
  sessionStorage.removeItem(key);
};

export const clearSessionStorage = () => {
  sessionStorage.clear();
};
