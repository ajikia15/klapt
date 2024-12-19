import { RefObject } from "react";
interface PopModalProps {
  title: string;
  modalRef: RefObject<HTMLDialogElement>;
  children: React.ReactNode;
  builtInClose?: boolean;
}

export default function PopModal({
  title,
  modalRef,
  children,
  builtInClose,
}: PopModalProps) {
  return (
    <dialog ref={modalRef}>
      <h2>{title}</h2>
      {children}
      {builtInClose && (
        <form method="dialog">
          <button>Close</button>
        </form>
      )}
    </dialog>
  );
}
