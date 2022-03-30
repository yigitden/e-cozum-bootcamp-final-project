import React, { useEffect } from "react";
import { Chip } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const ChecklistChip = ({ checklists }) => {
  const totalChecklistItem = () => {
    let count = 0;
    checklists.forEach((item) => {
      count += item.items.length;
    });
    return count;
  };

  const totalChecklistCheckedItem = () => {
    let countItemCheck = 0;
    checklists.forEach((item) => {
      item.items.forEach((i) => {
        if (i.isChecked === true) {
          countItemCheck += 1;
        }
      });
    });
    return countItemCheck;
  };

  useEffect(() => {
    totalChecklistItem();
    totalChecklistCheckedItem();
  }, []);

  return (
    <>
      {`${totalChecklistItem()}` == 0 ? (
        <></>
      ) : (
        <Chip
          sx={{ mt: 2 }}
          icon={<CheckCircleOutlineIcon sx={{ mr: 1, height: 20 }} />}
          color={
            `${totalChecklistCheckedItem()}` == `${totalChecklistItem()}`
              ? "success"
              : "default"
          }
          label={`${totalChecklistCheckedItem()} / ${totalChecklistItem()}`}
        />
      )}
    </>
  );
};

export default ChecklistChip;
