import React, { useEffect, useState } from 'react'
import Card from './Card';

const Room = () => {
    const [rooms , setRooms] = useState([]);
    useEffect(()=>{
        fetch("/room.json")
        .then(data => data.json())
        .then(set => setRooms(set))
    },[])

  return (
    <div>
        <h2>Our Room for You</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {
                rooms && rooms.map(room => <Card room={room}></Card>)
            }
        </div>
    </div>
  )
}

export default Room