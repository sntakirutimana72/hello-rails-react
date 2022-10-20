import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchGreetingMsg } from '../redux/features/greetingSlice'

const Greeting = () => {
  const { error, greeting, isLoading } = useSelector((state) => state.greeting)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isLoading) dispatch(fetchGreetingMsg())
  }, [dispatch])

  return (
    <div>
      {isLoading && <p>loading...</p>}

      {error && <p>Error occurred</p>}

      {greeting && <p>{greeting.text}</p>}
    </div>
  )
}

export default Greeting
