import type { PointerEvent } from 'react'

type MobileControlsProps = {
  onControl: (control: 'left' | 'right', pressed: boolean) => void
  onJump: () => void
}

export function MobileControls({ onControl, onJump }: MobileControlsProps) {
  const hold = (control: 'left' | 'right', pressed: boolean) =>
    (event: PointerEvent<HTMLButtonElement>) => {
      event.preventDefault()
      if (pressed) event.currentTarget.setPointerCapture(event.pointerId)
      onControl(control, pressed)
    }

  return (
    <div className="mobile-controls" aria-label="Game controls">
      <div className="mobile-controls__directions">
        <button
          aria-label="Move left"
          onPointerDown={hold('left', true)}
          onPointerUp={hold('left', false)}
          onPointerCancel={hold('left', false)}
        >
          ←
        </button>
        <button
          aria-label="Move right"
          onPointerDown={hold('right', true)}
          onPointerUp={hold('right', false)}
          onPointerCancel={hold('right', false)}
        >
          →
        </button>
      </div>
      <button className="mobile-controls__jump" onPointerDown={onJump}>
        Jump
      </button>
    </div>
  )
}
