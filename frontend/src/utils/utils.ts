const numToWon = (num: number) => {
  return num.toLocaleString();
};

const getEllipisisStyle = (lineNumber: number) => {
  return {
    overflow: "hidden",
    textOverflow: "ellipsis",
    "-webkitLineClamp": lineNumber.toString(),
    width: "100%",
  };
};

export { numToWon, getEllipisisStyle };
