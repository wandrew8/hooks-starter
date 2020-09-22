import { useState } from 'react';

function useShowModal(initialValue) {
    const [value, setValue] = useState(true);
    return [value, setValue];
  }
  
  export default useShowModal;