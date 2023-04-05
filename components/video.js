



function Video({ image, width = 1920, height = 1080, src,className, ...rest }) {
  return (

  <amp-video className={className}  poster={image} width={width} height={height}  src={src.match(/^https?:/) ? src : `${src}`} {...rest} ></amp-video>


  );
}

export default Video;
