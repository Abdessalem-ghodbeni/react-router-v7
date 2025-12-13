import React from 'react'
import { Link } from 'react-router'

export default function About() {
  return (
    <>
<main>
  {/* =======================
Main Banner START */}
  <section className="pt-0">
    {/* Slider START */}
    <div className="swiper overflow-hidden" data-swiper-options="{
		&quot;effect&quot;: &quot;fade&quot;,
		&quot;speed&quot;:&quot;1000&quot;,
		&quot;autoplay&quot;:{
			&quot;delay&quot;: 3000, 
			&quot;disableOnInteraction&quot;: false
		},
		&quot;pagination&quot;:{
			&quot;el&quot;:&quot;.swiper-pagination&quot;,
			&quot;clickable&quot;:&quot;true&quot;
		}}">
      <div className="swiper-wrapper">
        {/* Slider item */}
        <div className="swiper-slide">
          <div className="card overflow-hidden min-vh-100 rounded-0" style={{background: 'url(assets/images/bg/10.jpg) no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            {/* Bg overlay */}
            <div className="bg-overlay bg-linear-overlay" />
            {/* Card image overlay */}
            <div className="position-relative z-index-2 d-flex flex-column m-auto h-100 py-9"> 
              <div className="container">
                <div className="row">
                  <div className="col-sm-11 col-lg-8 col-xl-7 text-center m-auto">
                    <span className="bg-white bg-opacity-10 text-white small rounded-3 px-3 py-2">Cours Avancé React 19.2</span>
                    {/* Title */}
                    <h1 className="text-white display-4 my-4">Maîtrisez les <span className="text-primary">Nouvelles Technologies</span> React</h1>
                    <p className="text-white mb-5"> Un cours complet pour développer avec React 19.2 et ses dernières innovations. Découvrez les approches modernes et les meilleures pratiques du marché actuel. </p>
                    <a className="btn btn-lg btn-white icon-link icon-link-hover mb-0" >  Voir le programme<i className="bi bi-arrow-right" /> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>	
     
    </div>	
   
  </section>
 <section className="pb-0">
  <div className="container">
    {/* Title */}
    <div className="inner-container-small text-center mb-4 mb-sm-5">
      <h2 className="mb-4">Chére collégues</h2>
      <p className="mb-3">Cette proposition technique est élaborée par <span className="text-primary"> Ghodbeny Abdessalem, Oumeima Ibn Elekih et Meryem Mriry.</span> Basée sur l'analyse des tendances du marché et les dernières évolutions de l'écosystème React.</p>
      
      <a href="integrations.html" className="btn btn-dark mb-0"><span className='text-danger'>!! Important !! </span>Ce site sera mis à jour régulièrement ; pour le moment, il est dédié uniquement à comprendre la différence entre les nouvelles approches de React 19.2</a>
    </div>
    {/* Image */}
    <img src="assets/images/elements/integration-2.svg" className=""  />
    {/* Feature */}
   
  </div>
</section>

  
 
   
  {/* =======================
Why us END */}
  {/* =======================
Work START */}
  <section aria-labelledby="how-it-works" className="py-5">
<div className="container">
{/* Title */}
<div className="inner-container-small text-center mb-4 mb-md-6">
<h2 id="how-it-works">
Comment ça marche en <span className="text-primary">4</span> étapes
</h2>
<p className="text-muted">Parcours pédagogique pour maîtriser les nouveautés de React 19.2</p>
</div>


<div className="row step-process">
{/* Step 1 */}
<div className="col-sm-6 col-lg-3 mb-4">
<div className="card card-body bg-transparent text-center h-100">
<div className="icon-lg bg-dark text-white rounded-circle mb-3 mx-auto d-flex align-items-center justify-content-center" style={{width:72, height:72}}>
<i className="bi bi-search fa-lg" aria-hidden />
</div>
<h5 className="mt-2">Découvrir les tendances</h5>
<p className="mb-0 small text-muted">
Découvrir la tendance de React sur le marché et les nouveautés de React 19.2 ainsi que leur impact.
</p>
</div>
</div>


{/* Step 2 */}
<div className="col-sm-6 col-lg-3 mb-4">
<div className="card card-body bg-transparent text-center h-100">
<div className="icon-lg bg-dark text-white rounded-circle mb-3 mx-auto d-flex align-items-center justify-content-center" style={{width:72, height:72}}>
<i className="bi bi-bullseye fa-lg" aria-hidden />
</div>
<h5 className="mt-2">Identifier les approches</h5>
<p className="mb-0 small text-muted">
Identifier les nouvelles approches proposées et décider quelle approche adopter pour ton projet.
</p>
</div>
</div>


{/* Step 3 */}
<div className="col-sm-6 col-lg-3 mb-4">
<div className="card card-body bg-transparent text-center h-100">
<div className="icon-lg bg-dark text-white rounded-circle mb-3 mx-auto d-flex align-items-center justify-content-center" style={{width:72, height:72}}>
<i className="bi bi-lightbulb fa-lg" aria-hidden />
</div>
<h5 className="mt-2">Comprendre et appliquer</h5>
<p className="mb-0 small text-muted">
Comprendre en profondeur les nouveautés de React 19.2 et les appliquer selon l'approche choisie.
</p>
</div>
</div>


{/* Step 4 */}
<div className="col-sm-6 col-lg-3 mb-4">
<div className="card card-body bg-transparent text-center h-100">
<div className="icon-lg bg-dark text-white rounded-circle mb-3 mx-auto d-flex align-items-center justify-content-center" style={{width:72, height:72}}>
<i className="bi bi-rocket-takeoff fa-lg" aria-hidden />
</div>
<h5 className="mt-2">Appliquer sur un projet réel</h5>
<p className="mb-0 small text-muted">
Mettre en pratique les connaissances sur un projet réel pour valider l'approche et les bénéfices.
</p>
</div>
</div>
</div>
</div>
</section>
 
   
 
 
  
  <section className="position-relative z-index-2 pt-0">
  <div className="container position-relative">
    <div
      className="bg-dark rounded position-relative overflow-hidden p-4 p-sm-6"
      style={{
        background: "url(assets/images/bg/15.jpg) no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="row align-items-center position-relative">
        {/* Title and content */}
        <div className="col-md-6 col-xl-7 mb-4 mb-xl-0">
          <h2 className="text-white">Commencer dès maintenant</h2>
          <p className="text-white mb-0">
            Explorez les nouvelles approches de React 19.2 et appliquez-les
            concrètement sur un projet réel.
          </p>
        </div>

        {/* Button */}
        <div className="col-md-6 col-xl-4 ms-xl-auto text-md-end">
        <Link
  to="/UpWeb/decouvrir"
  className="btn btn-primary btn-lg d-inline-flex align-items-center gap-2"
>
  Commencer maintenant
            <i className="bi bi-arrow-right" />
</Link>
        
        </div>
      </div>
    </div>
  </div>
</section>
 
 
</main>



    
    
    </>
  )
}
