import { EDUCATION } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <SectionWrapper
      className="flex flex-col items-center justify-center min-h-[100vh] py-20"
    >
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="education"
          title="Education"
          desc="My academic background."
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="flex flex-col gap-8 md:gap-12 relative">
          {/* Timeline center line */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-border hidden md:block -translate-x-1/2" />

          {EDUCATION.map((edu, index) => (
            <div key={edu.id} className="relative">
              <EducationCard education={edu} index={index} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const EducationCard = ({
  education,
  index,
}: {
  education: (typeof EDUCATION)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card
        className={cn(
          "bg-card text-card-foreground border-border",
          "hover:border-primary/20 transition-colors duration-300",
          "shadow-sm hover:shadow-md"
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                <CardTitle className="text-xl font-bold tracking-tight">
                  {education.degree}
                </CardTitle>
              </div>
              <div className="text-base font-medium text-muted-foreground">
                {education.school}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="font-mono text-xs font-normal">
                {education.grade}
              </Badge>
              <Badge variant="outline" className="font-mono text-xs font-normal">
                {education.startDate} - {education.endDate}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-base text-muted-foreground leading-relaxed">
            {education.details}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EducationSection;
