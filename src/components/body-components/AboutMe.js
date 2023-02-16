export default function AboutMe(props) {
  const setActivePage = props.setActivePage;
  const changePage = (pageName) => {
    setActivePage(pageName);
  };
  return (
    <div class="pt-20 mb-20 mt-10 px-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-8 px-10">
        <div>
          <div class="text-4xl text-left font-thin">Hi there, I'm Tricia -</div>
          <div class="text-4xl text-left font-thin">
            I manage products, develop websites, & design experiences.
          </div>
        </div>
        <div class=""></div>
      </div>
      <div class="grid grid-cols-3 gap-3 pb-6 px-10">
        <div class="text-left font-thin">
          <div class="buttons">
            <button class="blob-btn" onClick={() => changePage("portfolio")}>
              View my work
              <span class="blob-btn__inner">
                <span class="blob-btn__blobs">
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div></div>
      <div class="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 420 70"
        >
          <defs>
            <path d="M10,10  q50,25 100,0 t100,0 100,0 100,0" id="wave" />
          </defs>
          <g font-size="18px" font-family="Georgia, serif" fill="midnightBlue">
            <text transform="translate(0,25)">
              <textPath xlinkHref="#wave" startOffset="0%">
                "The best way to predict the future is to create it."
              </textPath>
            </text>
          </g>
        </svg>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-8 px-10">
        <div class="text-3xl text-left col-span-2 font-thin"></div>
        <div class="text-3xl text-right font-thin">
          I love transforming ideas into reality through a unique blend of
          design thinking, product management, and full stack development
          skills.
        </div>
      </div>

      <div class="grid grid-cols-3 gap-1 px-10">
        <div class="text-left col-span-2 font-thin"></div>
        <div class="text-right font-thin">
          <div class="buttons">
            <button class="blob-btn" onClick={() => changePage("contact-me")}>
              Lets work together
              <span class="blob-btn__inner">
                <span class="blob-btn__blobs">
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
