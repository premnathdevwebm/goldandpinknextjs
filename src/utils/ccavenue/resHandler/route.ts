import { postRes } from "./ccavResponseHandler";

interface Request {
  // define the shape of the request object
  // for example
  // property1: string;
  // property2: number;
  // ...
}

export function processedData(request: Request) {
  try {
    const resp = postRes(request);
    return resp;
  } catch (err) {
    console.error(err);
    return err;
  }
}