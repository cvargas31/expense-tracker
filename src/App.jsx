import { AddTransaction } from "./components/AddTransaction"
import { Balance } from "./components/Balance"
import { IncomeExpenses } from "./components/IncomeExpenses"
import { Navbar } from "./components/Navbar"
import { TransactionFilters } from "./components/TransactionFilters"
import { TransactionList } from "./components/TransactionList"
import { GlobalStyle } from "./styles/GlobalStyles"


function App() {

  return (
    <>
      <GlobalStyle />
      <Navbar/>
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>
    </>
  )
}

export default App
