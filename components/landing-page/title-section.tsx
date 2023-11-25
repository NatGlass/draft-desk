interface TitleSectionProps {
  title: string;
  subtitle?: string;
}

const TitleSection = ({ title, subtitle }: TitleSectionProps) => {
  return (
    <>
      <section className="flex flex-col gap-4 justify-center items-start md:items-center">
        <h1 className="text-left dark:text-brand-secondary-blue-600 text-4xl sm:text-6xl max-w-prose md:text-center font-semibold">
          {title}
        </h1>
        {subtitle ? (
          <>
            <p className="dark:text-brand-primary-blue-300 max-w-prose md:text-center">
              {subtitle}
            </p>
          </>
        ) : null}
      </section>
    </>
  );
};

export default TitleSection;
