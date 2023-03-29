import styles from '../styles/Home.module.css'


export const config = { amp: true };



 function revenda_item({item}) {

  return(


    
    <main id="content" role="main" >
  
    <amp-story standalone
        title="Blendibox Ofertas"
        publisher="Juliana"
        publisher-logo-src="assets/AMP-Brand-White-Icon.svg"
        poster-portrait-src="assets/cover.jpg">
      <amp-story-page id="cover" on="tap:cardAdmin.start" tabindex="none" role="animation">
        <amp-story-grid-layer template="fill">
          <amp-img src="assets/tenis.webp"
              width="720" height="1280"
              layout="responsive">
          </amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          <h1 class='h1'>Coleção Arrasadora</h1>
          <p>By Torricella</p>
        
        </amp-story-grid-layer>     
        <amp-story-grid-layer template="thirds">
          <q grid-area="lower-third"> Tênis Cano Alto Branco Arco Íris</q>
        </amp-story-grid-layer>  
      </amp-story-page>


      <amp-story-page id="page1">
        <amp-story-grid-layer template="vertical">
          <h1>Cats</h1>
          <amp-img src="assets/cat.jpg"
              width="720" height="1280"
              layout="responsive">
          </amp-img>
          <q>Dogs come when they're called. Cats take a message and get back to you. --Mary Bly</q>
        </amp-story-grid-layer>
      </amp-story-page>


      <amp-story-page id="page2">
        <amp-story-grid-layer template="fill">
          <amp-img src="assets/dog.jpg" 
              width="720" height="1280"
              layout="responsive">
          </amp-img>
        </amp-story-grid-layer>
          <amp-story-grid-layer template="thirds">
            <h1 grid-area="upper-third">Dogs</h1>
            <p grid-area="lower-third">Dogs were probably the first tame animals. They have accompanied humans for some 10,000 years. Some scientists assert that all dogs, domestic and wild, share a common ancestor in the small South Asian wolf.</p>
        </amp-story-grid-layer>
      </amp-story-page>

      <amp-story-page id="page3" background-audio="assets/bird-singing.mp3">
        <amp-story-grid-layer template="fill">
          <amp-img src="assets/bird.jpg"
              width="720" height="1280"
              layout="responsive">
          </amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          <h1>Birds</h1>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" class="bottom">
          <q>A bird is three things: Feathers, flight and song, And feathers are the least of these. -Marjorie Allen Seiffert</q>
        </amp-story-grid-layer>
      </amp-story-page>


      <amp-story-page id="page4">
        <amp-story-grid-layer template="fill">
          <amp-video autoplay loop
                width="720" height="1280"
                poster="assets/rabbit.jpg"
                layout="responsive">
              <source src="assets/rabbit.mp4" type="video/mp4"></source>
          </amp-video>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          <h1>Rabbits</h1>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" class="bottom">
          <p>Rabbits can learn to follow simple voice commands and come when called by name, and are curious and playful.</p>
        </amp-story-grid-layer>
      </amp-story-page>


      <amp-story-page id="page5">
        <amp-story-grid-layer template="vertical" class="noedge">
          <div class="wrapper">
            <amp-img src="assets/cat.jpg"
                width="720" height="1280"
                layout="responsive"
                animate-in="fade-in"
                animate-in-delay="0.4s">
            </amp-img>
            <amp-img src="assets/dog.jpg"
                width="720" height="1280"
                layout="responsive"
                animate-in="fade-in"
                animate-in-delay="0.6s">
            </amp-img>
            <amp-img src="assets/bird.jpg"
                width="720" height="1280"
                layout="responsive"
                animate-in="fade-in"
                animate-in-delay=".8s">
            </amp-img>
            <amp-img src="assets/rabbit.jpg"
                width="720" height="1280"
                layout="responsive"
                animate-in="fade-in"
                animate-in-delay="1s">
            </amp-img>
          </div>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" class="center-text">
          <p class="banner-text" animate-in="whoosh-in-right">Pets can lower your stress levels!</p>
        </amp-story-grid-layer>
      </amp-story-page>

   
      <amp-story-bookend src="bookend.json" layout="nodisplay"></amp-story-bookend>
    </amp-story>


        </main>
 
  
    




)   

  
}


export default revenda_item