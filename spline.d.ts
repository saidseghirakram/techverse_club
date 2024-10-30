// src/spline.d.ts

declare module '@splinetool/react-spline' {
  export default function Spline(props: SplineProps): JSX.Element;

  interface SplineProps {
    scene: string;
    onLoad?: (spline: SplineInstance) => void;
    ref?: React.Ref<SplineInstance>;
  }

  interface SplineInstance {
    getObjectByName(name: string): any; // Replace 'any' with a more specific type if known
  }
}
