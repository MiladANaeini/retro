import { useEffect, useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { useBox } from "@react-three/cannon";
import { useControls } from "../hooks/useControls";

export const PlayerCharacter = ({ gltf, speed = 2 }) => {
  // Create a physics box for the player
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [0, 1, 0],
    args: [0.3, 0.6, 0.3], // Adjust to fit your model size
    fixedRotation: true, // Prevent tipping over
  }));
  const controls = useControls();

  useEffect(() => {
    gltf.scene.scale.set(0.029, 0.026, 0.025);
    gltf.scene.position.set(0, 0, 0);
    gltf.scene.rotation.set(0, -Math.PI / 2, 0);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);

  // Movement logic (applies velocity to the physics body)
  useFrame((_, delta) => {
    let moveX = 0;
    let moveZ = 0;
    if (controls.forward) moveZ -= 1;
    if (controls.backward) moveZ += 1;
    if (controls.left) moveX -= 1;
    if (controls.right) moveX += 1;
    // Normalize diagonal movement
    if (moveX !== 0 && moveZ !== 0) {
      moveX *= Math.SQRT1_2;
      moveZ *= Math.SQRT1_2;
    }
    // Set velocity (y is preserved for gravity/jump)
    api.velocity.subscribe(([vx, vy, vz]) => {
      api.velocity.set(moveX * speed, vy, moveZ * speed);
    });
    // Optional: handle jump (set y velocity)
    // if (controls.jump) api.velocity.set(vx, jumpSpeed, vz);
  });

  return (
    <group ref={ref} name="playerCharacter" scale={[20, 20, 20]}>
      <primitive object={gltf.scene} />
    </group>
  );
};