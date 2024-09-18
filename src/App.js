import './App.css';
import {useState} from 'react'
import Title from "./components/title"

function App() {
  const [showContent, setShowContent] = useState(true)
  const [events, setEvents] = useState([
    {title: "akhror's birthday party", id: 1},
    {title: "doniyor's live stream", id: 2},
    {title: "match: manchester united vs barcelona", id: 3}
  ])
 

  const handleDelete = (id) => {
    // const filteredEvents = events.filter((event) => {
    //   return event.id !== id
    // })
    // setEvents(filteredEvents)


    //ikkinchi usul // bundan foydalasnish maslahat berilmiydi 
    // setEvents(events.filter((event) => {
    //   return event.id !== id
    // }))

    //uchinchi usul
      setEvents((prev) => {
        return prev.filter((event) => {
          return event.id !== id
        })
      })
    
  }

  return (
    <div className="App">
      <Title title="Akhror Kingdom 👑" subtitle="Salom"/>
      {showContent && <button onClick={() => setShowContent(false)}>Hide content</button>}
      {!showContent && <button onClick={() => setShowContent(true)}>Show content</button>}

      {showContent && <div>
        {events.length == 0 && <h3>Not Content Yet ;(</h3>}
        {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>{event.title}</h2>
            <button onClick={() => handleDelete(event.id)}>delete</button>
          </div>
        )
      })}
      </div>}
    </div>
  );
}

export default App;
