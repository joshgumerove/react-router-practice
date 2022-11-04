import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const addQuoteHandler = (quoteData) => {
    console.log("quoteData: ", quoteData);
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
// note how we have the pages we are rendering as separate components
// and have components inside -- better organization
// note the quoteData name given to the function argument -- good data naming convention
