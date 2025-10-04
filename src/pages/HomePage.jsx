import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Loading } from "../components/shared/Loading";
import { Room } from "../components/Room";
import { Physics } from "@react-three/cannon";

const HomePage = () => {
  return (
    <>
      <div className="flex justify-center">Control Pannel</div>
      <Suspense fallback={<Loading loading={true} />}>
        <Canvas>
           <Physics
        broadphase="SAP"
        gravity={[0,-2.6,0]}>

          <Room />
        </Physics>
        </Canvas>
      </Suspense>
    </>
  );
};

export default HomePage;
