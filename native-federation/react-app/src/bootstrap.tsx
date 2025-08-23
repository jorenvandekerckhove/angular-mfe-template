import ReactDOM from 'react-dom/client'
import App from './App'

export function mount(container: HTMLElement) {
    const root = ReactDOM.createRoot(container)
    root.render(<App />)
}