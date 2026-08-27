import React, { Component, ReactNode, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Application runtime error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center space-y-4">
          <h1 className="text-3xl font-bold text-orange-400">Apex Air Solutions</h1>
          <p className="text-slate-300 max-w-md text-sm">
            Something went wrong while initializing the video engine.
          </p>
          <a
            href="https://sites.leadconnectorhq.com/preview/zWn9C136Lu8hSN8Y1Vi8?notrack=true"
            className="bg-orange-500 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-orange-600 transition-all text-sm inline-block"
          >
            Go Directly to Funnel Booking →
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>
  );
}
