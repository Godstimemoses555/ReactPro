import { create } from 'zustand';

const useAppointmentStore = create((set) => ({
  isAppointmentOpen: false,
  toggleAppointment: () => set((state) => ({ isAppointmentOpen: !state.isAppointmentOpen })),
  openAppointment: () => set({ isAppointmentOpen: true }),
  closeAppointment: () => set({ isAppointmentOpen: false }),
}));

export default useAppointmentStore;
