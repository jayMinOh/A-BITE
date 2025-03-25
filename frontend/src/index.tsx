import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {AuthProvider} from './store/AuthContext';
import {LoadingProvider} from "./store/LoadingContext";

const rootContainer = document.getElementById('root');
if(!rootContainer){
    throw new Error("not find by root");
}
const root = ReactDOM.createRoot(rootContainer);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <AuthProvider>
              <LoadingProvider>
                  <App />
              </LoadingProvider>
          </AuthProvider>
      </QueryClientProvider>
  </React.StrictMode>
);
