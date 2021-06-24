import React from 'react';
export const StoreContext = React.createContext(null)
export default ({ children }) => {
    const teamMembersNames = ['John', 'Mary', 'Jason', 'David']
  
    const [sharing, setSharing] = React.useState([])
    const [help, setHelp] = React.useState([])
    const [pairing, setPairing] = React.useState(teamMembersNames)
  
    const store = {
      sharing: [sharing, setSharing],
      help: [help, setHelp],
      pairing: [pairing, setPairing],
    }
  
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  }