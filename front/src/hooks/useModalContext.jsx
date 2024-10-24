import { useContext } from "react"
import { ModalContext } from "../Providers/ModalContext";

const useModalContext = () => {
      const modalFeatures = useContext(ModalContext)
      return modalFeatures
}

export default useModalContext;