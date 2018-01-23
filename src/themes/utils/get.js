import theme from '../theme';

const get = {};

for (let item in theme) {
  get[item] = str => {
    const props = str.split('.');
    return props.reduce((value, prop) => {
      return value[prop];
    }, theme[item]);
  }
}

export default get;
