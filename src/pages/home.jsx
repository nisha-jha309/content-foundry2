import { useRef } from "react";
import { Link } from "react-router";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import logos from "../data/logo";
import WebsiteGif from "../../src/assets/content-foundry-show-reel.mp4";
import mockupDrama from "../../public/reel-drama.mp4";
import heroNaJaneKyu from "../../src/assets/hero-na-jane-kyu.webp";
import naJaneKyu from "../../src/assets/na-jane-kyu.webp";
import campusDiaries from "../../src/assets/campus-diaries.webp";
import founderMagazine from "../../src/assets/founder-magazine.avif"
import Testimonial from "../components/testimonial";
import content from "../data/scrollCard";


const Home = () => {
  const moreWorkRef = useRef(null);

  const scrollWork = (direction) => {
    moreWorkRef.current?.scrollBy({
      left: direction * 400,
      behavior: "smooth",
    });
  };

  const feed = [{
    title: "Discovery",
    chips: [
      "YouTube Shorts",
      "Instagram Reels",
      "Facebook Reels",
    ],
    text: "Reach new viewers at scale.",
  },
  {
    title: "Bharat apps",
    chips: [
      "Josh",
      "Moj",
      "ShareChat",
      "Chingari",
    ],
    text: "Hindi and regional audiences beyond the metros.",
  },
  {
    title: "Share loop",
    chips: [
      "WhatsApp Channels",
      "Status",
      "Opt-in communities",
    ],
    text: "Viewers forward the cliffhanger to friends.",
  },
  ]
  return (
    <div id="top">
      {/* HERO */}
      <section className="grid min-h-[620px] grid-cols-1 lg:grid-cols-2">
        {/* Hero Copy */}
        <div className="flex flex-col justify-center px-[5vw] py-[65px] lg:py-[82px] lg:pl-[max(5vw,calc((100vw-1296px)/2))]">
          <div className="text-xs font-black uppercase tracking-[0.19em] text-violet">
            Stories made to be watched
          </div>
          <h1 className="my-6 font-serif text-[clamp(52px,6vw,98px)] text-extrBold font-medium leading-[0.94] tracking-[-0.055em]">
            Make them
            <br />
            watch the
            <br />
            next one.
          </h1>

          <p className="max-w-[520px] text-base leading-[1.6] text-[#4c4841]">
            Brand films and micro-dramas built around characters, emotion and a reason to stay. Shot with real people. Created with AI. Always led by the story.
          </p>

          <div className="mt-[23px] flex flex-wrap gap-3">
            <a href="#stories" className="inline-flex items-center justify-center bg-violet px-6 py-4 font-black text-s font-extrabold text-white hover:opacity-70">
              Explore micro-dramas ↗
            </a>
            <a href="#work" className="inline-flex items-center justify-center border border-ink bg-transparent px-6 py-4 font-black text-s font-extrabold hover:bg-black hover:text-white">
              See our work
            </a>
          </div>
        </div>

        {/* Hero Artwork */}
        <div className="relative flex min-h-[480px] items-center justify-center overflow-hidden bg-purple lg:min-h-[500px] overflow-hidden">
          <img src={heroNaJaneKyu} alt="na jane kyu banner" className="w-full h-full object-cover hover:scale-[1.08] transition-transform duration-300 ease" />
        </div>
      </section>

      {/* FORMAT STRIP */}
      <section className="overflow-hidden bg-ink py-[27px] text-white">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-[30px] px-[5vw]">
          <b className="mr-5 text-[11px] uppercase tracking-[0.17em] text-[#c9bdb0]">
            What we do
          </b>

          <span className="text-lg font-extrabold">Micro-dramas</span>
          <span className="text-lg font-extrabold">AI videos</span>
          <span className="text-lg font-extrabold">Channel cuts</span>
          <span className="text-lg font-extrabold">Hindi & regional versions</span>
          <span className="text-lg font-extrabold">Brand films</span>
        </div>
      </section>

      {/* SHOWREEL */}
      <section id="showreel" className="bg-[#211e22] py-20 text-white">
        <div className="mx-auto max-w-[1440px] px-[5vw]">
          <div className="text-[12px] font-black uppercase tracking-[0.19em] text-violet">
            The studio in motion
          </div>

          <div className="mt-3 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="m-0 font-serif text-[clamp(36px,4vw,66px)] leading-[1.03] tracking-[-0.04em]">
              Showreel.
            </h2>

            <p className="max-w-[420px] text-[17px] leading-[1.6] text-[#ddd]">
              A fast look at the films, campaigns and stories Content
              Foundry makes. The final reel video and poster can be placed
              here when supplied.
            </p>
          </div>
        </div>
        <div className=" mt-[30px] w-full overflow-hidden ">
          <video autoPlay loop muted playsInline className="block h-auto w-full h-auto object-cover" src={WebsiteGif} title="Website Gif" />
        </div>
      </section>

      {/* brands */}
      <section className="bg-paper py-[70px] border-b border-line" aria-label="Credentials" >
        <div className="max-w-[1440px] mx-auto px-[5vw]">
          <div className="uppercase tracking-[0.19em] text-xs font-black text-violet mb-5">
            Trusted by brands that can't afford a miss
          </div>

          <div className="grid grid-cols-4 border-t border-ink border-b border-line max-[900px]:grid-cols-2">

            <div className="p-[26px_22px_26px_0]">
              <b className="block font-serif text-[clamp(40px,4.5vw,64px)] leading-none tracking-[-0.04em]">
                14+
              </b>

              <span className="text-s text-muted">
                brands and institutions served
              </span>
            </div>

            <div className="p-[26px_22px_26px_0]">
              <b className="block font-serif text-[clamp(40px,4.5vw,64px)] leading-none tracking-[-0.04em]">
                8
              </b>

              <span className="text-s text-muted">
                production services in-house
              </span>
            </div>

            <div className="p-[26px_22px_26px_0]">
              <b className="block font-serif text-[clamp(40px,4.5vw,64px)] leading-none tracking-[-0.04em]">
                10
              </b>

              <span className="text-s text-muted">
                episode micro-drama delivered
              </span>
            </div>

            <div className="p-[26px_22px_26px_0]">
              <b className="block font-serif text-[clamp(40px,4.5vw,64px)] leading-none tracking-[-0.04em]">
                2
              </b>

              <span className="text-s text-muted">
                routes: live shoot and AI
              </span>
            </div>

          </div>

          <p className="mt-4 text-s text-muted">
            Founder Harshita Adlakha: cover story,
            Entrepreneurs Today 30 Under 30, July 2024.
            {" "}
            <a
              href="#founder"
              className="border-b border-current font-extrabold text-ink"
            >
              Meet her
            </a>
          </p>
          <div className="overflow-hidden mt-[34px]">
            <div className="flex w-max animate-logo-scroll gap-12">

              {[...logos, ...logos].map((client, index) => (
                <img
                  src={client.image}
                  key={index}
                  alt={client.name}
                  className="w-auto shrink-0 h-[24px] w-auto"
                />
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* STORIES */}
      <section id="stories" className="py-[105px] max-[800px]:py-[70px] max-w-[1440px] mx-auto px-[5vw]">
        <div className="flex justify-between items-end gap-[35px] max-[800px]:block">

          <div>
            <div className="uppercase tracking-[0.19em] text-xs mb-4 font-black text-violet">
              Stories that continue
            </div>

            <h2 className="font-serif text-[clamp(36px,4vw,66px)] leading-[1.03] tracking-[-0.04em] my-[13px_0_25px]">
              One episode is a start.
              <br />
              A series builds a following.
            </h2>
          </div>

          <p className="text-base leading-[1.6] text-muted max-w-[420px]">
            Give audiences characters to care about and brands a meaningful place in the story. Our micro-drama offering spans live shoots and AI-led production.
          </p>

        </div>

        <div className="grid grid-cols-[1.4fr_1fr] gap-[18px] mt-[35px] max-[800px]:grid-cols-1">

          <article className="group relative min-h-[420px] text-white overflow-hidden">
            <div className="z-0 absolute inset-0 group-hover:scale-[1.08] transition-transform duration-300 ease">
              <img src={naJaneKyu} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="z-0 absolute inset-0  bg-black/60"></div>

            <div className="z-1 absolute inset-0 p-7 flex flex-col justify-end">
              <span className="absolute top-7 left-7 bg-white text-[#222] px-3 py-[9px] text-[11px] font-black uppercase">Live Shoot</span>
              <small className="tracking-[0.17em] uppercase font-extrabold">10 episodes</small>
              <h3 className="font-serif text-[45px] my-3">Na Jane Kyu</h3>
              <a className="self-start mt-[25px] font-extrabold border-b border-white pb-[5px]" href="https://drive.google.com/drive/folders/1QXgc0IrbJApkh5S4xiy4BPzbbZrnoqvl?usp=sharing" target="_blank" rel="noopener" >
                Watch the series ↗
              </a>
            </div>
          </article>

          <article className="group text-white  min-h-[420px] relative p-7 flex flex-col justify-end overflow-hidden">
            <div className="z-0 absolute inset-0 group-hover:scale-[1.08] transition-transform duration-300 ease">
              <img src={campusDiaries} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="z-0 absolute inset-0  bg-black/60"></div>

            <div className="z-1 absolute inset-0 p-7 flex flex-col justify-end">
              <span className="absolute top-7 left-7 bg-white text-[#222] px-3 py-[9px] text-[11px] font-black uppercase">AI video</span>
              <small className="tracking-[0.17em] uppercase font-extrabold">Campus series</small>
              <h3 className="font-serif text-[45px] my-3">Campus Diary</h3>
              <a className="self-start mt-[25px] font-extrabold border-b border-white pb-[5px]" href="https://drive.google.com/drive/folders/1QXgc0IrbJApkh5S4xiy4BPzbbZrnoqvl?usp=sharing" target="_blank" rel="noopener" >
                Watch the series ↗
              </a>
            </div>

          </article>

        </div>
      </section>

      {/* OFFER */}
      <section id="offer" className="bg-[#e8e0d5] px-5 py-20 sm:px-6 lg:py-24 xl:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="uppercase tracking-[0.19em] text-xs font-black text-violet mb-4">what we make</div>
          <h2 className="mt-3 font-serif text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            From one film to a world
            <br />
            people come back to.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                number: "01 /",
                title: "Micro-dramas",
                text: "Short, episodic stories with hooks, recurring characters and a role for the brand that makes sense within the narrative.",
                href: "mailto:info@contentfoundry.in?subject=Micro-drama%20enquiry",
                link: "Discuss a series ↗",
              },
              {
                number: "02 /",
                title: "Brand films & ads",
                text: "Campaign films, commercials, product stories and social video conceived and produced from script to screen.",
                href: "#work",
                link: "See examples ↗",
              },
              {
                number: "03 /",
                title: "Original story worlds",
                text: "Develop a repeatable setting and cast for brand-owned series, with room for new episodes, formats and integrations.",
                href: "mailto:info@contentfoundry.in?subject=Original%20series%20enquiry",
                link: "Start a conversation ↗",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="flex min-h-[290px] flex-col bg-paper p-8"
              >
                <span className="font-black text-lg text-violet">
                  {item.number}
                </span>

                <h3 className="mt-8 font-serif text-3xl font-normal">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-copy">
                  {item.text}
                </p>

                <a
                  href={item.href}
                  className="mt-auto w-fit border-b border-ink pb-1 font-extrabold"
                >
                  {item.link}
                </a>
              </article>
            ))}
          </div>

          {/* PRODUCTION MODES */}
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <article className="min-h-[290px] bg-ink p-10 text-white">
              <em className="text-[11px] uppercase tracking-[0.15em] text-[#efae89]">
                Production route / 01
              </em>

              <h3 className="mt-10 font-serif text-4xl font-normal">
                Live shoot
              </h3>

              <p className="mt-3 max-w-xl text-base leading-7 text-white/80">
                Actors, locations, direction and camera craft for performances
                and worlds grounded in real life. This is the route behind Na
                Jane Kyu.
              </p>
            </article>

            <article className="min-h-[290px] bg-purple p-10 text-white">
              <em className="text-[11px] uppercase tracking-[0.15em] text-[#efae89]">
                Production route / 02
              </em>

              <h3 className="mt-10 font-serif text-4xl font-normal">
                AI production
              </h3>

              <p className="mt-3 max-w-xl text-base leading-7 text-white/80">
                AI-assisted or AI-generated visuals for ideas suited to a
                synthetic world. Human concept, writing, direction and
                quality control remain central. Example films to be added
                after approval.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* AMPLIFICATION */}
      <section id="amplify" className="bg-amp text-white py-[105px] max-[900px]:py-[70px]" >
        <div className="max-w-[1440px] mx-auto px-[5vw]">

          <div className="uppercase tracking-[0.19em] text-xs font-black text-violet mb-4"> Amplification</div>
          <h2 className="font-serif text-[clamp(36px,4vw,66px)] leading-[1.03] tracking-[-0.04em] my-[13px_0_25px]">
            Made for every feed
            <br />
            India scrolls.
          </h2>

          <div className="grid grid-cols-[300px_1fr] gap-14 mt-10 items-start max-[900px]:grid-cols-1">

            <div>
              <div role="img" aria-label="Vertical episode frame" className="w-[260px] aspect-[9/17] rounded-[34px] border-[10px] border-[#0f0d12]  relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.53)] max-[900px]:mx-auto" >
                <video src={mockupDrama} autoPlay muted loop className="w-full h-full object-cover"></video>
              </div>
            </div>

            <div className="flex flex-col gap-[14px]">

              {feed.map((feed) => (
                <div
                  key={feed.title}
                  className="group grid grid-cols-[230px_1fr] gap-7 py-[26px] border-t border-white/20 items-center max-[900px]:grid-cols-1 max-[900px]:gap-3"
                >
                  <div>
                    <h3 className="font-serif text-[28px] m-0 mb-3">
                      {feed.title}
                    </h3>

                    <div className="flex flex-wrap gap-[7px]">
                      {feed.chips.map((chip) => (
                        <span key={chip} className="border border-white/30 px-[10px] py-[6px] text-[13px] font-bold hover:border-gray-500 hover:text-gray-500">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="m-0 text-[15px] text-white/80">
                    {feed.text}
                  </p>
                </div>
              ))}

            </div>
          </div>

          <div className="grid grid-cols-3 gap-[15px] mt-[60px] max-[900px]:grid-cols-1">

            {[
              [
                "Channel-ready",
                "Included",
                "Platform cuts, hooks, captions and a release plan.",
              ],
              [
                "Seeded",
                "Add-on",
                "Creators and community partners carry the series.",
              ],
              [
                "Boosted",
                "Paid media",
                "Targeted promotion on YouTube and Meta.",
              ],
            ].map(([title, label, text]) => (
              <div
                key={title}
                className="group border border-white/20 p-[30px] flex flex-col hover:bg-violet hover:border-violet"
              >
                <h3 className="font-serif text-[30px] m-0 mb-[6px]">
                  {title}
                </h3>

                <em className="not-italic text-[13px] text-violet group-hover:text-white font-extrabold mb-4">
                  {label}
                </em>

                <p className="text-[15px] m-0">
                  {text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FOUNDER */}
      <section
        id="founder"
        className="px-5 py-20 sm:px-6 lg:py-24 xl:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-10">
          {/* Cover */}
          <div className="relative max-w-[300px]">
            <img src={founderMagazine} alt="Harshita Adlakha on the cover of Entrepreneurs Today, 30 Under 30 special issue, July 2024" className="block w-full" />

            <span className="absolute -right-8 top-4 bg-violet px-3 py-1 text-sm font-bold text-white rotate-45">
              Cover story
            </span>
          </div>
          <div>
            <div className="uppercase tracking-[0.19em] text-xs font-black text-violet mb-4">The studio</div>

            <h2 className="mt-3 font-serif text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
              Built for ideas.
              <br />
              Built to make them.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-copy sm:text-lg">
              Founded by Harshita Adlakha, Content Foundry brings together
              writers, directors, producers, cinematographers, editors and
              motion artists. We take a story from first thought to final
              frame, choosing the production approach that fits the idea.
            </p>
            <div className="mt-6">
              <a
                href="https://contentfoundry.in/about-us/"
                className="inline-flex items-center justify-center border border-black px-5 py-3 text-sm font-black text-black transition-all duration-200 hover:border-violet hover:bg-violet hover:text-white"
              >
                Meet the studio ↗
              </a>
            </div>
          </div>


        </div>
      </section>


      {/* PROOF */}
      <section id="clients" className="bg-[#201e1a] py-[70px] text-white lg:py-[105px]">
        <div className="mx-auto max-w-[1440px] px-[5vw]">
          <div className="text-[12px] font-black uppercase tracking-[0.19em] text-violet">
            Experience behind the stories
          </div>

          <h2 className="mt-[13px] font-serif text-[clamp(36px,4vw,66px)] leading-[1.03] tracking-[-0.04em]">
            Trusted by brands that
            <br />
            need the work to deliver.
          </h2>

          {/* LOGOS */}
          <div className="my-[30px] mb-[45px] flex flex-wrap gap-4">
            {["JCB", "Surya", "TECNO", "HMD", "GJEPC", "Incredible India",].map((logo) => (
              <span
                key={logo}
                className="border border-[#716b63] px-[21px] py-[15px] text-[16px] font-extrabold hover:border-gray-700 hover:text-gray-700"
              >
                {logo}
              </span>
            ))}
          </div>

          <div className="mb-[15px] text-xs font-black uppercase tracking-[0.19em] text-[#d6b4a3]">
            What our clients say
          </div>

          {/* TESTIMONIALS */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Testimonial
              text="The film arrived quickly and at a fair price, and helped us secure our first Japanese customer."
              name="Vineet Taneja"
              role="CEO, ACE Automation Engineers"
            />

            <Testimonial
              text="Harshita and her team understood our brief, delivered within a reasonable time, and were creative and accommodating throughout."
              name="Payal Majmudar"
              role="Editor, Luxebook"
            />

            <Testimonial
              text="The project ran smoothly from beginning to delivery, and the quality of the finished work met our expectations."
              name="Lead, Branding and Communication"
              role="JCB India"
            />
          </div>

          <p className="mt-[26px] text-[12px] text-[#bdb5ab]">
            Client feedback paraphrased from Content Foundry’s existing
            website. Confirm final wording with clients before launch.
          </p>
        </div>
      </section>

      {/* pilot points */}
      <section id="start" className=" max-w-[1440px] mx-auto px-[5vw] py-[105px] grid  grid-cols-2   gap-[50px]  items-start  max-[900px]:grid-cols-1  max-[800px]:py-[70px]">
        <div>

          <div className="uppercase tracking-[0.19em] text-xs mb-4 font-black text-violet">
            Start small
          </div>

          <h2 className="font-serif text-[clamp(36px,4vw,66px)] leading-[1.03] mb-6 tracking-[-0.04em] my-[13px_0_25px]">
            Start with a pilot.
          </h2>

          <p className="text-[17px] leading-[1.6] text-muted">
            Test the story before you commit to a season.
          </p>

          <div className="flex gap-3 flex-wrap mt-[23px]">

            <a href="mailto:info@contentfoundry.in?subject=Book%20a%20story%20session" className=" inline-flex items-center justify-center px-[22px] py-[15px] rounded-[2px] bg-violet text-white font-extrabold  text-s hover:opacity-80 ">
              Book a 30-minute story session ↗
            </a>

          </div>

        </div>


        {/* PILOT STEPS */}

        <ol className="m-0 p-0 list-none border-t border-line">

          <li className="py-[18px] border-b border-line text-[17px] grid grid-cols-[40px_1fr]">

            <span className="text-violet font-black">
              1
            </span>

            <div>
              One pilot episode
            </div>

          </li>


          <li className="py-[18px] border-b border-line text-[17px] grid grid-cols-[40px_1fr]">

            <span className="text-violet font-black">
              2
            </span>

            <div>
              Three opening hooks to test
            </div>

          </li>


          <li className="py-[18px] border-b border-line text-[17px] grid grid-cols-[40px_1fr]">

            <span className="text-violet font-black">
              3
            </span>

            <div>
              Series blueprint
            </div>

          </li>


          <li className="py-[18px] border-b border-line text-[17px] grid grid-cols-[40px_1fr]">

            <span className="text-violet font-black">
              4
            </span>

            <div>
              Channel and amplification plan
            </div>

          </li>

        </ol>

      </section>

      {/* WORK */}
      <section
        id="work"
        className="bg-[#eee6db] py-[60px] sm:py-[70px] lg:py-[85px]"
      >
        {/* ================= HEADER ================= */}
        <div
          className="
      flex flex-col gap-6
      px-[5vw]
      sm:gap-5
      lg:flex-row
      lg:items-end
      lg:justify-between
    "
        >
          <div>
            <div
              className="
          text-[11px]
          font-black
          uppercase
          tracking-[0.19em]
          text-violet
          sm:text-xs
        "
            >
              Keep exploring
            </div>

            <h2
              className="
          mt-[13px]
          max-w-[700px]
          font-serif
          text-[clamp(36px,8vw,66px)]
          leading-[1.03]
          tracking-[-0.04em]
        "
            >
              More stories. More formats.
            </h2>
          </div>

          {/* ================= ARROWS ================= */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollWork(-1)}
              aria-label="Scroll work left"
              className="
          flex
          h-11
          w-11
          cursor-pointer
          items-center
          justify-center
          border
          border-[#27231f]
          bg-transparent
          text-xl
          transition-colors
          duration-200
          hover:border-violet
          hover:bg-violet
          hover:text-white
        "
            >
              <GoArrowLeft />
            </button>

            <button
              type="button"
              onClick={() => scrollWork(1)}
              aria-label="Scroll work right"
              className="
          flex
          h-11
          w-11
          cursor-pointer
          items-center
          justify-center
          border
          border-[#27231f]
          bg-transparent
          text-xl
          transition-colors
          duration-200
          hover:border-violet
          hover:bg-violet
          hover:text-white
        "
            >
              <GoArrowRight />
            </button>
          </div>
        </div>

        {/* ================= CARDS ================= */}
        <div className="mt-6 w-full overflow-visible sm:mt-[30px]">
          <div
            ref={moreWorkRef}
            className="
        flex
        w-full
        gap-4
        overflow-x-auto
        overflow-y-visible
        px-[5vw]
        pt-[30px]
        pb-[40px]

        sm:pt-[70px]
        sm:pb-[100px]

        [scrollbar-width:none]
        [&::-webkit-scrollbar]:hidden
      "
          >
            {content.map((card, index) => (
              <div
                key={card.slug || index}
                className="
            group
            relative
            h-[330px]
            w-[82vw]
            min-w-[82vw]
            shrink-0
            cursor-pointer

            sm:h-[350px]
            sm:w-[300px]
            sm:min-w-[300px]

            sm:hover:z-[100]
          "
              >
                {/* ================= CARD ================= */}
                <div
                  className="
              absolute
              left-0
              top-0
              h-[330px]
              w-full
              overflow-hidden
              rounded-xl
              bg-black

              transition-[height,transform,box-shadow]
              duration-300
              ease-out

              sm:h-[350px]
              sm:group-hover:h-[460px]
              sm:group-hover:-translate-y-[35px]
              sm:group-hover:shadow-2xl
            "
                >
                  {/* ================= IMAGE ================= */}
                  <img
                    src={card.thumbnail}
                    alt={card.title}
                    className="
                absolute
                inset-0
                h-full
                w-full
                object-cover

                transition-transform
                duration-500
                ease-out

                sm:group-hover:scale-105
              "
                  />

                  {/* ================= DARK GRADIENT ================= */}
                  <div
                    className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black
                via-black/20
                to-transparent
              "
                  />

                  {/* ================= NUMBER ================= */}
                  <div
                    className="
                absolute
                left-4
                top-4
                z-20
                text-lg
                font-black
                text-white
              "
                  >
                    {String(card.number).padStart(2, "0")}
                  </div>

                  {/* ================= CARD CONTENT ================= */}
                  <div
                    className="
                absolute
                bottom-0
                left-0
                right-0
                z-20
                p-5

                sm:transition-all
                sm:duration-300
                sm:ease-out
                sm:group-hover:bottom-[130px]
              "
                  >
                    <span
                      className="
                  text-[10px]
                  uppercase
                  tracking-[0.15em]
                  text-white/70
                "
                    >
                      {card.type}
                    </span>

                    <h3
                      className="
                  mt-1
                  max-w-[90%]
                  text-xl
                  font-bold
                  leading-tight
                  text-white
                "
                    >
                      {card.title}
                    </h3>

                    {/* ================= MOBILE CTA ================= */}
                    <div className="mt-4 sm:hidden">
                      {index === 0 ? (
                        <Link
                          to={`/micro-drama/${card.slug}`}
                          className="
                      inline-flex
                      items-center
                      gap-2
                      bg-red-600
                      px-4
                      py-2
                      text-xs
                      font-bold
                      text-white
                      transition-opacity
                      duration-200
                      hover:opacity-80
                    "
                        >
                          {card.link || "Play Now"}
                          <GoArrowRight className="text-sm" />
                        </Link>
                      ) : (
                        <a
                          href={card.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                      inline-flex
                      items-center
                      gap-2
                      bg-red-600
                      px-4
                      py-2
                      text-xs
                      font-bold
                      text-white
                      transition-opacity
                      duration-200
                      hover:opacity-80
                    "
                        >
                          {card.link || "View Work"}
                          <GoArrowRight className="text-sm" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* ================= DESKTOP HOVER PANEL ================= */}
                  <div
                    className="
                absolute
                bottom-0
                left-0
                right-0
                z-30
                hidden
                min-h-[130px]
                rounded-b-xl
                bg-[#171717]
                p-4
                text-white

                translate-y-full
                opacity-0

                transition-all
                duration-300
                ease-out

                sm:block
                sm:group-hover:translate-y-0
                sm:group-hover:opacity-100
              "
                  >
                    {/* DESCRIPTION */}
                    {card.description && (
                      <p
                        className="
                    mb-4
                    line-clamp-3
                    text-sm
                    leading-5
                    text-white/80
                  "
                      >
                        {card.description}
                      </p>
                    )}

                    {/* DESKTOP LINK */}
                    {index === 0 ? (
                      <Link
                        to={`/micro-drama/${card.slug}`}
                        className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-red-600
                    px-4
                    py-2
                    text-sm
                    font-bold
                    text-white
                    transition-colors
                    duration-200
                    hover:bg-red-500
                  "
                      >
                        {card.link || "Play Now"}
                        <GoArrowRight className="text-xs" />
                      </Link>
                    ) : (
                      <a
                        href={card.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-red-600
                    px-4
                    py-2
                    text-sm
                    font-bold
                    text-white
                    transition-colors
                    duration-200
                    hover:bg-red-500
                  "
                      >
                        {card.link || "View Work"}
                        <GoArrowRight className="text-xs" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-violet py-[60px] sm:py-[75px] lg:py-[90px] text-white">
        <div className="mx-auto max-w-[1440px] px-[5vw]">

          {/* Label */}
          <div className="mb-4 text-[11px] font-black uppercase tracking-[0.19em] text-black sm:text-xs">
            Start a conversation
          </div>

          {/* Heading */}
          <h2
            className="
        mb-5
        max-w-[850px]
        font-serif
        text-[clamp(36px,8vw,66px)]
        font-bold
        leading-[1.03]
        tracking-[-0.04em]
        sm:mb-6
      "
          >
            Have a story worth telling? <br className="hidden sm:block" />
            Let’s make people watch.
          </h2>

          {/* Description */}
          <p
            className="
        max-w-[700px]
        text-[15px]
        leading-[1.6]
        text-white
        sm:text-[17px]
      "
          >
            Tell us the brand, audience and ambition. We’ll find the right
            story and production route.
          </p>

          {/* CTA Buttons */}
          <div
            className="
        mt-6
        flex
        flex-col
        gap-3
        sm:flex-row
        sm:gap-4
      "
          >
            <a
              href="mailto:info@contentfoundry.in?subject=Content%20Foundry%20project"
              className="
          inline-flex
          w-fit
          items-center
          justify-center
          bg-[#171613]
          px-6
          py-4
          text-sm
          font-black
          text-white
          underline
          transition-opacity
          hover:opacity-80
        "
            >
              info@contentfoundry.in ↗
            </a>

            <a
              href="mailto:info@contentfoundry.in?subject=Content%20Foundry%20project"
              className="
          inline-flex
          w-fit
          items-center
          justify-center
          bg-[#171613]
          px-6
          py-4
          text-sm
          font-black
          text-white
          underline
          transition-opacity
          hover:opacity-80
        "
            >
              Get a quote ↗
            </a>
          </div>

        </div>
      </section>
    </div>

  );
};

export default Home;