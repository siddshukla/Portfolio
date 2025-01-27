
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function ProjectComputer(props) {
  const { nodes, materials } = useGLTF('/projectComputer.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[-41.122, 40.857, -62.642]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Plane_computer_2_0.geometry} material={materials.computer_2} />
          <mesh geometry={nodes.Plane_computer_2_screens_0.geometry} material={materials.computer_2_screens} />
          <mesh geometry={nodes.Plane_computer_2_details_0.geometry} material={materials.computer_2_details} />
        </group>
        <mesh geometry={nodes.screen_2_computer_2_screens_0.geometry} material={materials.computer_2_screens} position={[-41.122, 40.857, -62.642]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('/projectComputer.glb')
