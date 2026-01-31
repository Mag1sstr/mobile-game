interface IProps {
  src: string;
  alt?: string;
}

function LightRotate({ src, alt = "light" }: IProps) {
  return <img className="rotateAnim scale-120" src={src} alt={alt} />;
}

export default LightRotate;
