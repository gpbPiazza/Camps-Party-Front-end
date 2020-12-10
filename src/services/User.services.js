import api from "../config/api";

// eslint-disable-next-line consistent-return
async function signUpCompleted(userData, token) {
  try {
    const { data } = await api.post(`user/complete-register`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (data) {
      return data;
    }
  } catch (error) {
    return error;
  }
}

export default signUpCompleted;
