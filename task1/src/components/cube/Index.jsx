// Імпорт необхідних бібліотек
'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { Color } from 'three';
import styles from '/src/components/style.module.scss';

// Головний компонент, який експортується за замовчуванням
export default function Index() {

    return (
        <div className={styles.main}>
            <div className={styles.quote}>
                <h1> Explore the three dimension </h1>
                <p>"The Cube is approximately - it's around <br /> the same age as the Internet, and in that time, we had no personal computers yet." - Erno Rubik</p>
            </div>
           
            <div className={styles.cube}>
                <Canvas>
                    <OrbitControls enableZoom={false} enablePan={false} />
                    <ambientLight intensity={2} />
                    <directionalLight position={[2, 1, 1]} />
                    <Cube />
                </Canvas>
            </div>
        </div>
    );
}

// Компонент, який рендерить куб та керує його рухом
function Cube() {
      const colors = [
        new Color(0xFFD700), 
        new Color(0xFFFFFF), 
        new Color(0x3399CC), 
        new Color(0x66CCCC), 
        new Color(0xFF9900), 
        new Color(0xFFCC00)  
    ];

    return (
         <motion.mesh>
            <boxGeometry args={[2.5, 2.5, 2.5]} />
            <meshStandardMaterial color={colors[0]} attach="material-0" />
            <meshStandardMaterial color={colors[1]} attach="material-1" />
            <meshStandardMaterial color={colors[2]} attach="material-2" />
            <meshStandardMaterial color={colors[3]} attach="material-3" />
            <meshStandardMaterial color={colors[4]} attach="material-4" />
            <meshStandardMaterial color={colors[5]} attach="material-5" />
        </motion.mesh>
    );
}
