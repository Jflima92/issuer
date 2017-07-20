export function login(username, password) {
  return new Promise((resolve, reject) => {
    if (password !== '' || username !== '') {
      resolve('e245106d-d6e8-4fed-994e-00d1cd9d1ad2')
    }
    else {
      throw new Error("Wrong Credentials");
    }
  });
}