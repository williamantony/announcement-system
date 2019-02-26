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

export const fromName = (fullname = null) => {
  if (fullname === null) return false;

  const name = fullname
    .replace(/\.?\s/gi, ' ')
    .match(/([a-z.,\-']{1,})/gi)
    .reduce((obj, part) => {

      if ('firstname' in obj === false) {
        obj = {
          firstname: null,
          lastname: null,
          middleInitial: null,
          preInitial: null,
          postInitial: null,
        };
      }

      const values = {};
      
      const {
        firstname,
        lastname,
        middleInitial,
        preInitial,
        postInitial,
      } = obj;

      const isInitial = new RegExp(/^[a-z]{1}$/gi).test(part);

      if (isInitial && firstname === null && lastname === null) {
        values.preInitial = (`${preInitial || ''} ${part}`).trim();
      }

      else if (isInitial && firstname === null && lastname !== null) {
        values.middleInitial = (`${middleInitial || ''} ${part}`).trim();
      }

      else if (isInitial && firstname !== null && lastname !== null) {
        values.postInitial = (`${postInitial || ''} ${part}`).trim();
      }

      else if (!isInitial && firstname === null && lastname === null) {
        values.lastname = part;
      }

      else if (!isInitial && firstname === null && lastname !== null) {
        values.firstname = lastname;
        values.lastname = part;
      }

      else if (!isInitial && firstname !== null && lastname !== null) {
        const lastnamePart = (`${postInitial || ''} ${part}`).trim();
        values.lastname = `${lastname} ${lastnamePart}`;
        values.postInitial = null;
      }

      return {
        ...obj,
        ...values,
      };

    }, {});

  name.fullname = fullname;

  return name;
};

export const parseJSON = (input) => {
  try {
    return JSON.parse(input);
  } catch (error) {
    return input;
  }
};

export const parseJSONvalue = (input, config) => {
  const json = parseJSON(input);
  return Object.keys(config).reduce((values, name) => {
    return {
      ...values,
      [name]: (config[name][0] !== '=')
        ? config[name].split('::').reduce((value, key) => value[key], json)
        : config[name].substring(1),
    };
  }, {});
};

export const filter = (inputList = [], compareList = [], compare = ((a, b) => false)) => {
  console.info('helper:filter() :: Refactor this');

  let list = inputList;

  for (let i = 0; i < compareList.length; i++)
    list = list.filter(item => compare(item, compareList[i]));

  return list;
};
