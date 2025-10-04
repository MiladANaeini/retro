import { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { MeshReflectorMaterial } from "@react-three/drei";
import { RepeatWrapping, TextureLoader } from "three";
import * as THREE from "three";
import { usePlane } from "@react-three/cannon";

export const Ground = () => {
  const [roughness, normal] = useLoader(TextureLoader, [
    "/textures/denim-roughness.png",
    "/textures/denim-normal.png",
  ]);

  useEffect(() => {
    [normal, roughness].forEach((t) => {
      t.wrapS = RepeatWrapping;
      t.wrapT = RepeatWrapping;
      t.repeat.set(5, 5);
    });
  }, [normal, roughness]);

  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
    type: "Static",
  }));

  return (
<mesh ref={ref} receiveShadow>
      <planeGeometry args={[30, 30]} />
      <MeshReflectorMaterial
        normalMap={normal}
        roughnessMap={roughness}
        color={[0.015, 0.015, 0.015]}
        roughness={0.7}
        blur={[1000, 400]}
        mixBlur={30}
        mixStrength={80}
        mixContrast={1}
        resolution={1024}
        mirror={0}
        depthScale={0.01}
        minDepthThreshold={0.9}
        maxDepthThreshold={1}
        depthToBlurRatioBias={0.25}
        debug={0}
      />
    </mesh>
  );
};
