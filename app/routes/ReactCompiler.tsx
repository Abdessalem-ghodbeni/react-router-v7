import React from 'react'

function ReactCompiler() {
  return (
    <>
    
    		<div>
  <div className="col-md-12">
    <div className="card h-100 border-warning shadow">
      <div className="card-header bg-warning text-dark py-3">
        <h4 className="mb-0"><i className="fas fa-balance-scale me-2" />Comparaison des Compilateurs</h4>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-light">
              <tr>
                <th>Compilateur</th>
                <th>Type</th>
                <th>Optimisations</th>
                <th>Performance</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-success">
                <td><strong>React Compiler</strong></td>
                <td>Optimiseur React</td>
                <td>
                  <span className="badge bg-success me-1">useMemo auto</span>
                  <span className="badge bg-success">useCallback auto</span>
                </td>
                <td>⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td><strong>SWC</strong></td>
                <td>Compilateur Rust</td>
                <td>
                  <span className="badge bg-primary me-1">Transpilation</span>
                  <span className="badge bg-primary">Minification</span>
                </td>
                <td>⭐⭐⭐⭐</td>
              </tr>
              <tr className="table-secondary">
                <td><strong>Babel (Ancien)</strong></td>
                <td>Transpileur JS</td>
                <td>
                  <span className="badge bg-secondary me-1">Syntaxe JSX</span>
                  <span className="badge bg-secondary">Polyfills</span>
                </td>
                <td>⭐⭐⭐</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="border-start border-3 border-success ps-3">
              <h6 className="fw-bold"><i className="fas fa-check text-success me-2" />React Compiler</h6>
              <p className="small mb-0">Comprend la sémantique React, optimise automatiquement les hooks et rendus</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="border-start border-3 border-primary ps-3">
              <h6 className="fw-bold"><i className="fas fa-bolt text-primary me-2" />SWC</h6>
              <p className="small mb-0">Transpile TypeScript/JSX rapidement mais sans optimisation React spécifique</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* FAQ Section */}
  <div className="row mt-5">
    {/* Title */}
    <div className="col-md-5">
      <h5 className="mb-5">Questions Fréquentes sur React Compiler</h5>
      <div className="d-flex align-items-center mb-3">
        <div className="bg-success text-white rounded-circle p-2 me-3">
          <i className="fas fa-cogs fa-lg" />
        </div>
        <div>
          <h6 className="mb-0">Optimisations Intelligentes</h6>
          <p className="text-muted small">React Compiler analyse votre code pour appliquer automatiquement les optimisations</p>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div className="bg-primary text-white rounded-circle p-2 me-3">
          <i className="fas fa-code fa-lg" />
        </div>
        <div>
          <h5 className="mb-0">Code Plus Propre</h5>
          <p className="text-muted small">Élimine jusqu'à 60% du code boilerplate lié aux optimisations manuelles</p>
        </div>
      </div>
    </div>
    <div className="col-md-7">
      {/* Accordion START */}
      <div className="accordion accordion-icon accordion-bg-light" id="accordionFaq">
        {/* Item 1 */}
        <div className="accordion-item mb-3">
          <div className="accordion-header font-base" id="heading-1">
            <button className="accordion-button fw-semibold rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
              <i className="fas fa-question-circle text-primary me-2" />
              Qu'est-ce que React Compiler exactement ?
            </button>
          </div>
          {/* Body */}
          <div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="heading-1" data-bs-parent="#accordionFaq">
            <div className="accordion-body mt-3 pb-0">
              <p><strong>React Compiler</strong> (anciennement "React Forget") est un compilateur qui transforme votre code React en une version optimisée. Contrairement aux compilateurs traditionnels qui transpilent seulement la syntaxe, React Compiler comprend la sémantique React et applique automatiquement des optimisations équivalentes à :</p>
              <ul>
                <li><code>useMemo()</code> pour les calculs coûteux</li>
                <li><code>useCallback()</code> pour les fonctions stables</li>
                <li>Mémoïsation des composants (<code>React.memo</code>)</li>
                <li>Élimination des rendus inutiles</li>
              </ul>
              <p className="mb-0"><strong>Exemple :</strong> Le compilateur détecte automatiquement quand une valeur dérivée ne change pas et évite son recalcul, sans que vous ayez à écrire manuellement <code>useMemo</code>.</p>
            </div>
          </div>
        </div>
        {/* Item 2 */}
        <div className="accordion-item mb-3">
          <div className="accordion-header font-base" id="heading-2">
            <button className="accordion-button fw-semibold rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
              <i className="fas fa-cogs text-success me-2" />
              Comment React Compiler se compare-t-il à SWC et Babel ?
            </button>
          </div>
          {/* Body */}
          <div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#accordionFaq">
            <div className="accordion-body mt-3 pb-0">
              <div className="row">
                <div className="col-md-6">
                  <div className="card border-success mb-3">
                    <div className="card-header bg-success bg-opacity-10 py-2">
                      <strong>React Compiler</strong>
                    </div>
                    <div className="card-body">
                      <ul className="mb-0">
                        <li><strong>But :</strong> Optimisations React spécifiques</li>
                        <li><strong>Niveau :</strong> Haut (comprend React)</li>
                        <li><strong>Sortie :</strong> Code optimisé avec mémoïsation</li>
                        <li><strong>Performance :</strong> Réduction des rendus</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card border-primary mb-3">
                    <div className="card-header bg-primary bg-opacity-10 py-2">
                      <strong>SWC</strong>
                    </div>
                    <div className="card-body">
                      <ul className="mb-0">
                        <li><strong>But :</strong> Transpilation rapide</li>
                        <li><strong>Niveau :</strong> Moyen (syntaxe)</li>
                        <li><strong>Sortie :</strong> JavaScript standard</li>
                        <li><strong>Performance :</strong> Build rapide</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <p><strong>Différence clé :</strong> SWC et Babel transpilent la syntaxe (JSX → JS, TypeScript → JS), tandis que React Compiler optimise la logique React elle-même. Ils sont complémentaires : React Compiler s'ajoute à votre pipeline existant.</p>
            </div>
          </div>
        </div>
        {/* Item 3 */}
        <div className="accordion-item mb-3">
          <div className="accordion-header font-base" id="heading-3">
            <button className="accordion-button fw-semibold collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
              <i className="fas fa-exclamation-triangle text-warning me-2" />
              Quels sont les inconvénients ou limitations ?
            </button>
          </div>
          {/* Body */}
          <div id="collapse-3" className="accordion-collapse collapse" aria-labelledby="heading-3" data-bs-parent="#accordionFaq">
            <div className="accordion-body mt-3 pb-0">
              <div className="alert alert-warning">
                <h6><i className="fas fa-exclamation-circle me-2" />Points à considérer :</h6>
                <ul className="mb-0">
                  <li><strong>Maturité :</strong> Encore en phase "experimental" dans React 19.2.3</li>
                  <li><strong>Debugging :</strong> Le code généré est différent du code source, ce qui peut rendre le debugging moins intuitif</li>
                  <li><strong>Compatibilité :</strong> Certaines bibliothèques React tierces peuvent nécessiter des adaptations</li>
                  <li><strong>Courbe d'apprentissage :</strong> Nécessite de faire confiance au compilateur plutôt qu'à des optimisations manuelles</li>
                </ul>
              </div>
              <p className="mt-3"><strong>Recommandation :</strong> Commencer avec le mode "annotation" où vous marquez explicitement les parties à optimiser, avant de passer au mode "full" d'optimisation automatique.</p>
            </div>
          </div>
        </div>
        {/* Item 4 */}
        <div className="accordion-item mb-3">
          <div className="accordion-header font-base" id="heading-4">
            <button className="accordion-button fw-semibold collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
              <i className="fas fa-code text-info me-2" />
              Comment TypeScript interagit-il avec React Compiler ?
            </button>
          </div>
          {/* Body */}
          <div id="collapse-4" className="accordion-collapse collapse" aria-labelledby="heading-4" data-bs-parent="#accordionFaq">
            <div className="accordion-body mt-3 pb-0">
              <p>TypeScript et React Compiler sont parfaitement complémentaires :</p>
              <div className="row">
                <div className="col-md-6">
                  <div className="border-start border-3 border-primary ps-3 mb-3">
                    <h6>TypeScript</h6>
                    <ul className="small mb-0">
                      <li>Vérification de type à la compilation</li>
                      <li>Autocomplétion et documentation</li>
                      <li>Détection d'erreurs statiques</li>
                      <li>Refactoring sécurisé</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="border-start border-3 border-success ps-3 mb-3">
                    <h6>React Compiler</h6>
                    <ul className="small mb-0">
                      <li>Optimisations à la compilation</li>
                      <li>Génération automatique d'optimisations</li>
                      <li>Réduction du code boilerplate</li>
                      <li>Amélioration des performances runtime</li>
                    </ul>
                  </div>
                </div>
              </div>
              <p><strong>Avantage combiné :</strong> Vous obtenez la sécurité de type de TypeScript avec les performances automatiques de React Compiler. Le compilateur fonctionne sur le code TypeScript transpilé, donc aucune incompatibilité.</p>
            </div>
          </div>
        </div>
        {/* Item 5 */}
        <div className="accordion-item mb-3">
          <div className="accordion-header font-base" id="heading-5">
            <button className="accordion-button fw-semibold collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
              <i className="fas fa-rocket text-danger me-2" />
              Quels sont les bénéfices mesurables de cette approche ?
            </button>
          </div>
          {/* Body */}
          <div id="collapse-5" className="accordion-collapse collapse" aria-labelledby="heading-5" data-bs-parent="#accordionFaq">
            <div className="accordion-body mt-3 pb-0">
              <div className="row text-center mb-3">
                <div className="col-md-4">
                  <div className="bg-success bg-opacity-10 p-3 rounded">
                    <h3 className="text-success">40-60%</h3>
                    <p className="small mb-0">Réduction du code boilerplate</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded">
                    <h3 className="text-primary">30-50%</h3>
                    <p className="small mb-0">Réduction des rendus inutiles</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-warning bg-opacity-10 p-3 rounded">
                    <h3 className="text-warning">60%</h3>
                    <p className="small mb-0">Moins de bugs de rendu</p>
                  </div>
                </div>
              </div>
              <h6>Bénéfices concrets :</h6>
              <ul>
                <li><strong>Productivité :</strong> Moins de temps passé à optimiser manuellement</li>
                <li><strong>Maintenabilité :</strong> Code plus lisible sans hooks d'optimisation partout</li>
                <li><strong>Performance :</strong> Applications plus rapides sans effort supplémentaire</li>
                <li><strong>Robustesse :</strong> Sécurité de type + optimisations garanties</li>
                <li><strong>Évolutivité :</strong> Meilleures performances sur les grandes applications</li>
              </ul>
              <p className="mb-0"><strong>Exemple réel :</strong> L'équipe de Meta a rapporté que React Compiler a réduit de 50% les rendus inutiles dans Instagram.com, améliorant significativement l'expérience utilisateur.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Accordion END */}
    </div>
  </div>
  {/* Avantages et Cas d'Usage */}
  <div className="row mt-5">
    <div className="col-12">
      <div className="card border-0 shadow">
        <div className="card-header bg-gradient-primary text-white py-3">
          <h4 className="mb-0"><i className="fas fa-star me-2" />Pourquoi Choisir Cette Approche ?</h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex mb-4">
                <div className="bg-success text-white rounded-circle p-2 me-3">
                  <i className="fas fa-bolt fa-lg" />
                </div>
                <div>
                  <h5>Performances Automatiques</h5>
                  <p className="mb-0">React Compiler applique des optimisations équivalentes à useMemo/useCallback sans que vous ayez à y penser</p>
                </div>
              </div>
              <div className="d-flex mb-4">
                <div className="bg-primary text-white rounded-circle p-2 me-3">
                  <i className="fas fa-shield-alt fa-lg" />
                </div>
                <div>
                  <h5>Sécurité Maximale</h5>
                  <p className="mb-0">TypeScript garantit la robustesse du code tandis que React Compiler garantit les performances</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex mb-4">
                <div className="bg-warning text-dark rounded-circle p-2 me-3">
                  <i className="fas fa-code fa-lg" />
                </div>
                <div>
                  <h5>Code Plus Propre</h5>
                  <p className="mb-0">Élimination du boilerplate d'optimisation manuelle, rendant le code plus lisible et maintenable</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="bg-info text-white rounded-circle p-2 me-3">
                  <i className="fas fa-chart-line fa-lg" />
                </div>
                <div>
                  <h5>Évolutivité Garantie</h5>
                  <p className="mb-0">Les applications restent performantes même quand elles grandissent, sans refactoring majeur</p>
                </div>
              </div>
            </div>
          </div>
          <div className="alert alert-success mt-3">
            <div className="d-flex">
              <i className="fas fa-lightbulb fa-2x text-success me-3" />
              <div>
                <h5 className="alert-heading">Cas d'Usage Idéal</h5>
                <p className="mb-0">Cette approche est particulièrement recommandée pour : <strong>Applications complexes avec beaucoup d'état</strong>, <strong>Équipes avec développeurs de différents niveaux</strong>, <strong>Projets nécessitant une maintenance à long terme</strong>, et <strong>Applications où les performances sont critiques</strong>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default ReactCompiler