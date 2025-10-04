import { useBox } from "@react-three/cannon";

const debug = false;

export function BoxCollider({ position, scale ,rotation = [0, 0, 0]}) {
  useBox(() => ({
    args: scale,
    position,
    rotation,
    type: "Static",
  }));

  return (
    debug && (
      <mesh position={position} rotation={rotation}>
        <boxGeometry args={scale} />
        <meshBasicMaterial transparent={true} opacity={0.25} />
      </mesh>
    )
  );
}