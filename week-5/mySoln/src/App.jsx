import './App.css'

function App() {

  return (
    <>
      <div>
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
      <button style={{flexDirection:"row"}}>Linkedin</button> <br /> <br />
      <button style={{flexDirection:"row"}}>Twitter</button>
    </div>
  )
  }

  const styles = {
    card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px',
      maxWidth: '400px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f8f9fa'
    },
    name: {
      fontSize: '24px',
      marginBottom: '10px',
      color: '#333',
    },
    description: {
      fontSize: '16px',
      color: '#555',
      marginBottom: '15px',
    },
    socialLinks: {
      display: 'flex',
      marginBottom: '15px',
    },
    link: {
      textDecoration: 'none',
      color: '#fff', // Text color
      padding: '10px 15px', // Padding for the button
      borderRadius: '5px', // Border radius for rounded corners
      backgroundColor: '#007BFF', // Background color for the button
      display: 'inline-block', // Display as inline-block to be side by side
      margin: '10px', // Margin between buttons
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle lift
    },
    interestsHeader: {
      fontSize: '18px',
      marginBottom: '10px',
      color: '#333',
    },
    interestsList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    interestItem: {
      fontSize: '14px',
      marginBottom: '5px',
      color: '#555',
    },
  };

export default App
