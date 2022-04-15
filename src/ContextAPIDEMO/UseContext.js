import React  from "react";

const UserContext=React.createContext()


// For Default Value
// const UserContext=React.createContext('Abhay')

const UserProvider=UserContext.Provider

const UserConsumer=UserContext.Consumer

export {UserProvider,UserConsumer} ;

export default UserContext;