interface BannerProps {
  imgUrl: string
}

export const Banner = ({ imgUrl }: BannerProps) => {
  return (
    <div className="autofitimg" id="autofitting2">
      <img
        src={imgUrl}
        alt="Massothérapie Clinique Les 4 Mains"
      />
    </div>
  );
};
