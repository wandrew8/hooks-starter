import { useEffect, useState } from 'react';

function useTitleInput(initialValue) {
    const [value, setValue] = useState('');
    useEffect(() => {
      document.title = value; 
    })
    return [value, setValue];
  }
  
  export default useTitleInput;