import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom"; //allows us to change the url
// note hte useLocation hook built into react
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

// note how this is not defined inside the component itself

const QuoteList = (props) => {
  const history = useHistory(); //note how must be in the top level

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search); //built-into the browser (not React)
  const isSortingAscending = queryParams.get("sort") === "asc"; // will return asc

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    history.push("/quotes?sort=" + (isSortingAscending ? "desc" : "asc")); //to add the query parameter at the end of url (does not change the page) (note does not change when pushing a second time)
    //re-renders the component
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

// note how we changed the array we are mapping over etc.

export default QuoteList;

// working with query parameters in this component
