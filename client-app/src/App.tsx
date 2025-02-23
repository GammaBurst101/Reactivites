
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Button, Header, List } from 'semantic-ui-react';

function App() {
  const [activities, SetActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
          .then(response => SetActivities(response.data))
  }, [])


  return (
    <div>
      <Header as='h1' icon='users' content='Reactivities' />
      <List>
        {
          activities.map((activity:any) => (
            <List.Item key={activity.id}> {activity.title} </List.Item>
          ))
        }
      </List>
    </div>
  )
}

export default App
