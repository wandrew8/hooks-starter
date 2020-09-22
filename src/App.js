import React, { useRef } from 'react';
import Toggle from './Toggle';
import Modal from './components/Modal';
import useTitleInput from './hooks/useTitleInput';


const App = () => {
  const [name, setName] = useTitleInput('');
  const ref = useRef();

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        formSubmit(name, setName, ref);
        }}>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter Your Name..." />
        <button type="submit">Submit</button>
      </form>
      <p>Welcome{name ? `, ${name}!` : '!'}</p>
      <Toggle />
      <Modal/>
    </div>
  );
};

const formSubmit = (value, setValue, ref) => {
  console.log(`email sent to ${value}!`)
  setValue('');
  ref.current.classList.add('hidden');
}

export default App;
