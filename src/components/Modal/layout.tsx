import { PropsWithChildren } from "react";
import Modal, { ModalProps } from ".";

export type ModalLayoutProps = ModalProps & {};

const ModalLayout = ({
  name,
  children,
}: PropsWithChildren<ModalLayoutProps>) => {
  return (
    <Modal name={name}>
      <>
        <div className="container">{children}</div>
        <style jsx>{`
          .container {
            background-color: #fff;
            border-radius: 20px;
            padding: 48px;
          }
        `}</style>
      </>
    </Modal>
  );
};

export default ModalLayout;
