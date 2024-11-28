import React, { Children, createContext , FC, useContext } from 'react';

// Creat a separate file for contexts 
// 1. Create Context and add default value
export const TestContext = createContext('Default value');


// 2. Create a custom hook(function) for convenience
export const useTestContext = ()  => useContext(TestContext)

// 3. Create a Context  provider component that will provide contexts
// special prop in React that represents whatever is nested inside a component when it is rendered.
export const TestContextProvider:FC<{children: React.ReactNode , }> = ({children }) =>{
    return(
        // <TestContext.Provider value={""}>
         <TestContext.Provider value='Got the context'> 
            {children}
        </TestContext.Provider>
    )
}

// that tells that whatever is wrapped by 
// it's component(ThemeContextProvider) will 
// render(App.tsx) 

