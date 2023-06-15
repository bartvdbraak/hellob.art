export function TailwindIndicator() {
  if (process.env.NODE_ENV === "production") return null;

  const breakpoints = [
    { name: "xs", css: "block sm:hidden" },
    {
      name: "sm",
      css: "hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden",
    },
    { name: "md", css: "hidden md:block lg:hidden xl:hidden 2xl:hidden" },
    { name: "lg", css: "hidden lg:block xl:hidden 2xl:hidden" },
    { name: "xl", css: "hidden xl:block 2xl:hidden" },
    { name: "2xl", css: "hidden 2xl:block" },
  ];

  return (
    <div className="fixed bottom-1 left-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white">
      {breakpoints.map((breakpoint) => (
        <div key={breakpoint.name} className={breakpoint.css}>
          {breakpoint.name}
        </div>
      ))}
    </div>
  );
}
