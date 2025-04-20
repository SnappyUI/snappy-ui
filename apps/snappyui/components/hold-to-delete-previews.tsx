"use client";

import HoldToDelete from "@/components/ui/snappy-hold-to-delete";

export function BasicPreview() {
  // eslint-disable-next-line no-alert
  return <HoldToDelete onDelete={() => alert("Item deleted!")} />;
}

export function CustomDurationPreview() {
  // eslint-disable-next-line no-alert
  return <HoldToDelete holdDuration={3000} onDelete={() => alert("Deleted after 3 seconds")} />;
}

export function CustomStylingPreview() {
  return (
    <HoldToDelete
      className="bg-blue-100 text-blue-800"
      deleteClassName="bg-blue-500 text-white"
      // eslint-disable-next-line no-alert
      onDelete={() => alert("Styled deletion!")}
    />
  );
}

export function CustomIconPreview() {
  // eslint-disable-next-line no-alert
  return <HoldToDelete icon={<span className="text-lg">🗑️</span>} onDelete={() => alert("Custom icon deletion")} />;
}
