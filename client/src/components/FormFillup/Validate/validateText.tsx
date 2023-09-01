function validateText(input: string) {

  const trimmedInput = input.split(" ").join("");
  const text_pattern = /^[a-zA-Z]+$/;

  return text_pattern.test(trimmedInput);
}

export default validateText;
