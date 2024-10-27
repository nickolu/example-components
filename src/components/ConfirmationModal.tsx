"use client";

import { useState } from "react";
import {} from "@mui/material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export type ConfirmationModalProps = {
  onClose: () => void;
  action: () => void;
  isOpen: boolean;
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
      <DialogTitle sx={{ padding: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {Boolean(title) && <div>{title}</div>}
          {onClose && (
            <Box sx={{ position: "relative", right: -8, top: -8 }}>
              <IconButton size="small" onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </Box>
          )}
        </Box>
      </DialogTitle>

      <DialogContent sx={{ padding: 2 }}>{modalContent}</DialogContent>
      <DialogActions sx={{ padding: 2 }}>
        <Button color="error" onClick={onClose}>
          Cancel
        </Button>
        <Button
          color="success"
          onClick={() => {
            action();
            onClose();
          }}
        >
          Confirm
        </Button>
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
