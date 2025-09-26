import { AnimatedTab } from "@/components/core/animated-tab";
import { Button } from "@/components/ui/button";

export default function AnimatedTabExample() {
  return (
    <AnimatedTab
      tabs={[
        {
          name: "Overview",
          content: "This is the overview tab content."
        },
        {
          name: "Reviews",
          content: (
            <div>
              <p>This is the reviews tab content.</p>
              <Button>Go it!</Button>
            </div>
          )
        },
        {
          name: "Details",
          content: "This is the details tab content."
        },
        {
          name: "Feedback",
          content: "This is the feedback tab content."
        }
      ]}
    />
  );
}
