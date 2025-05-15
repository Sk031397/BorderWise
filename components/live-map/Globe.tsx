// GlobeScene.tsx
import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Stars, useTexture } from '@react-three/drei'
import * as THREE from 'three'


export const Globe: React.FC = () => {
  const globeRef = useRef<THREE.Mesh>(null!)
  const texture = useTexture('/earth.png') 

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.0005
    }
  })

  return (
    <mesh ref={globeRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}
