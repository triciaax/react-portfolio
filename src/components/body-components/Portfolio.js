export default function Portfolio() {
  return (
    <div class="grid grid-cols-1 gap-3 md:grid-cols-3 py-10 px-10">
      <div class="saturate-50 contrast-75 hover:contrast-100 brightness-25">
        <a href="https://github.com/triciaax/weather-dashboard">
          <img
            src={process.env.PUBLIC_URL + "/Weather-Dashboard.png"}
            alt="weather dashboard"
          ></img>
        </a>
        <br></br>
        <b>Weather Dashboard</b>
        <br></br>This was an application that was developed to find the curent
        and forecasted weather for cities. It uses local storage to save
        previous searches. Specialities: HTML, CSS, JavaScript, bootstrap, &
        APIs.
      </div>

      <div class="saturate-50 contrast-75 hover:contrast-100 brightness-25">
        <a href="https://triciaax.github.io/Wine-and-Dine/">
          <img
            src={process.env.PUBLIC_URL + "/wine&dine.png"}
            alt="wine and dine"
          ></img>
        </a>
        <br></br>
        <b>Wine & Dine</b>
        <br></br>This application is a recipe generator for food and cocktails.
        From ideation to execution, this was a collaboration among other
        developers. Specialities: HTML, CSS, JavaScript, APIs, & strategy
        development.
      </div>

      <div class="saturate-50 contrast-75 hover:contrast-100 brightness-25">
        <a href="https://www.target.com/c/kids/-/N-xcoz4">
          <img src={process.env.PUBLIC_URL + "/Target.png"} alt="target"></img>
        </a>
        <br></br>
        <b>Target Web, Mobile, & Application</b>
        <br></br>Lead and owned strategy from homepage to PDP for Target's
        apparel organization. Specialities: web, mobile, & application strategy,
        internal search, SEO, pdp optimization, email marketing, item set up,
        personalization, promotional marketing, adobe analytics, & filtering.
      </div>

      <div class="saturate-50 contrast-75 hover:contrast-100 brightness-25">
        <img
          src={process.env.PUBLIC_URL + "/Target-M&M.png"}
          alt="target"
        ></img>
        <br></br>
        <b>Gender Neutral Collection</b>
        <br></br>
        This was a digital only strategy for a Gender Inclusive collection for
        Target's Cat & Jack brand. Specialities: collection item data, email
        marketing, shoppable drawers, a/b testing, & item data optimization.
      </div>

      <div class="saturate-50 contrast-75 hover:contrast-100 brightness-25">
        <a href="https://github.com/triciaax/tech-blog">
          <img src={process.env.PUBLIC_URL + "/TechBlog.png"}></img>
        </a>
        <br></br>
        <b>Tech Blog</b>
        <br></br>
        This is a CMS-style blog. Users can publish, edit, comment and delete
        their blog posts. Users can also create an account, login, logout, and
        manage their blog posts. Specialities: express.js, MySQL, HTML, CSS,
        handlebars, and sequelize.
      </div>

      <div class="saturate-50 contrast-75 hover:contrast-100 brightness-25">
        <a href="https://shielded-mountain-23922.herokuapp.com/login">
          <img src={process.env.PUBLIC_URL + "/ThingsWanted.png"}></img>
        </a>
        <br></br>
        <b>Things Wanted</b>
        <br></br>
        This is an application that helps users create wishlist and find
        wishlists. Users are able to input urls, titles, and other information
        to ensure that their lists are cohesive and discoverable. This was a
        group project. Specialities: HTML, CSS, JavaScript, handlebars, MySQL,
        and node.js.
      </div>

      <div class="saturate-50 contrast-75 hover:contrast-100 brightness-25">
        <a href="https://www.genesis-mn.com/">
          <img src={process.env.PUBLIC_URL + "/Genesis.png"}></img>
        </a>
        <br></br>
        <b>Genesis Group Homes</b>
        <br></br>
        This website was pitched to the COO while I was an HR intern.
        Accessibility was a big iniatitive for this experience. Specialities:
        website wireframes, strategy, execution, 401-redirects, HTML, CSS, & CMS
        administration.
      </div>

      <div class="saturate-50 contrast-75 hover:contrast-100 brightness-25">
        <a href="https://www.target.com/c/kids-adaptive-clothing/-/N-1laue">
          <img src={process.env.PUBLIC_URL + "/Target-adaptive.png"}></img>
        </a>
        <br></br>
        <b>Adaptive Collection</b>
        <br></br>
        This was a digital only strategy for Target's kids, toddler, & baby
        adaptive assortment. The primary goal of the experience was to educate
        and convert users. Specialities: item data optimization, email
        marketing, filtering, navigation, accessibility, & SEO.
      </div>

      <div class="saturate-50 contrast-75 hover:contrast-100 brightness-25">
        <a href="https://note-taker-app-2022.herokuapp.com/">
          <img src={process.env.PUBLIC_URL + "/Notes.png"}></img>
        </a>
        <br></br>
        <b>Note Taker</b>
        <br></br>
        This application helps users take notes. Users can add a title and
        decription to their notes and reference them later. Users can also use
        this app to take, add, and delete notes. Specialities: JavaScript, HTML,
        CSS, Heroku deployment, & bootstrap.
      </div>
      <div>
        <p class="p-10"></p>
      </div>
    </div>
  );
}
