import axios from "axios";

async function findAddress(CEP) {
  if (CEP.length < 9) {
    return null;
  }
  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${CEP}/json/`);
    if (data) {
      return data;
    }
    return data.error;
  } catch (error) {
    return null;
  }
}

export default findAddress();
