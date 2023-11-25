import TitleSection from "@/components/landing-page/title-section";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <>
      <div className="overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center">
        <TitleSection
          title="Unified Productivity Hub"
          subtitle="Craft, Coordinate, and Connect Your Notes, Tasks, and Projects Seamlessly"
        />
        <div className="bg-white p-[2px] mt-6 rounded-md bg-gradient-to-r from-brand-primary-purple to-brand-primary-blue sm:w-[300px]">
          <Button
            variant="secondary"
            className="w-full rounded-md p-6 text-xl bg-background"
          >
            Organise Your Workspace
          </Button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
