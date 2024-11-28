const contents = [
  {
    title: "Created by Facebook (now Meta)",
    content:
      "React was developed by Jordan Walke, a software engineer at Facebook. It was first deployed on Facebook's newsfeed in 2011 and later on Instagram in 2012. It officially became open-source in 2013.",
  },
  {
    title: "Virtual DOM Speeds Up Updates",
    content:
      "React uses a Virtual DOM (Document Object Model), which is a lightweight, in-memory representation of the real DOM. When changes are made, React updates the Virtual DOM first, then calculates the minimal set of updates needed to reflect changes in the real DOM. This process is called reconciliation and makes React very efficient.",
  },
  {
    title: "JSX Combines JavaScript and Markup",
    content:
      "React uses JSX (JavaScript XML), a syntax extension that allows you to write HTML elements directly within JavaScript code. JSX is transformed into JavaScript functions that create React elements, making it easier to build and visualize UI components.",
  },
];

const AwesomeContent = () => {
  return (
    <main className="flex-grow flex flex-col items-center px-4 pt-8 static ">
      <section className="flex flex-col min-h-full py-12 px-5 w-full max-w-screen-lg">
        <div className="mb-8 text-center font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Five Facts in React 🚀
        </div>
        <ul className="w-full space-y-6">
          {contents.map((content, index) => (
            <li key={index} className="flex flex-col">
              <div className="font-bold text-xl sm:text-2xl">
                <span>{index + 1}.&nbsp;</span>
                {content.title}
              </div>
              <p className="ml-4 text-sm sm:text-base md:text-lg">
                {content.content}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default AwesomeContent;
