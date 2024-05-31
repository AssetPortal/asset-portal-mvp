import { create } from "zustand";
import { InitialState, Page, UIState, initialState } from "./state";

const getInitialStorageState = (): InitialState => initialState;

export const useUIState = create<UIState>()((set) => {
  const setPageData = (
    page: Page,
    data: Partial<InitialState["pages"][Page]>
  ) => {
    set((state) => ({
      ...state,
      pages: { ...state.pages, [page]: { ...state.pages[page], ...data } },
    }));
  };

  return {
    ...getInitialStorageState(),
    setMode: (mode) => set((state) => ({ ...state, mode })),
    // Transfer UI
    setTransferData: (data) => setPageData("transfer", data),
    setTransferAmount: (amount) => setPageData("transfer", { amount }),
    setTransferAddress: (address) => setPageData("transfer", { address }),
    setTransferTokenId: (tokenId) => setPageData("transfer", { tokenId }),
    // Teleport UI
    setTeleportData: (data) => setPageData("teleport", data),
    setTeleportAmount: (amount) => setPageData("teleport", { amount }),
    setTeleportAddress: (address) => setPageData("teleport", { address }),
    setTeleportTokenId: (tokenId) => setPageData("teleport", { tokenId }),
    setTeleportParachainId: (parachainId) =>
      setPageData("teleport", { parachainId }),
  };
});
