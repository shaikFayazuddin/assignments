import './App.css'

function App() {

  return (
    <>
      <div className='profile'>
        <Bio name="Fayazuddin"
         description="Full Stack Engineer"
         interests={["Running","Reading Books","Arabic Language"]}/>
      </div>
    </>
  )
}

function Bio(props){
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <h2>Interests</h2>
      <p>{props.interests[0]}</p>
      <p>{props.interests[1]}</p>
      <p>{props.interests[2]}</p>
      <button id='button'>Linkedin</button> 
      <button id='button'>Twitter</button>
    </div>
  )
  }

 

export default App
