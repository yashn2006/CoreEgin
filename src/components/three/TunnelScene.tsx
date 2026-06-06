import { useMemo, useRef, type MutableRefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ZONE_COLORS = ["#00ffe0", "#ff4d00", "#7b61ff", "#00ffe0", "#ff4d00", "#7b61ff"];
const ZONE_Z = [-10, -28, -46, -64, -82, -100];

function createHexTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 512;
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = "#06060c";
  ctx.fillRect(0, 0, 512, 512);
  ctx.strokeStyle = "rgba(0,255,224,0.18)";
  ctx.lineWidth = 1;
  const step = 48;
  for (let y = 0; y < 512; y += step) {
    for (let x = 0; x < 512; x += step) {
      const off = (y / step) % 2 === 0 ? 0 : step / 2;
      ctx.beginPath();
      ctx.arc(x + off, y, step / 2.4, 0, Math.PI * 2);
      ctx.stroke();
    }
  }
  ctx.strokeStyle = "rgba(255,77,0,0.12)";
  for (let i = 0; i < 40; i++) {
    ctx.beginPath();
    ctx.moveTo(Math.random() * 512, Math.random() * 512);
    ctx.lineTo(Math.random() * 512, Math.random() * 512);
    ctx.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(8, 40);
  return tex;
}

function Tunnel({ progressRef }: { progressRef: MutableRefObject<number> }) {
  const camTarget = useRef(new THREE.Vector3());
  const texture = useMemo(() => createHexTexture(), []);

  const curve = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let z = 0; z >= -120; z -= 10) pts.push(new THREE.Vector3(0, 0, z));
    return new THREE.CatmullRomCurve3(pts);
  }, []);
  const geo = useMemo(() => new THREE.TubeGeometry(curve, 220, 4, 14, false), [curve]);

  useFrame((state) => {
    const p = progressRef.current;
    const cam = state.camera;
    const tz = p * -110;
    const ty = Math.sin(p * Math.PI * 2) * 0.18;
    const tx = Math.cos(p * Math.PI * 1.5) * 0.12;
    cam.position.x += (tx - cam.position.x) * 0.08;
    cam.position.y += (ty - cam.position.y) * 0.08;
    cam.position.z += (tz - cam.position.z) * 0.08;
    camTarget.current.set(tx, ty, cam.position.z - 5);
    cam.lookAt(camTarget.current);
  });

  return (
    <>
      <ambientLight intensity={0.15} />
      <fog attach="fog" args={["#050508", 8, 60]} />
      <mesh geometry={geo}>
        <meshStandardMaterial map={texture} color="#0a0a14" metalness={0.85} roughness={0.4} side={THREE.BackSide} />
      </mesh>
      {ZONE_Z.map((z, i) => {
        const color = ZONE_COLORS[i];
        return (
          <group key={i} position={[0, 0, z]}>
            <pointLight color={color} intensity={3.5} distance={18} decay={2} />
            <mesh>
              <ringGeometry args={[3.7, 3.85, 64]} />
              <meshBasicMaterial color={color} transparent opacity={0.6} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[-3.2, 0, 0]} rotation={[0, Math.PI / 2, i]}>
              {i === 0 && <boxGeometry args={[0.6, 0.6, 0.6]} />}
              {i === 1 && <cylinderGeometry args={[0.3, 0.3, 0.8, 8]} />}
              {i === 2 && <planeGeometry args={[0.8, 0.8]} />}
              {i === 3 && <torusGeometry args={[0.4, 0.1, 8, 16]} />}
              {i === 4 && <icosahedronGeometry args={[0.5, 0]} />}
              {i === 5 && <sphereGeometry args={[0.45, 12, 12]} />}
              <meshBasicMaterial color={color} wireframe transparent opacity={0.7} />
            </mesh>
          </group>
        );
      })}
    </>
  );
}

export default function TunnelScene({
  progressRef,
  active,
}: {
  progressRef: MutableRefObject<number>;
  active: boolean;
}) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ fov: 70, position: [0, 0, 2] }}
      frameloop={active ? "always" : "never"}
      gl={{ antialias: true, powerPreference: "high-performance" }}
    >
      <Tunnel progressRef={progressRef} />
    </Canvas>
  );
}
