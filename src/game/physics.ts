export type PlayerState = {
  x: number
  y: number
  vx: number
  vy: number
  grounded: boolean
  facing: -1 | 1
}

export type PlayerInput = {
  left: boolean
  right: boolean
  jump: boolean
}

const ACCELERATION = 1_650
const DECELERATION = 2_150
const MAX_SPEED = 330
const JUMP_SPEED = 680
const GRAVITY = 1_850

const moveToward = (value: number, target: number, amount: number) => {
  if (value < target) return Math.min(value + amount, target)
  if (value > target) return Math.max(value - amount, target)
  return value
}

export function stepPlayer(
  state: PlayerState,
  input: PlayerInput,
  deltaSeconds: number,
  maxX: number,
): PlayerState {
  const delta = Math.min(Math.max(deltaSeconds, 0), 0.034)
  const direction = Number(input.right) - Number(input.left)
  let vx = state.vx
  let vy = state.vy
  let y = state.y
  let grounded = state.grounded
  let facing = state.facing

  if (direction !== 0) {
    vx = moveToward(
      vx,
      direction * MAX_SPEED,
      ACCELERATION * delta,
    )
    facing = direction as -1 | 1
  } else {
    vx = moveToward(vx, 0, DECELERATION * delta)
  }

  if (input.jump && grounded) {
    vy = JUMP_SPEED
    grounded = false
  }

  if (!grounded) {
    vy -= GRAVITY * delta
    y += vy * delta

    if (y <= 0) {
      y = 0
      vy = 0
      grounded = true
    }
  }

  let x = state.x + vx * delta
  if (x <= 0) {
    x = 0
    vx = 0
  } else if (x >= maxX) {
    x = maxX
    vx = 0
  }

  return { x, y, vx, vy, grounded, facing }
}
