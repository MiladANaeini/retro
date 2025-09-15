import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Ground } from "./Ground";

export const Room = () => {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera
        makeDefault
        fov={50}
        position={[3, 2, 5]}
        rotation={[0, 0, 0]}
      />
           <color args={[0, 0, 0]} attach={"background"} />
      <spotLight
        color={[1, 0.25, 0, 7]}
        intensity={300}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, -5]}
        castShadow
        shadow-bias={-0.000005}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={300}
        angle={0.6}
        penumbra={0.5}
        position={[5, 4, 0]}
        castShadow
        shadow-bias={-0.000005}
      />
      {/* <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="skyblue" metalness={0.5} roughness={0.3} />
      </mesh> */}
      <Ground/>
    </>
  );
};
