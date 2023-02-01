import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { QRCode } from "react-qrcode-logo";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <main className="container">
        <button
          className="modal-btn"
          onClick={() => {
            isOpen ? onClose() : onOpen();
          }}
        >
          Generate QR
        </button>
      </main>

      {isOpen && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#ffffff",
                }}
              >
                <QRCode
                  value="https://www.google.com"
                  removeQrCodeBehindLogo={true}
                  logoImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD4gQwoMS6CV8V0qwF7gRvvCFCsO6P1csvLw&usqp=CAU"
                  logoWidth={70}
                  logoHeight={30}
                  eyeRadius={3}
                  size={256}
                />
              </div>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="pink"
                variant="outline"
                mr={3}
                onClick={onClose}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
