import React, { useEffect } from "react";
import { useHistory } from "react-router-dom"; //built-in react router hook
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api"; //note .. to leave folder

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]); //note the dependency array

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
    history.push("/quotes"); //navigate the the quotes page
  };
  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;
// note how we have the pages we are rendering as separate components
// and have components inside -- better organization
// note the quoteData name given to the function argument -- good data naming convention
// note how we implemented programmatic navigation in this component
// want to trigger an action once another action is finished
// useHistory hook --> allows us to change the browser history (of pages we have visited)
//note the difference between push and replace (replace is like a redirect and cannot go back - push allows us to go back)
