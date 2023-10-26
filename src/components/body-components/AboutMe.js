import MovingComponent from "react-moving-text";

export default function AboutMe(props) {
  const setActivePage = props.setActivePage;
  const changePage = (pageName) => {
    setActivePage(pageName);
  };
  return (
    <div class="pt-20 mb-20 mt-10">
      <div class="grid grid-cols-2 text-5xl font-bold text-white py-10">
        <div class="text-right">
          <p>Hi, I'm Tricia. I am a </p>
        </div>
        <div class="justify-self-start">
          <MovingComponent
            type="typewriter"
            dataText={[
              "Developer",
              "Product Manager.",
              "Marketing Analyst.",
              "Digital Merchandiser.",
              "Product Planner.",
              "Digital Strategist.",
            ]}
          />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 pt-40 px-10">
        <div>
          <div class="font-thin text-3xl text-stone-300 text-left">
            I am a Chicago-based developer and product strategist. From ideation
            to creation, I love all aspects of website development. I transform
            ideas into reality through a unique blend of strategic, technical,
            and development skills.
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
      <div></div>
    </div>
  );
}
