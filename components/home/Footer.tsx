import Link from "next/link";
const links =[
    {
        title: "platform",
        items:["Explore", "Roadmaps", "Resources", "Blog"],
    },
    {
        title: "Company",
        items:["About", "Contact", "Privacy", "Terms"],
    },
];

export default function Footer() {
    return(
        <footer className="border-t border-gray-200 py-20">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
                <div>
                    <h2 className="text-3xl font-semibold">
                        Atlas
                    </h2>
                    <p className="mt-5 max-w-sm leading-7 text-gray-500">
                        A free platform that helps studets and developers
                        learn programming through structured roadmaps and
                        carefully curated resources.
                    </p>
                </div>
            {links.map((group) =>(
                <div key={group.title}>
                    <h3 className="font-semibold">
                        {group.title}
                    </h3>
                    <ul className="mt-6 space-y-4">
                        {group.items.map((item) => (
                            <li key={item}>
                                <Link
                                href="/"
                                className="text-gray-500 transition hover:text-blue-600"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            </div>
            <div className="mx-auto mt-16 max-w-7xl border-t border-gray-200 pt-8 px-6 text-sm text-sm text-gray-500">
                © 2026 Atlas. Built with passion for developers.
            </div>
        </footer>
    );
}