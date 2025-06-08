import { Modal, type ModalProps } from "../../../UI/Modals/Modal";
import ImageEditor from "./ImageEditor";

type ImageEditModalProps = {
  selectedImage: File | null;
  submitCroppedImage: (file: File) => void;
} & Pick<ModalProps, "isOpen" | "onClose">;

export default function ImageEditModal({
  selectedImage,
  submitCroppedImage,
  isOpen,
  onClose,
}: ImageEditModalProps) {
  if (!selectedImage) return;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Image">
      <ImageEditor
        closeHandler={onClose}
        submitHandler={submitCroppedImage}
        file={selectedImage}
      />
    </Modal>
  );
}
