import { ArrowRight } from "lucide-react";

import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

import { categories } from "@/data/categories";

export default function CategoryGrid() {
  return (
    <Section>
      <SectionTitle
        eyebrow="Categories"
        title="Browse by Category"
        description="Choose the field you're interested in and discover curated learning paths."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <Card
              key={category.title}
              className="group cursor-pointer p-8"
            >
              {/* Top Row */}
              <div className="flex items-center justify-between">
                <div className={`rounded-2xl p-4 ${category.color}`}>
                  <Icon
                    size={32} />
                </div>

                <ArrowRight
                  size={20}
                  className="text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-600"
                />
              </div>

              {/* Title */}
              <h3 className="mt-8 text-2xl font-semibold">
                {category.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-500">
                {category.roadmaps} Learning Paths
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}