export default function AboutMe() {
  return (
    <div class="pt-20 content-center">
      <p class="text-6xl font-black pt-20 tracking-wider">
        {" "}
        DEVELOPER & STRATEGIST
      </p>
      <p class="text-xl pt-8 pb-20 animate-pulse">
        Full stack developer & product strategist based in Chicago
      </p>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-4 bg-neutral-200 p-10">
        <div class="justify-center col-span-1">
          <img src="aboutme.jpeg" class="rounded-full p-10"></img>
        </div>

        <div class="flex inline-block align-middle col-span-3">
          <p class="text-left">
            <p class="text-xl font-bold my-8 tracking-wider">
              HELLO, MY NAME IS TRICIA.
            </p>
            I am a full stack developer and product strategist. I recently
            completed a full stack development bootcamp from the University of
            Minnesota. I started my career in the email development: coding
            emails, automating programs, personalizing content, and segmenting
            audience through databases. My experience in strategy development
            ranges from email, web, application, and mobile planning. I have
            launched successfully 200+ experiences across multiple platforms.
            The art and science of technology has always been extremely
            facinating to me. From strategy creation to development to release,
            I love working all stages of product development and innovation.
            Currently I am a product manager at Microsoft on their back-end and
            emerging technology team. In my free time I love doing pilates,
            cycling, learning, trying new things, and spending quality time with
            my family/friends. Please don't hesitate to reach out if you'd like
            to collaborate.
          </p>
        </div>
      </div>
    </div>
  );
}
