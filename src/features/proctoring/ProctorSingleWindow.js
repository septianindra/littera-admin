import React from 'react'
import { useParams } from 'react-router-dom'

function ProctorSingleWindow() {
  let { id } = useParams()
  return (
    <>
      <h5 className="mx-5 my-4">ID : {id} </h5>
      <div className="d-flex justify-content-center align-content-center">
        <div
          className="bg-dark "
          style={{ height: '720px', width: '1280px' }}
        ></div>
      </div>
    </>
  )
}

export default ProctorSingleWindow
