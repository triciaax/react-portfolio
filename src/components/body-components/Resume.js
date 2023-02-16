export default function Resume() {
  return (
    <div class="p-20 text-left">
      <div class="pt-10 px-10">
        <div class="text-3xl text-left font-thin">Experience</div>
        <div>
          <p>
            <div class="text-lg text-left font-bold">
              Product Manager - Microsoft
            </div>
            <div class="text-lg text-left font-thin">July 2022 - Current</div>
            <div class="text-lg text-left font-bold pt-7">
              Digital Site Merchandiser - Target
            </div>
            <div class="text-lg text-left font-thin">
              December 2019 - June 2022
            </div>
            <div class="text-lg text-left font-bold pt-7">
              Marketing Analyst II - Bluestem Brands
            </div>
            <div class="text-lg text-left font-thin">
              December 2018 - November 2019
            </div>
            <div class="text-lg text-left font-bold pt-7">
              Marketing Analyst I - Bluestem Brands
            </div>
            <div class="text-lg text-left font-thin">
              August 2017- November 2018
            </div>
          </p>
        </div>
      </div>

      <hr class="mt-20 pt-5"></hr>

      <div class="grid grid-cols-1 grid-cols-3 gap-1 pt-10 px-10">
        <div class="text-3xl text-left col-span-2 font-thin">Education</div>
        <div class="text-lg text-right font-thin">
          <div class="text-lg font-bold">University of Minnesota</div>
          Marketing, Bachelor of Science
          <br></br>Human Resource, Bachelor of Science
          <br></br>Full Stack Web Development Certificate
        </div>
      </div>

      <div class="grid grid-cols-3 gap-1 pt-10 px-10">
        <div class="text-lg text-left col-span-2 font-thin"></div>
        <div class="text-lg text-right font-thin">
          <div class="text-lg font-bold">Maude Institute x Microsoft</div>
          Driving Innovation by Design Program
        </div>
      </div>

      <div class="grid grid-cols-3 gap-1 px-10">
        <div class="text-left col-span-2 font-thin"></div>
        <div class="text-right font-thin">
          <div class="buttons">
            <button class="blob-btn">
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
    </div>
  );
}
