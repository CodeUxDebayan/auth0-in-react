import React from 'react'

function Home() {
  const storage = window.localStorage.getItem("access_token");
  

  return (

    <div>

      {
        storage ? (<h1>Welcome Home</h1>) : (<h2>Please Login</h2>)
      }

    </div>
  )
}

export default Home
