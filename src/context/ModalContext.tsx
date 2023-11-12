import { ModalStore, useModalStore } from "@/utils/store";
import { useEffect } from "react";

const ModalContext = () => {
  const { modals } = useModalStore();

  useEffect(() => {
    const $body = document.querySelector("body");
    const $portal = document.getElementById("portal");

    if (!$body || !$portal) {
      return;
    }

    if (modals.length) {
      $body.style.overflow = "hidden";
      $portal.style.display = "block";
    }

    return () => {
      $body.style.overflow = "auto";
      $portal.style.display = "none";
    };
  }, [modals.length]);

  return (
    <>
      {modals.map((modal) => {
        const { name, props } = modal;
        const Component = ModalStore[name];

        return <Component key={name} {...props} />;
      })}
    </>
  );
};

export default ModalContext;
