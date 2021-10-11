export const getUsers = async() => {
  const responce = await fetch('https://jsonplaceholder.typicode.com/users?_start=0&_limit=4')
  const users = responce.json();

  return users
}
