import React from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom"; //note the useRouteMatch built-in hook
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];

// will eventually refact the DUMMY_QUOTE array

const QuoteDetail = () => {
  const match = useRouteMatch(); //note the added flexibility this adds

  const params = useParams(); //note the use of useParams

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  console.log("match: ", match);
  console.log(match.url);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;

// note -- only will see comments if have comments at end of url
// above is a nested route
// note did not need to use template literal and could have just done /quotes/:quoteId/comments
// would need to use template literal if we were creating a link
// note how we returned if no quote was found
// note the use of a nested route (creative to define in here -- will always show first nested route when on this page)
// note -- we need eact so does not display load comments when on the comments page
