import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
// need switch component because only want one active route at the same time
// note the use of a dynamic rout /:quoteId
// note how we used redirect to redirect the root route
// note the identifier given in params -- will be the key that it is created with
// note thee use of the wildcard character -- matches all (needs to be rendered at the end
// the wildcard route must come last
// note query urls are at end of url and start with a question mark (are not mandatory)
