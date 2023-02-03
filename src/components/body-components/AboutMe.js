export default function AboutMe(props) {
  const setActivePage = props.setActivePage;
  const changePage = (pageName) => {
    setActivePage(pageName);
  };
  return (
    <div class="pt-20 mb-20 mt-10">
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
        <div class=""></div>
      </div>

      <div class="text-9xl font-semibold tracking-wide leading-tight">
        <marquee behavior="scroll" direction="left">
          Product Management &#183; Full Stack Development &#183; Digital
          Strategy &#183; Product Design
        </marquee>
      </div>

      <div class="text-6xl font-thin tracking-tight leading-tight pb-15">
        <marquee behavior="scroll" direction="right">
          Based in Chicago &#183; Based in Chicago &#183; Based in Chicago
          &#183; Based in Chicago &#183;
        </marquee>
      </div>
      <hr class="mt-20 pt-10"></hr>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-8 px-10">
        <div class="text-3xl text-left col-span-2 font-thin">About Me</div>
        <div class="text-4xl text-right font-thin">
          I transform ideas into reality through a unique blend of design
          thinking, product management, and full stack development skills.
        </div>
      </div>

      <div class="grid grid-cols-3 gap-1 px-10">
        <div class="text-left col-span-2 font-thin"></div>
        <div class="text-right font-thin">
          <div class="buttons">
            <button class="blob-btn" onClick={() => changePage("contact-me")}>
              Contact me
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
