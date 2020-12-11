import api from "../config/api";
// eslint-disable-next-line consistent-return
async function Ticket(token) {
  try {
    const { data } = await api.get(`event/ticket`, {
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
export default Ticket;
