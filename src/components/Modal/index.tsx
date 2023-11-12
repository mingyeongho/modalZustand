import { ModalKey, useModalStore } from "@/utils/store";
import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

export type ModalProps = {
  name: ModalKey;
};

/**
 *
 * @returns createPortal
 */
const Modal = ({ name, children }: PropsWithChildren<ModalProps>) => {
  const $portal = document.getElementById("portal");
  const { onClose } = useModalStore();

  return (
    $portal &&
    createPortal(
      <>
        <div className="container" onClick={() => onClose(name)}>
          <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>
        <style jsx>{`
          .container {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.6);
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </>,
      $portal
    )
  );
};

export default Modal;
