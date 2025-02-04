import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';
import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPage';
import Footer from './Footer/Footer';
import PLP from './Plp/Plp';
import PDP from './Pdp/Pdp';
import { ErrorBoundary } from 'react-error-boundary';
import { errorBoundaryConstants } from './Constants/Constants';
import '../src/ErrorBoundary/ErrorBoundary.css';


const ErrorFallback = ({ resetErrorBoundary }) => {
  return (
    <div role="alert" className="error-boundary">
      <h1>{errorBoundaryConstants.errorHeading}</h1>
      <p>{errorBoundaryConstants.errorDescription}</p>
      <button onClick={() => resetErrorBoundary()} className="error-button">{errorBoundaryConstants.tryAgainButton}</button>
    </div>
  );
};

const App=()=>{
  return(
    <React.StrictMode>
    <Router>
      <Header />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
        }}
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<PLP />} />
          <Route path="/product/:id" element={<PDP />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </Router>
  </React.StrictMode>
  )
}

export default App;