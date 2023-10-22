const TopLeftImage = () => {
  return (
    <div className="fixed left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50">
      <img
        src="/top-left-img.png"
        width={400}
        height={400}
        alt="top-left-image"
      />
    </div>
  );
};

export default TopLeftImage;
