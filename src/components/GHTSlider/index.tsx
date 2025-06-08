
const cards = [
  {
    id: 1,
    bg: "from-[#ff7e5f] to-[#feb47b]",
    lines: ["HELLO THERE", "Am Ashwin.A"],
  },
  {
    id: 2,
    bg: "from-[#6a11cb] to-[#2575fc]",
    lines: ["Do follow on Insta", "ashwin_ambar_"],
  },
  {
    id: 3,
    bg: "from-[#00c6ff] to-[#0072ff]",
    lines: ["Replace cards with images", "for a image slider"],
  },
  {
    id: 4,
    bg: "from-[#ff512f] to-[#dd2476]",
    lines: ["Html css only", "Hover to stop the slides"],
  },
  {
    id: 5,
    bg: "from-[#ffb6c1] to-[#ff69b4]",
    lines: ["Card 5", "Content for card 5"],
  },
  {
    id: 6,
    bg: "from-[#ff9a8b] to-[#ffc3a0]",
    lines: ["Card 6", "Content for card 6"],
  },
  {
    id: 7,
    bg: "from-[#a1c4fd] to-[#c2e9fb]",
    lines: ["Card 7", "Modify it and use"],
  },
  {
    id: 8,
    bg: "from-[#fbc2eb] to-[#a18cd1]",
    lines: ["Card 8", "Content for card 8"],
  },
  {
    id: 9,
    bg: "from-[#84fab0] to-[#8fd3f4]",
    lines: ["card 9", "Content for card 9"],
  },
];

const GHTSlider = () => {
  return (
    <div className="slider-container relative w-full h-[200px] overflow-hidden my-8">
      <div className="slider-list relative flex w-[1800px]">
        {cards.map(({ id, bg, lines }) => (
          <div
            key={id}
            className={`slider-item absolute top-0 left-full w-[200px] h-[200px] animate-slider delay-${id} filter grayscale hover:grayscale-0 transition-filter duration-500`}
          >
            <div
              className={`w-full h-full rounded-lg shadow-md border border-gray-300 text-white p-4 flex flex-col items-center justify-center text-center bg-gradient-to-r ${bg}`}
            >
              {lines.map((line, i) => (
                <p key={i} className="text-sm select-none">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GHTSlider;
