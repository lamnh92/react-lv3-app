import { useCallback } from "react";
import CustomModal from "../modal/CustomModal";

const CustomDialog = ({
  header,
  body,
  isModalOpen,
  handleModalClose,
  styleLayout,
  onSubmit,
}) => {
  const handleComfirm = useCallback(
    (e) => {
      onSubmit();
      handleModalClose();
    },
    [onSubmit, handleModalClose]
  );

  return (
    <CustomModal
      isOutside={false}
      styleLayout={styleLayout}
      isModalOpen={isModalOpen}
      handleModalClose={handleModalClose}
      header={header}
      body={body}
      footer={
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-secondary m-2"
            onClick={handleModalClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-success m-2"
            onClick={handleComfirm}
          >
            OK
          </button>
        </div>
      }
    ></CustomModal>
  );
};

export default CustomDialog;
