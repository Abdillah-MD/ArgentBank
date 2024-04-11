import { Component } from 'react';
import PropTypes from "prop-types"

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Méthode appelée lorsque des erreurs sont capturées dans les enfants du composant
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by error boundary:', error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Affiche un message d'erreur personnalisé lorsque des erreurs sont capturées
      return <h2>Something went wrong. Please try again later.</h2>;
    }

    // Rendu des enfants normalement si aucune erreur n'a été capturée
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
}

export default ErrorBoundary;
