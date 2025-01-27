import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Computer(props) {
  const { nodes, materials } = useGLTF('/computer.glb');
  return (
    <group {...props} dispose={null}>
      {/* Add position here to move the entire model */}
      <group scale={0.23} rotation={[0, Math.PI, 0]} position={[0, 30, 0]}>
        <group position={[0, 28.869, 312.193]} rotation={[-1.469, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.Plane002_digital_displays_0.geometry}
            material={materials.digital_displays}
          />
          <mesh
            geometry={nodes.Plane002_digital_display_sides_0.geometry}
            material={materials.digital_display_sides}
          />
        </group>
        <group position={[0, 381.812, -82.657]} rotation={[-0.229, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.Plane001_digital_displays_0.geometry}
            material={materials.digital_displays}
          />
          <mesh
            geometry={nodes.Plane001_digital_display_sides_0.geometry}
            material={materials.digital_display_sides}
          />
        </group>
        <group position={[0, 0, -94.762]} rotation={[0, Math.PI / 2, 0]} scale={123.801}>
          <mesh
            geometry={nodes.Circle_metal_2_0.geometry}
            material={materials.metal_2}
          />
          <mesh
            geometry={nodes.Circle_metal_1_0.geometry}
            material={materials.metal_1}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/computer.glb');
