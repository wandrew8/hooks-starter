import { useState } from 'react';

function useShowData(initialValue) {
    const [value, setValue] = useState(false);
    return [value, setValue];
  }
  
  export default useShowData;