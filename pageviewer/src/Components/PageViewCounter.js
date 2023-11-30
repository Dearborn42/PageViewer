import {useState, useEffect} from 'react'

const PageViewCounter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const updateCount = () => {
      const currentCount = Number(localStorage.getItem('views')) || 0;
      localStorage.setItem('views', currentCount + 1);
      setCount(currentCount + 1);
    };
    updateCount();

    // Add event listener for visibility change
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') updateCount();
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {document.removeEventListener('visibilitychange', handleVisibilityChange);};
  }, []);
  return (
    <div>{count}</div>
  )
}

export default PageViewCounter