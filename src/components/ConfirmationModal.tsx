"use client";

import { useState } from "react";
import { Button } from "@mui/material";
import { DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { Dialog } from "@mui/material";

export type ConfirmationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  action: () => void;
  title?: string;
  modalContent: React.ReactNode;
};

export function confirmationMessageTemplate(
  actionName: string,
  itemName: string
) {
  return `Are you sure you want to ${actionName} ${itemName}?`;
}

export const ConfirmationModal = ({
  isOpen,
  onClose,
  action,
  title,
  modalContent,
}: ConfirmationModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      {Boolean(title) && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{modalContent}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={action}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
};

export const ConfirmationModalButton = ({
  children,
  modalProps,
}: {
  children: React.ReactNode;
  modalProps: {
    action: ConfirmationModalProps["action"];
    modalContent: ConfirmationModalProps["modalContent"];
    title?: ConfirmationModalProps["title"];
  };
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>{children}</Button>
      <ConfirmationModal
        {...modalProps}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      />
    </>
  );
};
