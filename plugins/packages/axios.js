export default (context, req) => {
  context.$axios.defaults.headers.common = {
    Accept: "application/json",
  };
};
