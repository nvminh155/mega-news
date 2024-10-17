import ItemFooter from "./ItemFooter";

const FooterBar = () => {
  return (
    <div className="flex h-16 w-full items-center space-x-5 rounded-t-2xl px-4 py-3 shadow">
      <ItemFooter icon="typcn:home" label="Home" isActive={true} />
      <ItemFooter icon="stash:save-ribbon-solid" label="Marked" />
      <ItemFooter icon="lsicon:user-filled" label="Profile" />
      <ItemFooter icon="heroicons-outline:chevron-double-up" />
    </div>
  );
};

export default FooterBar;
