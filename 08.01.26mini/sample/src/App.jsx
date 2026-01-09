import LoginForm from './components/LoginForm'
import TodoList from './components/TodoList'
import ContactForm from './components/ContactForm'
import SubscriptionForm from './components/SubscriptionForm'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <h1>React Forms Collection</h1>
      <div className="forms-grid">
        <LoginForm />
        <TodoList />
        <ContactForm />
        <SubscriptionForm />
      </div>
    </div>
  )
}

export default App
