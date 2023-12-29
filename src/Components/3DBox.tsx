import {OrbitControls,PerspectiveCamera,RenderTexture,Text} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
export default function Box3D() {
  
  
  return (
    <div className="mt-5">
      <Canvas>
          <OrbitControls enableZoom={false}  autoRotate autoRotateSpeed={4}/>
          <ambientLight intensity={1} />
          <directionalLight position={[6,3,1]}/>
       <Cube/>
      </Canvas>
    </div>
  );
}

const Cube = () => {
  const textRef = useRef(null);
  useFrame(state => {
    if (textRef.current) {
      (textRef.current as any).position.x = Math.sin(state.clock.elapsedTime * 2);      
    }
  });
  return (
     <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial >
            <RenderTexture attach="map">
              <PerspectiveCamera makeDefault position={[0, 0, 3]} />
            <color attach="background" args={['#4B5563']} />
            <Text ref={textRef} fontSize={1} color={"#E4E4E7"}>Hello World</Text>
</RenderTexture>        
          </meshStandardMaterial>
        </mesh>
  );
}