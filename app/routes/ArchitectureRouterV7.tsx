import React from 'react'

function ArchitectureRouterV7() {
  return (
    <>
    
<section className="bg-dark rounded-5" data-bs-theme="dark">
  <div className="container">
    <div className="inner-container-small m-0 mb-7">
      <h2 className="mb-4">Architecture du Projet React Router v7</h2>
      <p className="mb-0">Structure complète d'un template React + React Router v7 avec rendu SSR activé et TailwindCSS configuré via Vite. Architecture optimisée pour le développement moderne.</p>
    </div>
    <div className="row">
      <div className="col-12">
        <hr /> {/* Divider */}
        {/* Dossier app */}
        <div className="row align-items-center position-relative py-4">
          <div className="col-md-2 mb-3 mb-md-0">
            <div className="bg-primary bg-opacity-10 p-3 rounded text-center">
              <span className="display-6">📁</span>
            </div>
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
            <h5 className="mb-0"><span className="text-white">/app</span></h5>
            <p className="small text-muted mb-0 mt-1">Dossier principal</p>
          </div>
          <div className="col-md-5 ms-auto">
            <p className="mb-0">Cœur de l'application React. Contient tous les composants, routes, styles et logique applicative. Architecture centralisée avec React Router v7.</p>
          </div>
        </div>
        <hr /> {/* Divider */}
        {/* Dossier routes */}
        <div className="row align-items-center position-relative py-4">
          <div className="col-md-2 mb-3 mb-md-0">
            <div className="bg-success bg-opacity-10 p-3 rounded text-center">
              <span className="display-6">🛣️</span>
            </div>
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
            <h5 className="mb-0"><span className="text-white">app/routes/</span></h5>
            <p className="small text-muted mb-0 mt-1">Routes applicatives</p>
          </div>
          <div className="col-md-5 ms-auto">
            <p className="mb-0">Contient les fichiers de routes React Router. Chaque fichier TSX définit une route avec ses loaders/actions intégrés (home.tsx, routes.ts, etc.).</p>
          </div>
        </div>
        <hr /> {/* Divider */}
        {/* root.tsx */}
        <div className="row align-items-center position-relative py-4">
          <div className="col-md-2 mb-3 mb-md-0">
            <div className="bg-warning bg-opacity-10 p-3 rounded text-center">
              <span className="display-6">🏠</span>
            </div>
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
            <h5 className="mb-0"><span className="text-white">root.tsx</span></h5>
            <p className="small text-muted mb-0 mt-1">Point d'entrée HTML/Layout</p>
          </div>
          <div className="col-md-5 ms-auto">
            <p className="mb-0">Point d'entrée principal avec ErrorBoundary. Gère Meta, Links, Scripts, ScrollRestoration pour SSR. Contient la structure HTML de base renvoyée par le serveur.</p>
          </div>
        </div>
        <hr /> {/* Divider */}
        {/* app.css */}
        <div className="row align-items-center position-relative py-4">
          <div className="col-md-2 mb-3 mb-md-0">
            <div className="bg-info bg-opacity-10 p-3 rounded text-center">
              <span className="display-6">🎨</span>
            </div>
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
            <h5 className="mb-0"><span className="text-white">app.css</span></h5>
            <p className="small text-muted mb-0 mt-1">Styles globaux</p>
          </div>
          <div className="col-md-5 ms-auto">
            <p className="mb-0">Styles globaux avec TailwindCSS. Importé dans root.tsx. Utilise les utilities de Tailwind via la configuration Vite pour un styling optimisé.</p>
          </div>
        </div>
        <hr /> {/* Divider */}
        {/* react-router.config.ts */}
        <div className="row align-items-center position-relative py-4">
          <div className="col-md-2 mb-3 mb-md-0">
            <div className="bg-primary bg-opacity-10 p-3 rounded text-center">
              <span className="display-6">⚙️</span>
            </div>
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
            <h5 className="mb-0"><span className="text-white">react-router.config.ts</span></h5>
            <p className="small text-muted mb-0 mt-1">Configuration React Router</p>
          </div>
          <div className="col-md-5 ms-auto">
            <p className="mb-0">Configuration globale du moteur React Router. Active le rendu serveur (SSR: true). Définit les routes et la stratégie de rendu pour le build et le développement.</p>
          </div>
        </div>
        <hr /> {/* Divider */}
        {/* vite.config.ts */}
        <div className="row align-items-center position-relative py-4">
          <div className="col-md-2 mb-3 mb-md-0">
            <div className="bg-warning bg-opacity-10 p-3 rounded text-center">
              <span className="display-6">⚡</span>
            </div>
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
            <h5 className="mb-0"><span className="text-white">vite.config.ts</span></h5>
            <p className="small text-muted mb-0 mt-1">Configuration Vite</p>
          </div>
          <div className="col-md-5 ms-auto">
            <p className="mb-0">Configuration Vite avec plugins: Tailwind, React Router Vite plugin, tsconfig-paths. Build optimisé avec HMR en développement et production optimisée.</p>
          </div>
        </div>
        <hr /> {/* Divider */}
        {/* tsconfig.json */}
        <div className="row align-items-center position-relative py-4">
          <div className="col-md-2 mb-3 mb-md-0">
            <div className="bg-blue bg-opacity-10 p-3 rounded text-center">
              <span className="display-6">📄</span>
            </div>
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
            <h5 className="mb-0"><span className="text-white">tsconfig.json</span></h5>
            <p className="small text-muted mb-0 mt-1">Configuration TypeScript</p>
          </div>
          <div className="col-md-5 ms-auto">
            <p className="mb-0">Configuration TypeScript: target ES2022, jsx react-jsx, paths (~/* → ./app/*). Assure un typage fort et une résolution d'imports optimale.</p>
          </div>
        </div>
        <hr /> {/* Divider */}
        {/* package.json */}
        <div className="row align-items-center position-relative py-4">
          <div className="col-md-2 mb-3 mb-md-0">
            <div className="bg-success bg-opacity-10 p-3 rounded text-center">
              <span className="display-6">📦</span>
            </div>
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
            <h5 className="mb-0"><span className="text-white">package.json</span></h5>
            <p className="small text-muted mb-0 mt-1">Dépendances et scripts</p>
          </div>
          <div className="col-md-5 ms-auto">
            <p className="mb-0">Dépendances (React, React Router v7, Tailwind, Vite) et scripts: dev (HMR via react-router dev), build (react-router build), start (serve SSR).</p>
          </div>
        </div>
        <hr /> {/* Divider */}
        {/* Dockerfile */}
        <div className="row align-items-center position-relative py-4">
          <div className="col-md-2 mb-3 mb-md-0">
            <div className="bg-info bg-opacity-10 p-3 rounded text-center">
              <span className="display-6">🐳</span>
            </div>
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
            <h5 className="mb-0"><span className="text-white">Dockerfile</span></h5>
            <p className="small text-muted mb-0 mt-1">Containerisation</p>
          </div>
          <div className="col-md-5 ms-auto">
            <p className="mb-0">Image/containerisation pour deployment. Build multi-stage optimisé. Exécution avec serveur SSR React Router pour déploiement en production.</p>
          </div>
        </div>
        <hr /> {/* Divider */}
        {/* public/ */}
        <div className="row align-items-center position-relative py-4">
          <div className="col-md-2 mb-3 mb-md-0">
            <div className="bg-purple bg-opacity-10 p-3 rounded text-center">
              <span className="display-6">📂</span>
            </div>
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
            <h5 className="mb-0"><span className="text-white">public/</span></h5>
            <p className="small text-muted mb-0 mt-1">Assets statiques</p>
          </div>
          <div className="col-md-5 ms-auto">
            <p className="mb-0">Dossier d'assets statiques: images, fonts, icons, logos (logo-dark.svg, logo-light.svg). Servis directement par le serveur sans traitement.</p>
          </div>
        </div>
        <hr /> {/* Divider */}
        {/* README.md */}
        <div className="row align-items-center position-relative py-4">
          <div className="col-md-2 mb-3 mb-md-0">
            <div className="bg-secondary bg-opacity-10 p-3 rounded text-center">
              <span className="display-6">📖</span>
            </div>
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
            <h5 className="mb-0"><span className="text-white">README.md</span></h5>
            <p className="small text-muted mb-0 mt-1">Documentation</p>
          </div>
          <div className="col-md-5 ms-auto">
            <p className="mb-0">Documentation complète: instructions de développement, build, déploiement. Liste des features et guide d'utilisation du template.</p>
          </div>
        </div>
        <hr /> {/* Divider */}
        {/* node_modules */}
        <div className="row align-items-center position-relative py-4">
          <div className="col-md-2 mb-3 mb-md-0">
            <div className="bg-muted bg-opacity-10 p-3 rounded text-center">
              <span className="display-6">🔗</span>
            </div>
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
            <h5 className="mb-0"><span className="text-white">node_modules/</span></h5>
            <p className="small text-muted mb-0 mt-1">Dépendances installées</p>
          </div>
          <div className="col-md-5 ms-auto">
            <p className="mb-0">Dépendances Node.js installées (React, React Router, Tailwind, Vite, etc.). Géré automatiquement par npm/pnpm/yarn via package.json.</p>
          </div>
        </div>
        <hr /> {/* Divider */}
      </div>
    </div>
  </div>
</section>

    
    
    
    
    
    </>
  )
}

export default ArchitectureRouterV7