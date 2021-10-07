box.hashPassword = function hashPassword(password, x) {
  const oneCode = "1".charCodeAt(0);
  const upperACode = "A".charCodeAt(0);
  const lowerACode = "a".charCodeAt(0);
  const diff = lowerACode - upperACode;

  return password
    .split("")
    .map((char) => {
      let code = char.charCodeAt(0);

      if (code >= upperACode) {
        let from, to;

        if (code < lowerACode) {
          from = upperACode;
          to = lowerACode;
        } else {
          from = lowerACode;
          to = upperACode;
        }

        code = ((code - from + x) % 26) + to;
      } else code = ((code - oneCode + x) % 10) + oneCode;

      return String.fromCharCode(code);
    })
    .join("");
};
