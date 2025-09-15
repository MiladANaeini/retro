import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Loading } from "../components/shared/Loading";
import {Room} from "../components/Room"


const HomePage = () => {

  return (
    <>
      <div className="flex justify-center">
        Control Pannel
      </div>
      <Suspense fallback={<Loading loading={true} />}>
        <Canvas >
      <Room/>
        </Canvas>
      </Suspense>
    </>
  );
};

export default HomePage;