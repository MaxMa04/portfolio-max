export function truncateTextToXWords(text, x) {
    const words = text.trim().split(/\s+/);
    const maxWords = x;
    let truncatedText = words.slice(0, maxWords).join(" ");

    if (words.length > maxWords) {
      truncatedText += "...";
    }

    return truncatedText;
  }