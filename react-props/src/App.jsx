import Student from "./Student.jsx"

function App() {

  return (
    <>
    {/* String are in "" */}
    {/* Numbers are in {} */}
    {/* Props are passed in as a key avlue pair  */}
    {/* Booleans can not be displayed in the DOM */}
    <Student name="Mirajane" surname="Strauss" isStudent={true} />
    <Student name="Erza" surname="Scarlet" isStudent={false} />
    <Student name="Lucy" surname="Heartfilia" isStudent={false} />
    <Student name="Rahul" surname="Heeralal" isStudent={false} />
    <Student/>
    </>
  )
}

export default App
