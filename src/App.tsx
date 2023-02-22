import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobaStyle } from './styles/global'
import { Transaction } from './pages/Transactions'
import { TransactionsProvider } from './contexts/Transactions'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobaStyle />

      <TransactionsProvider>
        <Transaction />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
