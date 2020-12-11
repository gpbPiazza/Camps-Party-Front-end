import api from "../config/api";
// eslint-disable-next-line consistent-return
async function ActivitiesCompleted(userData, token) {
  try {
    const { data } = await api.post(`event/activities`, userData, {
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
export default ActivitiesCompleted;
