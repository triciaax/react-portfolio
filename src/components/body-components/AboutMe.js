export default function AboutMe() {
  return (
    <div className="pt-20">
      <p class="text-6xl font-black pt-20"> DEVELOPER & STRATEGIST</p>
      <p class="text-xl pt-8 pb-20">
        Full stack developer & product strategist based in Chicago
      </p>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-4 bg-neutral-200 p-10">
        <div class="justify-center col-span-1">
          <img src="aboutme.jpeg" class="rounded-full p-10"></img>
        </div>

        <div class="flex inline-block align-middle col-span-3">
          <p class="text-left">
            <p class="text-xl font-bold my-8">HELLO, MY NAME IS TRICIA.</p>I am
            a full stack developer and product strategist. I started my career
            in the email development: coding emails, automating programs,
            personalizing content, and segmenting audience through databases. My
            experience in strategy development ranges from email, web,
            application, and mobile planning. I have launched successfully 200+
            experiences across multiple platforms. The art and science in our
            technology has always been extremely facinating to me. From strategy
            creation to development to release, I love working all stages of
            product development. Currently I am a product manager at Microsoft
            on their back-end and emerging techonology team. In my free time I
            love doing pilates, cycling, learning, and trying new things. Please
            reach out if you'd like to collaborate.
          </p>
        </div>
      </div>
    </div>
  );
}
