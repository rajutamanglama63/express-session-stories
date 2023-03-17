const loggedIn = (value) => {
  localStorage.setItem("user", value);
};

const getUser = () => {
  let user = localStorage.getItem("user");
  return user;
};

const loggedOut = () => {
  localStorage.removeItem("user");
};

export default { loggedIn, getUser, loggedOut };
