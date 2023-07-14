const benny = require('benny');

const filterValues_duff_device = require('./filterValues_duff_device');

const MAX_VALUE_EXCLUSIVE = 1000;
const MIN_VALUE_INCLUSIVE = 0;

const generateRandomValue = () => {
  return Math.floor(MIN_VALUE_INCLUSIVE + Math.random() * MAX_VALUE_EXCLUSIVE);
};

const generateValues = (num) => {
  const ids = new Array(num);
  for (let i = 0; i < num; i++) {
    ids[i] = generateRandomValue();
  }
  return ids;
};

const filterValues_conventional = (ids) => {
  const uniqIds = {};
  for (let i = 0; i < ids.length; i++) {
    uniqIds[ids[i]] = ids[i];
  }
  return Object.values(uniqIds);
};

const testManyImplementations = (...cases) => {
  return [1000, 10000, 100000, 1000000, 10000000].reduce((result, numValues) => {
    return cases
      .map(([name, fn]) => {
        const inputValues = generateValues(numValues);
        return benny.add(`${name} (${numValues} values)`, () => {
          fn(inputValues);
        });
      })
      .concat(result);
  }, []);
};

benny.suite(
  'Filtering Duplicate Values',

  ...testManyImplementations(['Conventional', filterValues_conventional], ['NOS supercharged Duffs Device', filterValues_duff_device]),

  benny.cycle(),
  benny.complete(),
  benny.save({ file: 'filtering', format: 'chart.html' })
);
