import AppLink from "@/components/AppLink";
import AppButton from "@/components/button";
import { Iconfy } from "@/components/Iconfy";

const Home = () => {
  return (
    <div>
      Home Page
      <div
        className={
          "h-full w-full bg-primary-10 font-semibold text-primary max-md:bg-red-500"
        }
      >
        alsdfljsaf
      </div>
      <AppLink
        to="/"
      >
        à
      </AppLink>
      <AppButton className="text-xl text-primary-75">s</AppButton>
      <Iconfy
        icon={"fa6-brands:facebook"}
        size={"lg"}
        className="text-primary-75"
      />
    </div>
  );
};

export default Home;
