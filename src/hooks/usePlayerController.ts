import { useCallback, useEffect, useRef, useState } from 'react'
import {
  stepPlayer,
  type PlayerInput,
  type PlayerState,
} from '../game/physics'

type Control = 'left' | 'right'

type UsePlayerControllerOptions = {
  worldWidth: number
  viewportWidth: number
  reducedMotion: boolean
}

const initialPlayer: PlayerState = {
  x: 220,
  y: 0,
  vx: 0,
  vy: 0,
  grounded: true,
  facing: 1,
}

const isInteractiveTarget = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) return false
  return Boolean(
    target.closest('a, button, input, textarea, select, [contenteditable="true"]'),
  )
}

export function usePlayerController({
  worldWidth,
  viewportWidth,
  reducedMotion,
}: UsePlayerControllerOptions) {
  const [player, setPlayer] = useState(initialPlayer)
  const [cameraX, setCameraX] = useState(0)
  const playerRef = useRef(initialPlayer)
  const cameraRef = useRef(0)
  const pressedRef = useRef({ left: false, right: false })
  const jumpQueuedRef = useRef(false)
  const travelTargetRef = useRef<number | null>(null)

  const setControl = useCallback((control: Control, pressed: boolean) => {
    pressedRef.current[control] = pressed
    if (pressed) travelTargetRef.current = null
  }, [])

  const jump = useCallback(() => {
    jumpQueuedRef.current = true
    travelTargetRef.current = null
  }, [])

  const moveTo = useCallback(
    (worldX: number) => {
      const maxPlayerX = Math.max(0, worldWidth - 52)
      const target = Math.min(Math.max(worldX, 0), maxPlayerX)

      if (reducedMotion) {
        const next = {
          ...playerRef.current,
          x: target,
          y: 0,
          vx: 0,
          vy: 0,
          grounded: true,
        }
        const maxCamera = Math.max(0, worldWidth - viewportWidth)
        const nextCamera = Math.min(
          Math.max(target - viewportWidth * 0.35, 0),
          maxCamera,
        )
        playerRef.current = next
        cameraRef.current = nextCamera
        setPlayer(next)
        setCameraX(nextCamera)
        travelTargetRef.current = null
        return
      }

      const next = {
        ...playerRef.current,
        x: target,
        y: 0,
        vx: 0,
        vy: 0,
        grounded: true,
        facing: (target < playerRef.current.x ? -1 : 1) as -1 | 1,
      }
      playerRef.current = next
      setPlayer(next)
      travelTargetRef.current = null
    },
    [reducedMotion, viewportWidth, worldWidth],
  )

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (isInteractiveTarget(event.target)) return

      if (event.code === 'KeyA' || event.code === 'ArrowLeft') {
        event.preventDefault()
        setControl('left', true)
      }
      if (event.code === 'KeyD' || event.code === 'ArrowRight') {
        event.preventDefault()
        setControl('right', true)
      }
      if (event.code === 'Space') {
        event.preventDefault()
        jump()
      }
    }

    const onKeyUp = (event: KeyboardEvent) => {
      if (event.code === 'KeyA' || event.code === 'ArrowLeft') {
        setControl('left', false)
      }
      if (event.code === 'KeyD' || event.code === 'ArrowRight') {
        setControl('right', false)
      }
    }

    const clearControls = () => {
      pressedRef.current = { left: false, right: false }
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    window.addEventListener('blur', clearControls)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
      window.removeEventListener('blur', clearControls)
    }
  }, [jump, setControl])

  useEffect(() => {
    let animationFrame = 0
    let previousTime = performance.now()

    const animate = (time: number) => {
      const delta = (time - previousTime) / 1_000
      previousTime = time
      const maxPlayerX = Math.max(0, worldWidth - 52)
      const travelTarget = travelTargetRef.current
      let input: PlayerInput = {
        ...pressedRef.current,
        jump: jumpQueuedRef.current,
      }
      jumpQueuedRef.current = false

      if (travelTarget !== null) {
        const distance = travelTarget - playerRef.current.x
        if (Math.abs(distance) < 7) {
          playerRef.current = {
            ...playerRef.current,
            x: travelTarget,
            vx: 0,
          }
          travelTargetRef.current = null
          input = { left: false, right: false, jump: false }
        } else {
          input = {
            left: distance < 0,
            right: distance > 0,
            jump: false,
          }
        }
      }

      const nextPlayer = stepPlayer(
        playerRef.current,
        input,
        delta,
        maxPlayerX,
      )
      const maxCamera = Math.max(0, worldWidth - viewportWidth)
      const desiredCamera = Math.min(
        Math.max(nextPlayer.x - viewportWidth * 0.35, 0),
        maxCamera,
      )
      const cameraEase = reducedMotion ? 1 : Math.min(1, delta * 7)
      const nextCamera =
        cameraRef.current + (desiredCamera - cameraRef.current) * cameraEase

      playerRef.current = nextPlayer
      cameraRef.current = nextCamera
      setPlayer(nextPlayer)
      setCameraX(nextCamera)
      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [reducedMotion, viewportWidth, worldWidth])

  return { player, cameraX, setControl, jump, moveTo }
}
