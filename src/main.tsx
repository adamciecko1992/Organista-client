import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { TranslationsManager } from './i18n/TranslationsContext'
import './styles/index.scss'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <TranslationsManager>
    <App />
    </TranslationsManager>
  </Provider>
)
