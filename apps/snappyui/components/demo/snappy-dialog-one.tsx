"use client";
import React, { useState } from "react";

import {
  Dialog,
  DialogActions,
  DialogButton,
  DialogContent,

} from "@/components/ui/snappy-dialog";

export default function DialogDemoOne() {
  const [isDefaultOpen, setIsDefaultOpen] = useState(false);
  return (
    <div className="p-4 rounded-md">

      <button
        className="px-6 py-2 bg-background border-1 text-dark dark:text-white rounded-md"
        onClick={() => setIsDefaultOpen(true)}
      >
        Open
      </button>

      <Dialog
        isOpen={isDefaultOpen}
        onClose={() => setIsDefaultOpen(false)}
        title="Default Dialog"
      >
        <DialogContent>
          This is a default dialog with standard styling. It uses the center position by default.
        </DialogContent>
        <DialogActions>
          <DialogButton onClick={() => setIsDefaultOpen(false)}>Cancel</DialogButton>
          <DialogButton variant="primary">Confirm</DialogButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}
