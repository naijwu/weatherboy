import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { concepts, colour, topics } from './constants'

function Home() {

  const [displayConcepts, setDisplayConcepts] = useState([]); 

  useEffect(() => {
    let displayArray = []

    for(let i = 0; i < concepts.length; i++) {

      let subtopics = []
      let topic = i + 1

      for (const [key, value] of Object.entries(concepts[i])) {
        subtopics.push(
            <Link 
              to={`/${topic}/${key}`} 
              className="subtopic"
              style={{
                  color: colour[i]
              }}>
                <div 
                  className="subtopic-outline"
                  style={{
                      borderColor: colour[i]
                  }}>
                    {key}
                </div>
                <div className="subtopic-text">
                    {value.name}
                </div>
            </Link>
        );
      }

      displayArray.push(
        <div className="concept">
            <div className="concept-head">
                {topic}. {topics[i]}
            </div>
            <div className="subtopics">
                {subtopics}
            </div>
        </div>
      )
    }
    
    setDisplayConcepts(displayArray)

  }, [])




  return (
    <div className="app-container">
      {displayConcepts}

      <div className="concept">
            <div className="concept-head">
                Big Boy
            </div>
            <div className="subtopics">
                <Link to={`/big`} className="subtopic" style={{ color: "red" }}>
                    <div className="subtopic-outline" style={{ borderColor: "red" }}>
                        R
                    </div>
                    <div className="subtopic-text">
                        Single page with all concepts (to ctrl+f)
                    </div>
                </Link>
            </div>
        </div>
    </div>
  );
}

export default Home;
