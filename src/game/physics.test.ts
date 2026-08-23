import { describe, expect, it } from 'vitest'
import { stepPlayer, type PlayerState } from './physics'

const standing: PlayerState = {
  x: 100,
  y: 0,
  vx: 0,
  vy: 0,
  grounded: true,
  facing: 1,
}

describe('stepPlayer', () => {
  it('accelerates right without exceeding world bounds', () => {
    const moving = stepPlayer(
      standing,
      { left: false, right: true, jump: false },
      0.016,
      120,
    )
    expect(moving.x).toBeGreaterThan(100)

    const bounded = stepPlayer(
      { ...standing, x: 119, vx: 330 },
      { left: false, right: true, jump: false },
      0.016,
      120,
    )
    expect(bounded.x).toBe(120)
    expect(bounded.vx).toBe(0)
  })

  it('jumps only from the ground and returns to it', () => {
    let player = stepPlayer(
      standing,
      { left: false, right: false, jump: true },
      0.016,
      1_000,
    )
    expect(player.y).toBeGreaterThan(0)
    expect(player.grounded).toBe(false)

    for (let frame = 0; frame < 180; frame += 1) {
      player = stepPlayer(
        player,
        { left: false, right: false, jump: false },
        0.016,
        1_000,
      )
    }

    expect(player.y).toBe(0)
    expect(player.grounded).toBe(true)
  })
})
