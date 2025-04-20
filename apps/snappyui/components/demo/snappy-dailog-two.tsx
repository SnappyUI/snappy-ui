"use client";
import React, { useState } from "react";

import {
  Dialog,
  DialogActions,
  DialogButton,
  DialogField,
  DialogForm,
  DialogInput,
  DialogLabel,
} from "@/components/ui/snappy-dialog";

export default function DialogDemoTwo() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Form submitted with: ${formData.name}, ${formData.email}`);
  };
  return (
    <>
      <div className="p-4  rounded-md">

        <button
          className="px-6 py-2 bg-background border-1 text-dark dark:text-white rounded-md"
          onClick={() => setIsFormOpen(true)}
        >
          Open
        </button>

        <Dialog
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          title="Form Dialog"
        >
          <DialogForm onSubmit={handleSubmit}>
            <DialogField>
              <DialogLabel htmlFor="name">Name</DialogLabel>
              <DialogInput
                id="name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </DialogField>

            <DialogField>
              <DialogLabel htmlFor="email">Email</DialogLabel>
              <DialogInput
                id="email"
                type="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </DialogField>

            <DialogActions>
              <DialogButton type="button" onClick={() => setIsFormOpen(false)}>Cancel</DialogButton>
              <DialogButton type="submit" variant="primary">Submit</DialogButton>
            </DialogActions>
          </DialogForm>
        </Dialog>
      </div>

    </>
  );
}
