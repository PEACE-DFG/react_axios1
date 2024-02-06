import React from 'react'

function Index(props) {
  return (
    <div>

      <div className="card" style={{ width: '16rem' }}>
        <img src={props.images[0]} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href="#" className="btn btn-warning">Details</a>
        </div>
      </div>
    </div>
  )
}

export default Index