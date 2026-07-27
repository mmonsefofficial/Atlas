const links = [
  {
    title: "Platform",
    items: [
      {
        name: "Home",
        href: "#home",
      },
      {
        name: "Roadmaps",
        href: "#roadmaps",
      },
      {
        name: "Resources",
        href: "#resources",
      },
      {
        name: "About",
        href: "#about",
      },
    ],
  },

  {
    title: "Company",
    items: [
      {
        name: "About",
        href: "#about",
      },
      {
        name: "Contact",
        href: "",
      },
      {
        name: "Privacy",
        href: "",
      },
      {
        name: "Terms",
        href: "",
      },
    ],
  },
];


export default function Footer() {
  return (
    <footer
      className="border-t py-16 lg:py-20"
      style={{
        borderColor: "var(--border)",
        background: "var(--background)",
      }}
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 text-center md:grid-cols-2 md:text-left lg:grid-cols-3">

        {/* Brand */}

        <div>
          <h2
            className="text-3xl font-semibold"
            style={{
              color: "var(--foreground)",
            }}
          >
            Atlas
          </h2>


          <p
            className="mx-auto mt-5 max-w-sm leading-7 md:mx-0"
            style={{
              color: "var(--muted)",
            }}
          >
            A free platform that helps students and developers learn programming
            through structured roadmaps and carefully curated resources.
          </p>
        </div>



        {/* Links */}

        {links.map((group) => (

          <div key={group.title}>

            <h3
              className="font-semibold"
              style={{
                color: "var(--foreground)",
              }}
            >
              {group.title}
            </h3>


            <ul className="mt-5 space-y-3 lg:mt-6 lg:space-y-4">

              {group.items.map((item) => (

                <li key={item.name}>

                  <a
                    href={item.href}
                    className="transition-colors duration-300"
                    style={{
                      color: "var(--muted)",
                    }}
                  >

                    <span className="hover:text-blue-600">
                      {item.name}
                    </span>

                  </a>

                </li>

              ))}

            </ul>

          </div>

        ))}

      </div>



      <div
        className="mx-auto mt-12 max-w-7xl border-t px-6 pt-8 text-center text-sm lg:mt-16"
        style={{
          borderColor: "var(--border)",
          color: "var(--muted)",
        }}
      >
        © 2026 Atlas. Built with passion for developers.
      </div>

    </footer>
  );
}