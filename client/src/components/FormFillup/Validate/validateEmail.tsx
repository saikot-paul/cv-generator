function validateEmail(email: string) {
  const email_pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return email_pattern.test(email);
}

export default validateEmail;
