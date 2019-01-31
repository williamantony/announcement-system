export const getCookie = (name) => {
  const cookie = decodeURIComponent(document.cookie);
  const cookieSplit = cookie.split(/[=|;]/gi);
  const nameIndex = cookieSplit.findIndex((item) => item === name);
  if (nameIndex > -1)
    return cookieSplit[nameIndex + 1];
  return null;
};

export const setCookie = (name, value = '', minutes = 0) => {
  return new Promise((resolve, reject) => {
    if (!name) return reject(null);
    const expiry = new Date(Date.now() + (minutes * 60 * 1000)).toUTCString();
    const cookieKeyValue = `${ name }=${ value };`;
    const cookieExpiry = `expires=${ expiry };`;
    const newCookie = `${ cookieKeyValue } ${ cookieExpiry }`;
    document.cookie = newCookie;
    const cookieValue = getCookie(name);
    if (cookieValue !== value)
      return reject(null);
    return resolve(cookieValue);
  });
};

export const clearCookie = (name) => {
  if (!name) return null;
  return setCookie(name, '', 1/60);
};
