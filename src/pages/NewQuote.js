import React from "react";
import { useHistory } from "react-router-dom"; //built-in react router hook
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log("quoteData: ", quoteData);

    history.push("/quotes"); //navigate the the quotes page
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
// note how we have the pages we are rendering as separate components
// and have components inside -- better organization
// note the quoteData name given to the function argument -- good data naming convention
// note how we implemented programmatic navigation in this component
// want to trigger an action once another action is finished
// useHistory hook --> allows us to change the browser history (of pages we have visited)
//note the difference between push and replace (replace is like a redirect and cannot go back - push allows us to go back)
