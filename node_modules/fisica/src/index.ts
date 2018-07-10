
import World from './World'
import { Vector2D } from 'vector_class'

// --------------- Circle ---------------
import _RigidBody from './Circle/RigidBody'
import _Collider from './Circle/Collider'
import _Trigger from './Circle/Trigger'

const Circle = {
  RigidBody: _RigidBody,
  Collider: _Collider,
  Trigger: _Trigger,
  World
}

// --------------- Rect ---------------
import Collider from './Rect/Collider'
import RigidBody from './Rect/RigidBody'
import Trigger from './Rect/Trigger'

const Rect = {
  Collider,
  Trigger,
  RigidBody,
  World
}

/*

// --------------- Mesh ---------------
import DynamicCircle from './Mesh/DynamicCircle'
import DynamicRect from './Mesh/DynamicRect'
import DynamicMesh from './Mesh/DynamicMesh'
import WorldMesh from './Mesh/World'

const Mesh = {
  World: WorldMesh,
  DynamicMesh,
  DynamicCircle,
  DynamicRect
}

// --------------- Rect Circle ---------------
import DynamicRectRC from './RectCircle/DynamicRect'
import DynamicCricleRC from './RectCircle/DynamicCircle'
import StaticRectRC from './RectCircle/StaticRect'
import StaticCircleRC from './RectCircle/StaticCircle'
import WorldRC from './RectCircle/World'

const RectCircle = {
  DynamicRect: DynamicRectRC,
  DynamicCircle: DynamicCricleRC,
  StaticRectRC: StaticRectRC,
  StaticCricle: StaticCircleRC,
  World: WorldRC
}

*/

// EXPORT

export {
  Circle,
  Rect,
  Vector2D
  /*
  Mesh,
  RectCircle,
  */
}
