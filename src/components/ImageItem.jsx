const ImageItem = ({ src, alt, title }) => {
  return (
    <div className="inline-block">
      <img src={src} alt={alt} className="w-80 h-64 object-cover rounded-lg" />
      <p className="text-center text-xl mt-4">{title}</p>
    </div>
  );
};

export default ImageItem;
