import ccav from "../ccavutil";

const { workingKey } = process.env;

export function postRes(data: { encResp: string }): string {
  const encryption = data.encResp;
  if (workingKey) {
    const ccavresponse = ccav.decrypt(encryption, workingKey);

    let pData = "<table><tr><td>";
    pData = pData + ccavresponse.replace(/=/gi, "</td><td>");
    pData = pData.replace(/&/gi, "</td></tr><tr><td>");
    pData = pData + "</td></tr></table>";
    const htmlcode = `<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>Response Handler</title><style>.container {
    width: 80%; 
    margin: 0 auto; 
    padding: 20px;
    border: 1px solid #ccc; 
    font-family: Arial, sans-serif;
  }

  .heading {
    text-align: center; 
    margin-bottom: 20px; 
  }

  table {
    width: 100%;
    border-collapse: collapse; 
  }

  th, td {
    padding: 8px; 
    text-align: left; 
    border-bottom: 1px solid #ccc; 
  }

  th {
    background-color: #f2f2f2; 
  }
  .goback {
    text-align: center;
    margin-top: 20px;
  }
  </style></head><body><div class="container"><div  class="heading"><h2>Response Page</h2></div><div>
    ${pData}
    </div></div> <div class="goback" onclick="myFunction()">
    Go back to app
  </div></body><script>function myFunction(){ window.location.href = "/" }</script></html>`;
    return htmlcode;
  }
  return "Provide Working Key";
}
