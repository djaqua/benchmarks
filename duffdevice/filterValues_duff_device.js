const CHUNK_SIZE = 25;

const duff25 = (chunk, uniqueValues) => {
  let index = chunk.length % CHUNK_SIZE;

  if (index) {
    switch (index) {
      case 24:
        uniqueValues[chunk[23]] = chunk[23];
      case 23:
        uniqueValues[chunk[22]] = chunk[22];
      case 22:
        uniqueValues[chunk[21]] = chunk[21];
      case 21:
        uniqueValues[chunk[20]] = chunk[20];
      case 20:
        uniqueValues[chunk[19]] = chunk[19];
      case 19:
        uniqueValues[chunk[18]] = chunk[18];
      case 18:
        uniqueValues[chunk[17]] = chunk[17];
      case 17:
        uniqueValues[chunk[16]] = chunk[16];
      case 16:
        uniqueValues[chunk[15]] = chunk[15];
      case 15:
        uniqueValues[chunk[14]] = chunk[14];
      case 14:
        uniqueValues[chunk[13]] = chunk[13];
      case 13:
        uniqueValues[chunk[12]] = chunk[12];
      case 12:
        uniqueValues[chunk[11]] = chunk[11];
      case 11:
        uniqueValues[chunk[10]] = chunk[10];
      case 10:
        uniqueValues[chunk[9]] = chunk[9];
      case 9:
        uniqueValues[chunk[8]] = chunk[8];
      case 8:
        uniqueValues[chunk[7]] = chunk[7];
      case 7:
        uniqueValues[chunk[6]] = chunk[6];
      case 6:
        uniqueValues[chunk[5]] = chunk[5];
      case 5:
        uniqueValues[chunk[4]] = chunk[4];
      case 4:
        uniqueValues[chunk[3]] = chunk[3];
      case 3:
        uniqueValues[chunk[2]] = chunk[2];
      case 2:
        uniqueValues[chunk[1]] = chunk[1];
      case 1:
        uniqueValues[chunk[0]] = chunk[0];
    }
  } else {
    uniqueValues[chunk[24]] = chunk[24];
    uniqueValues[chunk[23]] = chunk[23];
    uniqueValues[chunk[22]] = chunk[22];
    uniqueValues[chunk[21]] = chunk[21];
    uniqueValues[chunk[20]] = chunk[20];
    uniqueValues[chunk[19]] = chunk[19];
    uniqueValues[chunk[18]] = chunk[18];
    uniqueValues[chunk[17]] = chunk[17];
    uniqueValues[chunk[16]] = chunk[16];
    uniqueValues[chunk[15]] = chunk[15];
    uniqueValues[chunk[14]] = chunk[14];
    uniqueValues[chunk[13]] = chunk[13];
    uniqueValues[chunk[12]] = chunk[12];
    uniqueValues[chunk[11]] = chunk[11];
    uniqueValues[chunk[10]] = chunk[10];
    uniqueValues[chunk[9]] = chunk[9];
    uniqueValues[chunk[8]] = chunk[8];
    uniqueValues[chunk[7]] = chunk[7];
    uniqueValues[chunk[6]] = chunk[6];
    uniqueValues[chunk[5]] = chunk[5];
    uniqueValues[chunk[4]] = chunk[4];
    uniqueValues[chunk[3]] = chunk[3];
    uniqueValues[chunk[2]] = chunk[2];
    uniqueValues[chunk[1]] = chunk[1];
    uniqueValues[chunk[0]] = chunk[0];
  }
};

const filterValues_duff_device = (values) => {
  const uniqueValues = {};

  let iterations = Math.ceil(values.length / CHUNK_SIZE);

  let offset;

  while (iterations) {
    offset = (iterations - 1) * CHUNK_SIZE;

    duff25(values.splice(offset, CHUNK_SIZE), uniqueValues);
    // TODO: copying is unacceptably slow, but splice destroys the input
    // duff25(ids.slice(offset, offset + CHUNK_SIZE), uniqIds);
    iterations--;
  }

  return Object.values(uniqueValues);
};
module.exports = filterValues_duff_device;
