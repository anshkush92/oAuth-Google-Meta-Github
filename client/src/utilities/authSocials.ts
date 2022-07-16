export const googleAuth = () => {
  // Open the google Auth window, where google accounts are there to authenticate
  //   For now not changing the React URL, will change it later
  window.open("http://localhost:8000/auth/google", "_self");
};

export const socialLogout = () => {
  // Opens a new window / current in which we moved to the logged out screen
  //   For now not changing the React URL, will change it later, just need to add "_self"
  window.open("http://localhost:8000/auth/logout", "_self");
};
