import MovingComponent from "react-moving-text";

export default function AboutMe(props) {
  const setActivePage = props.setActivePage;
  const changePage = (pageName) => {
    setActivePage(pageName);
  };
  return (
    <div class="mb-20 mt-40">
      <div class="grid grid-cols-1 lg:grid-cols-2 text-5xl text-white py-20">
        <div class="col-span-1 text-right">
          <p>Hi, I'm Tricia. I am a </p>
        </div>
        <div class="col-span-1 justify-self-start font-bold">
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
    </div>
  );
}
