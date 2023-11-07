<div class="flex justify-center py-24">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 420 70"
  >
    <defs>
      <path d="M10,10  q50,25 100,0 t100,0 100,0 100,0" id="wave" />
    </defs>
    <g font-size="15px" font-family="Georgia, serif" fill="white">
      <text transform="translate(0,25)">
        <textPath xlinkHref="#wave" startOffset="0%">
          "The best way to predict the future is to create it."
        </textPath>
      </text>
    </g>
  </svg>
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
</div>;
