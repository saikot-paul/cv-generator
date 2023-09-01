function validateAlpha(input: string) {
  const text_pattern = /^[a-zA-Z0-9.,%]+$/;
  return text_pattern.test(input);
}

export default validateAlpha;
