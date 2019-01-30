export const getCookie = (name) => {
  const cookie = decodeURIComponent(document.cookie);
  const cookieSplit = cookie.split(/[=|;]/gi);
  const nameIndex = cookieSplit.findIndex((item) => item === name);
  if (nameIndex > -1)
    return cookieSplit[nameIndex + 1];
  return null;
};

export const setCookie = (name, value = '', maxAge = 0) => {
  return new Promise((resolve, reject) => {
    if (!name) return reject(null);
    const cookieKeyValue = `${ name }=${ value };`;
    const cookieExpiry = `expires=${ new Date(Date.now() + maxAge ).toISOString() };`;
    document.cookie = `${ cookieKeyValue } ${ cookieExpiry }`;
    const cookieValue = getCookie(name);
    if (cookieValue !== value)
      return reject(null);
    return resolve(cookieValue);
  });
};

export const clearCookie = (name) => {
  if (!name) return null;
  return setCookie(name, '', -7200);
};
