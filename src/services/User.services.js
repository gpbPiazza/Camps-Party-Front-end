import api from "../config/api";

// eslint-disable-next-line consistent-return
async function signUpCompleted(userData, token) {
  try {
    const { data } = await api.put(`user/complete-register`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (data) {
      return { success: data };
    }
  } catch (error) {
    return error;
  }
}

export default signUpCompleted;
