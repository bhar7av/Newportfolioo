import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const stats = [
    { label: "CGPA", value: "8.4" },
    { label: "Projects", value: "4" },
    { label: "Followers", value: "3,000+" },
    { label: "Students Mentored", value: "25" },
  ];

  return (
    <SectionWrapper
      className="flex flex-col items-center justify-center min-h-[90vh] py-20"
    >
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="about"
          title="About Me"
          desc="Who I am."
          className="mb-12 md:mb-16 mt-0"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Card
            className={cn(
              "bg-card text-card-foreground border-border overflow-hidden",
              "shadow-lg border-border/80"
            )}
          >
            <CardContent className="p-6 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
              {/* Profile Initials/Avatar Circle */}
              <div className="flex-shrink-0 flex items-center justify-center w-28 h-28 rounded-full border-4 border-primary/20 bg-primary/5 text-primary text-3xl font-extrabold font-display">
                BK
              </div>

              <div className="flex-1 space-y-6 text-center md:text-left">
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold font-display text-foreground">
                    Bhargav Koushal
                  </h3>
                  <p className="text-sm font-semibold tracking-wider text-primary uppercase">
                    Developer &bull; ML Enthusiast &bull; Creator
                  </p>
                </div>

                <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                  <p>
                    I'm a 2nd-year B.Tech Information Technology student at{" "}
                    <strong className="text-foreground font-semibold">
                      NIT Srinagar
                    </strong>{" "}
                    with an <strong className="text-foreground font-semibold">8.4 CGPA</strong>. I love building things that live on the internet &mdash; from pixel-perfect front-end clones to ML-powered forecasting models. When I'm not coding, you'll find me editing videos, creating content for my 3,000+ Youtube/Instagram followers, or mentoring high school students in science.
                  </p>
                  <p>
                    I'm passionate about merging creativity with technology &mdash; and I'm always looking for the next crazy project to build.
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-secondary/20 border border-border/40 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:bg-secondary/40 transition-colors"
                    >
                      <span className="text-2xl font-black font-display text-primary">
                        {stat.value}
                      </span>
                      <span className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase mt-1">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
