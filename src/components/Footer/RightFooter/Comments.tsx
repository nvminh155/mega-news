import { TitleSection } from "@/components/TitleSection";

const Comments = () => {
  return (
    <TitleSection text="New Comments">
      <div className="flex max-w-[360px] flex-col gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i + 1} className="rounded-md bg-accent-gray p-md">
            <h4 className="font-medium text-tertiary">Ellsmartx {i}</h4>
            <span className="text-tertiary/75">
              how nice does this look 😍 I feel it should be delicious, thank
              you
            </span>
          </div>
        ))}
      </div>
    </TitleSection>
  );
};

export default Comments;
