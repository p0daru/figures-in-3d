//PRISM
'use client';
import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Color} from 'three';
import { motion } from 'framer-motion-3d';
import styles from '/src/components/style.module.scss';

export default function Index() {

    return (
        <div className={styles.main}>
            <div className={styles.quote}>
                <h1> Explore the three dimension </h1>
                <p>"My work is a self-portrait of my mind, a prism <br />of my convictions." - Fernando Botero</p>
            </div>
           
            <div className={styles.prism}>
                <Canvas>
                    <OrbitControls enableZoom={false} enablePan={false} />
                    <ambientLight intensity={2} />
                    <directionalLight position={[2, 1, 1]} />
                    <Prism />
                </Canvas>
            </div>
        </div>
    );
}

function Prism() {
    const colors = [
        new Color(0xFFD700), 
        new Color(0x333333), 
        new Color(0x98FB98), 
        new Color(0x5DADE2),
        new Color(0xAF7AC5), 
    ];

    return (
        <mesh>
            <cylinderGeometry args={[1, 1, 2, 6]} />
            <meshStandardMaterial color={colors[0]} attach="material-0"/>
            <meshStandardMaterial color={colors[1]} attach="material-1"  />
            <meshStandardMaterial color={colors[1]} attach="material-2" />
        </mesh>
    );
}
