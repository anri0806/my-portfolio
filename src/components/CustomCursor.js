import AnimatedCursor from "react-animated-cursor";

export default function CustomCursor() {
  return (
    <AnimatedCursor
      innerSize={13}
      outerSize={20}
      color="250, 234, 249"
      outerAlpha={0.2}
      innerScale={1}
      outerScale={2.5}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
}
