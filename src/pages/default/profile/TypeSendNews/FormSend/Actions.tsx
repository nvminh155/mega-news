import AppButton from "@/components/Button";
import { Iconfy } from "@/components/Iconfy";

const Actions = () => {
  return (
    <div className="actions flex items-center gap-3">
      <AppButton
        prefixIcon={<Iconfy icon={"material-symbols:upload"} />}
        variant={"disabled"}
      >
        Draft
      </AppButton>
      <AppButton
        prefixIcon={<Iconfy icon={"icon-park-outline:preview-open"} />}
        variant={"disabled"}
      >
        Preview
      </AppButton>
      <AppButton htmlType="submit" prefixIcon={<Iconfy icon={"mingcute:send-fill"} />}>
        Public
      </AppButton>
    </div>
  );
};

export default Actions;
