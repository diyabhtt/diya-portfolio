import type { PlayerState } from '../game/physics'

export function Dino({ player }: { player: PlayerState }) {
  const moving = Math.abs(player.vx) > 12 && player.grounded

  return (
    <div
      className={`dino ${moving ? 'dino--moving' : ''}`}
      data-dino
      style={{
        transform: `translate3d(${player.x}px, ${-player.y}px, 0) scaleX(${player.facing})`,
      }}
      aria-hidden="true"
    >
      <span className="dino__tail" />
      <span className="dino__body" />
      <span className="dino__head">
        <span className="dino__eye" />
      </span>
      <span className="dino__arm" />
      <span className="dino__leg dino__leg--one" />
      <span className="dino__leg dino__leg--two" />
    </div>
  )
}
