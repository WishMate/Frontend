const calcRem = (pxSize) => `${pxSize / 16}rem`;

const flexRowSet = (just = "center", align = "center") => {
  return `display: flex;
  justify-content: ${just};
  align-items: ${align};`;
};

const flexColumnSet = (just = "center", align = "center") => {
  return `display: flex;
  flex-direction: column;
  justify-content: ${just};
  align-items: ${align};`;
};

const colors = {
  mainColor: "#F0742E",
  subColor: "#F7CDB6",
  black: "#040404",
  white: "#FFFFFF",
};

export const Theme = {
  calcRem,
  flexRowSet,
  flexColumnSet,
  colors,
};
