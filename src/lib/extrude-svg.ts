import type * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import type { SVGResult, SVGResultPaths } from 'three/examples/jsm/loaders/SVGLoader';

import { Mesh } from 'three/src/objects/Mesh';
import { Group } from 'three/src/objects/Group';
import { MeshNormalMaterial } from 'three/src/materials/MeshNormalMaterial';
import { ExtrudeGeometry } from 'three/src/geometries/ExtrudeGeometry';

/**
 * Parses the provided SVG markup and extrudes it into a 3D model using THREE.js.
 * @param svgMarkup - SVG markup to extrude.
 * @return Group containing all of the extruded SVG paths.
 * @throws Error If the SVG markup is empty.
 */
export function extrudeSvg(svgMarkup: string): Group {
  if (!svgMarkup) {
    throw new Error('SVG markup is empty');
  }

  const svgData: SVGResult = new SVGLoader().parse(svgMarkup);
  const material: MeshNormalMaterial = new MeshNormalMaterial();

  const svgGroup: Mesh[][] = svgData.paths.map(createShapeFromPath);

  const group = new Group();
  svgGroup.flat().forEach(mesh => group.add(mesh));

  return group;

  function createShapeFromPath(path: SVGResultPaths): Mesh[] {
    const shapes: THREE.Shape[] = path.toShapes(true);

    return shapes.map(shape => extrudeShape(shape, material));
  }

  function extrudeShape(shape: THREE.Shape, material: MeshNormalMaterial): Mesh {
    const geometry = new ExtrudeGeometry(shape, {
      depth: 20,
      bevelEnabled: false
    });

    return new Mesh(geometry, material);
  }
}
