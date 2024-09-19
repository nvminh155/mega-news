import AppUpload from "./AppUpload";

const ImageGallery = () => {
  return (
    <div className="mt-7 flex flex-col">
      <span className="pb-sm font-medium text-tertiary">Image Gallery</span>
      <div className="flex w-full gap-md pb-20">
        <AppUpload size="lg" />
        <div className="list grid flex-1 grid-cols-4 gap-sm">
          <AppUpload size="sm" />
          <AppUpload size="sm" />
          <AppUpload size="sm" />
          <AppUpload size="sm" />
          <AppUpload size="sm" />
          <AppUpload size="sm" />
          <AppUpload size="sm" />
          <AppUpload size="sm" />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
