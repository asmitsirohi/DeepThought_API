const validateType = (type) => {
  const typesSet = ["posts", "comments", "albums", "photos", "todos", "users"];

  if (typesSet.includes(type)) {
    return true;
  }

  return false;
};

module.exports = validateType;
