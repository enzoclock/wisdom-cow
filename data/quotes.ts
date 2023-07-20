import quotesJSON from "./quotes.json";

export interface Quote {
  text: string;
  author: string | null;
}

const quotes: Quote[] = quotesJSON;

export default quotes;
