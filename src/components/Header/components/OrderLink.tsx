import Modal from "@/components/Modal";
import { useState } from "react";

const OrderLink = ({ title }: { title: string }) => {
  const [isActiveOrderForm, setIsActiveOrderForm] = useState(false);

  return (
    <>
      <div
        className="border-b-2 border-transparent transition-all hover:border-blue_light cursor-pointer"
        onClick={() => {
          setIsActiveOrderForm(true);
        }}
      >
        {title}
      </div>
      <Modal
        isOpen={isActiveOrderForm}
        setIsOpen={setIsActiveOrderForm}
        onClose={() => setIsActiveOrderForm(false)}
      />
    </>
  );
};

export default OrderLink;
