// SHORTHEN TITLE OF PRODUCTS
const shortenText = (title) => {
  return title.split(" ").slice(0, 3).join("");
};

//REMOVE THE "-" BETWEEN ID TO SHOW LIKE A STRING CHARACTER
const modifiedString = (id) => {
  return id.replace(/-/g, "");
};

export { shortenText, modifiedString };
