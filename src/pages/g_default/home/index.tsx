import { useRedux } from "@/hooks/useRedux";
import useTrans from "@/hooks/useTrans";
import AppLink from "@/components/AppLink";
import AppButton from "@/components/button";

const Home = () => {
  const t = useTrans();
  const a = useRedux("counter");
  console.log("redux", a);

  return (
    <div>
      Home Page
      <h1>{t("hello")}</h1>
      <div className={"h-full w-full bg-primary-10 font-semibold text-primary"}>
        alsdfljsaf
      </div>
      <AppLink to="/news">à</AppLink>
      <AppButton>s</AppButton>
    </div>
  );
};

export default Home;
