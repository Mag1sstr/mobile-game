interface IProps {
  src: string;
  alt?: string;
}

function LightRotate({ src, alt = "light" }: IProps) {
  return <img className="rotateAnim" src={src} alt={alt} />;
}

export default LightRotate;
