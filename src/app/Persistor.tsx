import {useState} from 'react';
import {useEffect} from 'react';

const Persistor = ({children}) => {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 200);
  }, []);

  if (!isReady) {
    return null;
  }

  return children;
};

export default Persistor;
