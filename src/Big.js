
import { concepts } from './constants'
import Page from './components/Page'
import { useEffect, useState } from 'react'

const Big = () => {

    const [returnData, setReturnData] = useState([])

    useEffect(() => {
        let returnVal = []

        for (let i = 0; i < concepts.length; i++) {
            let topic = i + 1
            for (const [key, value] of Object.entries(concepts[i])) {
                returnVal.push(
                  <Page
                    topic={topic}
                    subtopic={key}
                    name={value.name}
                    url={value.url} />
                )
            }
        }

        setReturnData(returnVal)
    }, [])

    return returnData
}

export default Big;