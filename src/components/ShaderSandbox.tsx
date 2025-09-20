'use client';

import { useEffect, useRef } from 'react';

interface ShaderSandboxProps {
    width?: number;
    height?: number;
}

export default function ShaderSandbox({ width = 800, height = 600 }: ShaderSandboxProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        width = window.innerWidth;
        height = window.innerHeight;
        const canvas = canvasRef.current;
        if (!canvas) return;
        canvas.height = height;
        canvas.width = width;
        const gl = canvas.getContext('webgl');
        
        if (!gl) {
            console.error('WebGL not supported');
            return;
        }
        
        // Example: just clear the canvas for now
        // Track mouse position within the canvas
        let mouseX = 0;
        let mouseY = 0;

            canvas.addEventListener('mousemove', (event) => {
                const rect = canvas.getBoundingClientRect();
                mouseX = event.clientX - rect.left;
                mouseY = event.clientY - rect.top;
                console.log(`Mouse Position within canvas - X: ${mouseX}, Y: ${mouseY}`);
            });
        gl.clearColor(0.9, 0.1, 0.1, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        // Later: you can compile/link shaders and run render loop here
    }, []);

    return <canvas ref={canvasRef} width={width} height={height} className="" />;
}