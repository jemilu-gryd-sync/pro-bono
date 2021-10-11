const signatureStrings=
`
(request-target): get /protected
host: example.org
date: Tue, 10 Apr 2018 10:30:32 GMT
cache-control: max-age=60, must-revalidate
x-test: Hello world
`

const crypto = require("crypto")
const hmac = crypto.createHmac("sha256", "secret2");



const signatureString = "keyid: 987654321" + "\n" + "algorithm: hmac-256"
const digest = hmac.update(signatureString).digest("base64");

console.log(digest);
/**
 * crypto.createHmac('sha256', secret)
 */


  /* Create the signature string */
//   const missingRequiredHeaders = [];
//   signatureParams.signingString = '';
//   signatureParams.headers.forEach((header, index, arr) => {
//     if (header === '(request-target)') {
//       signatureParams.signingString += `(request-target): ${req.method.toLowerCase()} ${req.path}`;
//     } else if (req.headers[header]) {
//       signatureParams.signingString += `${header}: ${req.headers[header]}`;
//     } else {
//       missingRequiredHeaders.push(header);
//     }
//     if (index < arr.length - 1) {
//       signatureParams.signingString += '\n';
//     }
//   });

//   function generateSignatureString(headers) {

//   }