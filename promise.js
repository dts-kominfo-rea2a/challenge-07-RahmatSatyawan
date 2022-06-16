const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const arrayEmosi = (await promiseTheaterIXX()).concat((await promiseTheaterVGC()));
    return arrayEmosi.filter(element => (element.hasil === emosi)).length;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  promiseOutput,
};
