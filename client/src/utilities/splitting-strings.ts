export const splitString = (chips: string) => {
  let usingChips: string[] = [];

  let start = 0;
  for (let i = 0; i < chips.length; i++) {
    if (chips[i] === " ") {
      usingChips.push(chips.substring(start, i));
      start = i + 1;
    } else if (i === chips.length - 1) {
      usingChips.push(chips.substring(start, i + 1));
    }
  }

  return usingChips;
};
