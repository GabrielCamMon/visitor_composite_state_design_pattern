export default (foods, type) => {
  return foods.filter((foods) => {
    console.log(type);
    const typeMatch = foods.type.includes(type);
    return !type ? true : typeMatch;
  });
};
