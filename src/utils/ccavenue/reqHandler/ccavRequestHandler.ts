import ccav from "../ccavutil";

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

interface Body {
  merchantId: string;
  reqUrl: string;
  workingKey: string;
  accesscode: string;
  body: {
    amount: number;
    user: User;
  };
}

function createOrderId(): string {
  const timestamp = Date.now().toString();
  const randomNum = Math.floor(Math.random() * 1000).toString();

  const orderId = timestamp + randomNum;

  return orderId;
}

export function postReq(body: Body): string {
  const buffData = Buffer.from(
    `merchant_id=${
      body.merchantId
    }&order_id=${createOrderId()}&currency=INR&amount=${
      body.body.amount / 1
    }&redirect_url=${encodeURIComponent(
      body.reqUrl
    )}&cancel_url=${encodeURIComponent(body.reqUrl)}&language=EN&billing_name=${
      body.body.user.username
    }&billing_address=${body.body.user.address1}&billing_city=${
      body.body.user.city
    }&billing_state=${body.body.user.state}&billing_zip=${
      body.body.user.zipcode
    }&billing_country=${body.body.user.country}&billing_tel=${
      body.body.user.phone
    }&billing_email=${body.body.user.email}&delivery_name=${
      body.body.user.username
    }&delivery_address=${body.body.user.address1}&delivery_city=${
      body.body.user.city
    }&delivery_state=${body.body.user.state}&delivery_zip=${
      body.body.user.zipcode
    }&delivery_country=${body.body.user.country}&delivery_tel=${
      body.body.user.phone
    }&merchant_param1=additional+Info.&merchant_param2=additional+Info.&merchant_param3=additional+Info.&merchant_param4=additional+Info.&merchant_param5=additional+Info.&promo_code=&customer_identifier=`
  );

  const workingKey = body.workingKey;
  const accessCode = body.accesscode;
  const encRequest = ccav.encrypt(buffData.toString(), workingKey);
  const formbody =
    '<form id="nonseamless" method="post" name="redirect" action="https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction"/> <input type="hidden" id="encRequest" name="encRequest" value="' +
    encRequest +
    '"><input type="hidden" name="access_code" id="access_code" value="' +
    accessCode +
    '"><script language="javascript">document.redirect.submit();</script></form>';

  return formbody;
}
