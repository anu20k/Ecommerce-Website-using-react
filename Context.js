import React, {useContext} from "react";

const AppContext = React.createContext();

//provider

const AppProvider = ({children}) => {
    return <AppContext.Provider>
       {children}
       </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
};

export {AppContext, AppProvider, useGlobalContext};