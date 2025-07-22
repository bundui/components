import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider
} from "@/components/core/image-comparison";

export default function ImageComparisonBasic() {
  return (
    <ImageComparison className="aspect-16/9 w-full rounded-lg" enableHover>
      <ImageComparisonImage
        src="https://bundui-images.netlify.app/blog/01.jpg"
        className="grayscale"
        alt="Motion Primitives Dark"
        position="left"
      />
      <ImageComparisonImage
        src="https://bundui-images.netlify.app/blog/01.jpg"
        alt="Motion Primitives Light"
        position="right"
      />
      <ImageComparisonSlider className="w-0.5 bg-white/30 backdrop-blur-xs">
        <div className="absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
      </ImageComparisonSlider>
    </ImageComparison>
  );
}
