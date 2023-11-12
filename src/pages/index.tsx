import { OneModalProps } from "@/components/Modal/OneModal/OneModal";
import { useModalStore } from "@/utils/store";

export default function Home() {
  const { onOpen } = useModalStore();

  return (
    <main>
      <button
        onClick={() =>
          onOpen<OneModalProps>({
            name: "onemodal",
            props: { label: "Faker" },
          })
        }
      >
        모달 1 열기
      </button>
    </main>
  );
}
