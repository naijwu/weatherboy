
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import Page from "./components/Page";
import { concepts } from './constants'

const Concept = () => {
    
  const { topic, subtopic } = useParams();

  let pageData = concepts[topic - 1][subtopic];

  return (
      <Page
       topic={topic}
       subtopic={subtopic}
       name={pageData.name}
       url={pageData.url} />
  )

}

export default Concept;