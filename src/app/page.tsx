"use client";

import { Box, Typography } from "@mui/material";
import {
  ConfirmationModalButton,
  confirmationMessageTemplate,
} from "@/components/ConfirmationModal";

const handleDeleteItem = () => {
  console.log("Item deleted");
};

const handleSaveItem = () => {
  console.log("Item saved");
};

const handleCancelItem = () => {
  console.log("Item cancelled");
};

export default function Home() {
  return (
    <Box>
      <Typography variant="h1">Example Components</Typography>
      <Typography variant="h2">Confirmation Modal</Typography>
      <ConfirmationModalButton
        modalProps={{
          action: handleDeleteItem,
          modalContent: confirmationMessageTemplate("delete", "Item"),
          title: "Delete Item?",
        }}
      >
        Delete Item
      </ConfirmationModalButton>
      <ConfirmationModalButton
        modalProps={{
          action: handleSaveItem,
          modalContent: confirmationMessageTemplate("save", "Item"),
          title: "Save Item?",
        }}
      >
        Save Item
      </ConfirmationModalButton>
      <ConfirmationModalButton
        modalProps={{
          action: handleCancelItem,
          modalContent: confirmationMessageTemplate("cancel", "Item"),
          title: "Cancel Item?",
        }}
      >
        Cancel Item
      </ConfirmationModalButton>
    </Box>
  );
}
