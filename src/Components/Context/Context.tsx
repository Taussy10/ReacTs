import React, { Children, createContext , FC, useContext } from 'react';
import Try from './Try';


// Create a separate file for contexts conde

// 1. Create Context and add default value
export const TestContext = createContext('Default value');




// 2. Create a Context  provider component that will provide contexts and take values

export const TestContextProvider:FC<{children: React.ReactNode , }> = ({children }) =>{
    return(
        // <TestContext.Provider value={""}>
         <TestContext.Provider value='Got the context'> 
            {children}
        </TestContext.Provider>
    )
}

// children is special props in react that  tells that whatever is wrapped by 
// it's component(ThemeContextProvider) will 
// rendered(App.tsx) 

// 3. Provide context to the app (see in main.tsx)

// 4. Create a custom hook(function) for using the context
// provide the context in the useContext hook 
export const useTestContext = ()  => useContext(TestContext)

// Let's create another context
// Create the context
export const TryContext = createContext("default")
// it will return an object that has two things 1.Provider

// Create a component that will provide context and take values

export const TryProvider:FC<{children: React.ReactNode}>  = ({children}) => {
    return (
     <TryContext.Provider value={"Hello , learned the context"} >{children}</TryContext.Provider>    
    )
}

// export const TryProvider:FC<{children: React.ReactNode , }> = ({children }) =>{
//     return(
//         // <TestContext.Provider value={""}>
//          <TryContext.Provider value='Hello , learned the context'> 
//             {children}
//         </TryContext.Provider>
//     )
// }

export const provideTryContext = () => useContext(TryContext)