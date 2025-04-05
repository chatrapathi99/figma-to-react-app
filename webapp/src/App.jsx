import React from 'react';
import Header from './components/Header';
import GeneratedComponent from './components/GeneratedComponent';

function App() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <GeneratedComponent />
      </main>
    </div>
  );
}

export default App;
