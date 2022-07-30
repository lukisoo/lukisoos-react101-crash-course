import { Link } from 'react-router-dom'

const Counter = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Counter</h1>
        </Link>
      </div>
    </header>
  )
}

export default Counter