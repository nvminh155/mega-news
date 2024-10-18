import AppButton from "@/components/Button";
import { Iconfy } from "@/components/Iconfy";

type TMoodProps = {
  color: string;
  name: string;
  active: boolean;
  text: string;
  onChangeMood?: (m: string) => void;
};

const Mood = (props: TMoodProps) => {
  return (
    <AppButton
      key={props.name}
      className={"hover:!bg- bg-transparent"}
      style={{
        backgroundColor: props.active ? props.color : "transparent",
      }}
      onClick={() => {
        if (props.onChangeMood) {
          props.onChangeMood(props.name);
        }
      }}
    >
      <Iconfy
        icon={props.name}
        style={{
          color: !props.active ? props.color : "inherit",
        }}
      />
      {props.active && <span>{props.text}</span>}
    </AppButton>
  );
};

export default Mood;
