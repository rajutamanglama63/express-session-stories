const loggedIn = (value) => {
  localStorage.setItem("user", value);
};

const loggedUserId = (userId) => {
  localStorage.setItem("id", userId);
};

const getLoggedUserId = () => {
  let id = localStorage.getItem("id");
  return id;
};

const getUser = () => {
  let user = localStorage.getItem("user");
  return user;
};

const loggedOut = () => {
  localStorage.removeItem("user");
};

const reload = () => {
  window.location.reload(true);
};

export default {
  loggedIn,
  getUser,
  loggedOut,
  loggedUserId,
  getLoggedUserId,
  reload,
};
