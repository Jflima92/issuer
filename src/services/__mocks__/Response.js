export const Response = (status, statusText) => {
  let response = JSON.stringify({
    token: 'e245106dd6e84fed994e00d1cd9d1ad2',
    message: 'Wrong Credentials'
  });
  
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      'Content-type': 'application/json'
    },
  });
};
