const takeInitialLetters = (fullName: any) => {
  const [firstName, lastName] = fullName.split(" ");
  const firstLetter = firstName?.at(0) || "U";
  const secondLetter = lastName?.at(0) || "S"

  return `${firstLetter}${secondLetter}`;
}

export default takeInitialLetters;
