export const saveJobToLocalStorage = () => {
  const jobs = JSON.parse(localStorage.getItem("job")) || [];
};
