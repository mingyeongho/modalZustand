import ModalLayout from "../layout";

export type TwoModalProps = {
  license: string;
};

const TwoModal = ({ license }: TwoModalProps) => {
  return <ModalLayout name="twomodal">{license}이용권</ModalLayout>;
};

export default TwoModal;
