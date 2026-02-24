const STORAGE_KEY = "haptic-enabled"

export function isHapticEnabled(): boolean {
  if (typeof window === "undefined") return true
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === null ? true : stored === "true"
}

export function setHapticEnabled(enabled: boolean): void {
  localStorage.setItem(STORAGE_KEY, String(enabled))
}

export function haptic(intensity: "light" | "medium" | "heavy" = "light"): void {
  if (!isHapticEnabled()) return
  if (!navigator.vibrate) return

  const durations = { light: 10, medium: 25, heavy: 50 }
	navigator.vibrate(durations[intensity])

	console.log(`Haptic feedback: ${intensity} (${durations[intensity]}ms)`)
}
