import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>Hometask for <a href="http://www.tool-kit.tech" target="new">tool-kit.tech</a></h1>

    <div>
      <table border={1} width={300}>
      <tr><th  align='center'>Repo name</th><th>url</th><th>Owner</th></tr>
      <tr><td>Repo 1</td><td><a href='#'>link</a></td><td>user</td></tr>
      <tr><td>Repo 2</td><td><a href='#'>link</a></td><td>user</td></tr>
      <tr><td>Repo 3</td><td><a href='#'>link</a></td><td>user</td></tr>
      <tr><td>Repo 4</td><td><a href='#'>link</a></td><td>user</td></tr>
      <tr><td>Repo 5</td><td><a href='#'>link</a></td><td>user</td></tr>
      <tr><td>Repo 6</td><td><a href='#'>link</a></td><td>user</td></tr>
      <tr><td>Repo 7</td><td><a href='#'>link</a></td><td>user</td></tr>
      </table>

    </div>


      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
