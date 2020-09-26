import { useState } from 'react';

function useShowData(initialValue) {
    const [value, setValue] = useState(true);
    return [value, setValue];
  }
  
  export default useShowData;