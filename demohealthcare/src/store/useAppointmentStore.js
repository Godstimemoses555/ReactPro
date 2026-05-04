import { create } from 'zustand';

const useAppointmentStore = create((set) => ({
  isAppointmentOpen: false,
  refreshTrigger: 0, // Used to notify components to re-fetch data
  toggleAppointment: () => set((state) => ({ isAppointmentOpen: !state.isAppointmentOpen })),
  openAppointment: () => set({ isAppointmentOpen: true }),
  closeAppointment: () => set({ isAppointmentOpen: false }),
  triggerRefresh: () => set((state) => ({ refreshTrigger: state.refreshTrigger + 1 })),
}));

export default useAppointmentStore;
