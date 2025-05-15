'use client';
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Html } from "@react-three/drei";
import * as THREE from 'three';
import { Globe } from "./Globe";

export const LiveMap = () => {
  return (
    <div className="w-full h-[80vh] rounded-lg overflow-hidden shadow-lg">
        <Canvas camera={{ position:[0,0,2.5], fov:45 }}>
            <ambientLight intensity={0.6}/>
            <directionalLight position={[5,5,5]} intensity={1}/>
            <Suspense fallback={<Html center>Loading Globe...</Html>}>
                <Globe/>
            </Suspense>
            <OrbitControls enableZoom enablePan={false}/>
            <Stars radius={100} depth={60} count={5000} factor={7} fade/>
        </Canvas>
    </div>
  )
}
