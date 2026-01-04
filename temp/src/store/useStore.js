import { create } from 'zustand'

const useStore = create((set) => ({
  // Car state - Updated starting position for new layout (outside city, entering)
  carPosition: [0, 0, 25],
  carRotation: Math.PI,
  currentZone: 'entrance',
  
  // Environment state
  isDay: false,
  weatherEffect: 'clear', // clear, rain, snow
  
  // UI state
  showPopup: false,
  popupContent: null,
  isLoading: true,
  loadingProgress: 0,
  musicPlaying: false,
  showControls: true,
  
  // Actions
  setCarPosition: (position) => set({ carPosition: position }),
  setCarRotation: (rotation) => set({ carRotation: rotation }),
  setCurrentZone: (zone) => set({ currentZone: zone }),
  toggleDayNight: () => set((state) => ({ isDay: !state.isDay })),
  setWeatherEffect: (weather) => set({ weatherEffect: weather }),
  setShowPopup: (show) => set({ showPopup: show }),
  setPopupContent: (content) => set({ popupContent: content }),
  setIsLoading: (loading) => set({ isLoading: loading }),
  setLoadingProgress: (progress) => set({ loadingProgress: progress }),
  toggleMusic: () => set((state) => ({ musicPlaying: !state.musicPlaying })),
  setShowControls: (show) => set({ showControls: show }),
}))

export default useStore

