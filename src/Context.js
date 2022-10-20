import React, {createContext, useState, useEffect, useContext} from 'react';

const Theme = createContext();
function AppProvider({children}) {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  console.log(theme);
  
  useEffect(() => {
    // Runs on every render. => without dependency array.
    // Single time only. => with empty dependency array.
    // when the component is being mounted.
    // whenever there is change i value. => with state value or any value(depends on logic) dependency array.
    localStorage.setItem('theme', theme);
    console.log(theme);
  }, [theme]);
  return (
    // <Theme.Provider theme={theme} setTheme={setTheme}> // We can pass value this way also.
    <Theme.Provider value={{theme, setTheme}}>
        {children}
    </Theme.Provider>
  );
}
export const useTheme = () => {
    return useContext(Theme);
}
export default AppProvider;
