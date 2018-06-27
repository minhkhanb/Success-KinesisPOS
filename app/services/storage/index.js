import { AsyncStorage } from 'react-native';

const LocalStorage = {
  /**
   * Find an item from Storage by key
   * @param {String} key
   * @returns {Promise} return a Promise
   */
  get: key => AsyncStorage.getItem(key).then(value => JSON.parse(value)),

  /**
   * Save an item to Storage by key
   * @param {String} key
   * @param {any} data
   * @returns {Promise} return a Promise
   */
  save: (key, value) => AsyncStorage.setItem(key, JSON.stringify(value)),

  update: (key, value) => LocalStorage.get(key).then((item) => {
    // if current value is a string, then overwrite; else merge objects
    const v = (typeof value === 'string') ? value : Object.assign({}, item, value);
    return AsyncStorage.setItem(key, JSON.stringify(v));
  }),

  delete: key => AsyncStorage.removeItem(key),
};

export default LocalStorage;
