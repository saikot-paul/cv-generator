function validateUrl(url: string) {
  try {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "https://" + url;
    }
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}


export default validateUrl;
