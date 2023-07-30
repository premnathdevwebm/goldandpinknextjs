import { postReq } from "./ccavRequestHandler";

const { API_URL, merchantId, workingKey, accesscode } = process.env;

interface User {
  username: string;
  address1: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
  email: string;
  phone: string;
}

interface Request {
  amount: string;
  user: User;
}

export function requestProcess(request: Request) {
  try {
    const data = {
      merchantId: merchantId,
      workingKey: workingKey,
      accesscode: accesscode,
      reqUrl: `${API_URL}ccares`,
      body: {
        amount: parseFloat(request.amount),
        user: {
          username: request.user.username,
          address1: request.user.address1,
          city: request.user.city,
          state: request.user.state,
          zipcode: request.user.zipcode,
          country: request.user.country,
          email: request.user.email,
          phone: request.user.phone,
        },
      },
    };
    const ccAvenue = postReq(data);
    return { data: ccAvenue };
  } catch (err) {
    return err;
  }
}
