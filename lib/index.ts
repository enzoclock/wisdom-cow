import { say } from "cowsay";
import quotes from "../data/quotes";

export function wisdomCowSays() {
  return say({ text: getRandomQuote() });
}

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const { text, author } = quotes[randomIndex];
  
  if (!author) { return text; }

  return `${text}\n\n${author}.`;
}
