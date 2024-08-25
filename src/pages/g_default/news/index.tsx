import useTrans from "@/hooks/useTrans";
import AppLink from "@/components/AppLink";

const News = () => {
  const t = useTrans(); // Add this line

  return (
    <div>
      News Page
      <h1>{t("hello")}</h1>
      <AppLink to="/news/:id" params={{}}>
        sậkasljf
      </AppLink>
    </div>
  );
};

export default News;
