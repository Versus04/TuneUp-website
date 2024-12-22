declare module '@react-three/fiber' {
    import { BufferGeometry } from 'three'
    
    interface ThreeElements {
      bufferGeometry: BufferGeometryProps
      shaderMaterial: ShaderMaterialProps
    }
  }