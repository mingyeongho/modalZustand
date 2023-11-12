import { useModalStore } from "@/utils/store";
import ModalLayout from "../layout";
import { TwoModalProps } from "../TwoModal/TwoModal";

export type OneModalProps = {
  label: string;
};

const OneModal = ({ label }: OneModalProps) => {
  const { onOpen } = useModalStore();

  return (
    <ModalLayout name="onemodal">
      {label}
      <button
        onClick={() =>
          onOpen<TwoModalProps>({
            name: "twomodal",
            props: { license: "스탠다드" },
          })
        }
      >
        스탠다드 이용권 모달 열기
      </button>
    </ModalLayout>
  );
};

export default OneModal;
