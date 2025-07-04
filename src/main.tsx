/**
 * Main entry point for the FreshFold Durban application
 * Sets up React root and renders the App component
 */

import { createRoot } from 'react-dom/client'
import './shadcn.css'
import App from './App'

const rootElement = document.getElementById('app')
if (!rootElement) {
  throw new Error('Failed to find the root element')
}

const root = createRoot(rootElement)
root.render(<App />)
