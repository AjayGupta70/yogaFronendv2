import React from 'react';
import AdmissionForm from '../src/AdmissionForm'; // Assuming both files are in the same directory
import Navbar from '../src/navbar.js'; 
import Footer from '../src/footer.js';
function App() {
  return (
    <div className="App">
      <Navbar /> 
      <AdmissionForm />
      <br/>
      <br/>

      <Footer />
    </div>
  );
}

export default App;
