import { ACHIEVEMENTS } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const AchievementsSection = () => {
  return (
    <SectionWrapper
      id="achievements"
      className="flex flex-col items-center justify-center min-h-[100vh] py-20"
    >
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="achievements"
          title="Achievements"
          desc="Milestones and roles I have achieved."
          className="static mb-12 md:mb-20 mt-0"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((ach, index) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="h-full p-3 -m-3"
            >
              <Card
                className={cn(
                  "bg-card text-card-foreground border-border h-full flex flex-col justify-between",
                  "hover:border-primary/20 transition-all duration-300",
                  "shadow-sm hover:shadow-md hover:-translate-y-1"
                )}
              >
                <CardHeader className="pt-8 pb-4 flex flex-col items-center justify-center text-center">
                  <div className="text-4xl mb-4" role="img" aria-label={ach.title}>
                    {ach.emoji}
                  </div>
                  <h3 className="text-3xl font-extrabold tracking-tight text-primary font-display">
                    {ach.value}
                  </h3>
                  <div className="text-md font-bold mt-2 text-foreground/90">
                    {ach.title}
                  </div>
                </CardHeader>
                <CardContent className="text-center pb-8">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {ach.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AchievementsSection;
