import React from 'react'

function RouterV7() {
  return (
    <>
    <section> 
  <div className="container">
    <div className="row g-4">
      {/* Section historique et buzz */}
      <div className="col-lg-5">
        <div className="card card-body bg-dark p-sm-5">
          {/* Icône de révolution */}
          <span className="display-5 text-primary"><i className="bi bi-lightning-charge" /></span>
          
          <h4 className="text-white mb-3">Pourquoi cette version a créé un "Buzz" Majeur</h4>
          
          {/* Convergence Industrie/Open Source */}
          <div className="mb-4">
            <h6 className="text-primary">1. Convergence Industrie/Open Source</h6>
            <div className="text-white small bg-dark p-3 rounded mt-2">
              <pre className="mb-0" style={{fontSize: '0.85rem'}}>
Impact Market :
├── Shopify (entreprise) + Remix (open source)
│   └→ Resources massives allouées au développement
├── Réunification de l'équipe originale
│   └→ Michael Jackson + Ryan Florence ensemble
└── Alignement avec les besoins métier réels
    └→ Solutions pour e-commerce à grande échelle
              </pre>
            </div>
          </div>

          {/* Timing parfait */}
          <div className="mb-4">
            <h6 className="text-primary">2. Timing Parfait avec Évolution React</h6>
            <ul className="text-white small">
              <li>Concurrent direct : Next.js App Router (sorti en 2023)</li>
              <li>Réponse stratégique : Alternative légère sans bundler imposé</li>
              <li>Synergie avec nouvelles APIs React : Suspense, Server Components</li>
            </ul>
          </div>

          {/* Changement de mentalité */}
          <div className="mb-4">
            <h6 className="text-primary">3. Changement de Mentalité Obligatoire</h6>
            <p className="text-white small mb-2">
              Le buzz provient du <strong>challenge intellectuel</strong> imposé aux développeurs :
            </p>
            <ul className="text-white small">
              <li>Abandon du pattern "fetch in useEffect"</li>
              <li>Adoption du pattern "declare data dependencies"</li>
              <li>Réapprentissage des fondamentaux du web (forms, navigation)</li>
            </ul>
          </div>

          {/* Réaction de la communauté */}
          <hr className="opacity-1 my-4" />
          
          <div>
            <h6 className="text-primary mb-3">Réaction de la Communauté</h6>
            
            <div className="mb-3">
              <h6 className="text-white small">✅ Points positifs soulignés :</h6>
              <ul className="text-white small">
                <li>"Enfin une solution cohérente pour le data fetching"</li>
                <li>"Expérience développeur unifiée"</li>
                <li>"Performances natives impressionnantes"</li>
              </ul>
            </div>
            
            <div>
              <h6 className="text-white small">⚠️ Critiques fréquentes :</h6>
              <ul className="text-white small">
                <li>"Trop opinionated pour une librairie routing"</li>
                <li>"Courbe d'apprentissage abrupte"</li>
                <li>"Migration coûteuse depuis v6"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Section historique et best practices */}
      <div className="col-lg-7 ps-lg-5">
        {/* Titre principal */}
        <h2 className="mb-4">React Router v7 : Révolution Architecturale Inspirée de Remix</h2>
        
        {/* Timeline */}
        <div className="card card-body bg-light mb-4">
          <h5 className="mb-3">📜 La Genèse : De Remix à React Router v7</h5>
          <p className="mb-3">
            En 2022, Shopify acquiert <strong>Remix</strong>, le framework React full-stack créé par les mêmes développeurs que React Router (Michael Jackson et Ryan Florence). Cette acquisition catalyse une convergence stratégique :
          </p>
        <div className="timeline-evolutive mb-4">
  <h5 className="mb-3">🕰️ Timeline Évolutive</h5>
  
  <div className="d-flex flex-column align-items-center">
    {/* Première étape */}
    <div className="timeline-item text-center mb-3 p-3 bg-light rounded shadow-sm w-100">
      <div className="badge bg-primary mb-2">Phase 1</div>
      <h6 className="mb-1">React Router v1-6</h6>
      <p className="mb-0 text-muted small">Approche déclarative composants</p>
    </div>
    
    {/* Flèche vers le bas */}
    <div className="arrow-down my-2">
      <i className="bi bi-arrow-down-circle-fill text-primary fs-4"></i>
    </div>
    
    {/* Deuxième étape */}
    <div className="timeline-item text-center mb-3 p-3 bg-light rounded shadow-sm w-100">
      <div className="badge bg-success mb-2">Phase 2</div>
      <h6 className="mb-1">Remix Framework</h6>
      <p className="mb-0 text-muted small">Architecture "server-first" innovante</p>
    </div>
    
    {/* Flèche vers le bas */}
    <div className="arrow-down my-2">
      <i className="bi bi-arrow-down-circle-fill text-primary fs-4"></i>
    </div>
    
    {/* Troisième étape */}
    <div className="timeline-item text-center p-3 bg-dark text-white rounded shadow-sm w-100">
      <div className="badge bg-warning text-dark mb-2">Phase 3</div>
      <h6 className="mb-1">React Router v7</h6>
      <p className="mb-0 small">Hybridation des deux philosophies</p>
    </div>
  </div>
</div>
        </div>

        {/* Date de sortie */}
        <div className="card card-body bg-light mb-5">
          <h5 className="mb-3">📅 Date de Sortie et Stratégie de Lancement</h5>
          <div className="row">
            <div className="col-md-4">
              <div className="text-center p-3 bg-primary bg-opacity-10 rounded">
                <i className="bi bi-code-slash text-primary fs-4 d-block mb-2"></i>
                <strong className="d-block">Version beta</strong>
                <small className="text-muted">Q4 2023 (annonce à React Conf)</small>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-3 bg-primary bg-opacity-10 rounded">
                <i className="bi bi-check-circle text-primary fs-4 d-block mb-2"></i>
                <strong className="d-block">Version stable</strong>
                <small className="text-muted">Q1 2024</small>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-3 bg-primary bg-opacity-10 rounded">
                <i className="bi bi-arrow-left-right text-primary fs-4 d-block mb-2"></i>
                <strong className="d-block">Approche rollout</strong>
                <small className="text-muted">Migration progressive</small>
              </div>
            </div>
          </div>
        </div>

        {/* Redéfinition des Best Practices */}
        <h4 className="mb-4">🔄 Redéfinition des Best Practices</h4>
        <div className="row g-4 g-lg-5">
          {/* Anciennes pratiques */}
          <div className="col-md-6">
            <div className="card card-body bg-danger bg-opacity-10 border-danger border-opacity-25 p-4 h-100">
              <div className="icon-md bg-danger text-white rounded mb-3">
                <i className="bi bi-x-circle fa-xl" />
              </div>
              <h6 className="mb-3 text-danger">Anciennes pratiques dépréciées</h6>
              <div className="bg-dark p-3 rounded">
                <pre className="text-white mb-0 small">
├── Data fetching dans useEffect
├── État loading local par composant
├── Gestion d'erreur manuelle
└── Navigation programmatique complexe
                </pre>
              </div>
            </div>
          </div>

          {/* Nouvelles normes */}
          <div className="col-md-6">
            <div className="card card-body bg-success bg-opacity-10 border-success border-opacity-25 p-4 h-100">
              <div className="icon-md bg-success text-white rounded mb-3">
                <i className="bi bi-check-circle fa-xl" />
              </div>
              <h6 className="mb-3 text-success">Nouvelles normes</h6>
              <div className="bg-dark p-3 rounded">
                <pre className="text-white mb-0 small">
├── Loaders au niveau route
├── État loading global
├── Error boundaries hiérarchiques
└── Navigation déclarative
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-5 pt-4 border-top">
          <div className="alert alert-primary" role="alert">
            <h5 className="alert-heading">Conclusion</h5>
            <p className="mb-0">
              <strong>React Router v7 n'est pas une simple mise à jour, mais une réinvention du rôle du router dans les applications React</strong> : 
              Du coordinateur de navigation au contrôleur d'application central, gérant désormais data loading, mutations, et erreurs de manière déclarative.
            </p>
          </div>
        </div>
      </div>
    </div> {/* Row END */}
  </div>
</section>
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default RouterV7