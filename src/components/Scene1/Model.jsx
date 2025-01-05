"use client";

import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";

useGLTF.preload("/robot.glb");

export default function Model() {
  const group = useRef (null);
  const { nodes, materials, animations, scene } = useGLTF(
    "/robot_playground.glb"
  );
  const { actions, clips } = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    console.log(actions);
    //@ts-ignore
    actions["Experiment"].play().paused = true;
  }, []);
  useFrame(
    () =>
      (actions["Experiment"].time =
        (actions["Experiment"].getClip().duration * scroll.offset) / 4)
  );
  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}
