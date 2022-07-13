import Vue from "vue";

export default (context) => {
  Vue.prototype.deviceClasses = () => {
    let availableClasses = ["safari", "mobile-tablet"];

    Object.entries(context.$device).forEach(([key, val]) => {
      let myKey = key.replace("Or", "-").replace("is", "").toLowerCase();

      if (val && availableClasses.includes(myKey))
        document.body.classList.add(`is-${myKey}`);
    });
  };
};
