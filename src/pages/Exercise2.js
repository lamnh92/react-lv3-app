import React from "react";
import CustomDialog from "../components/dialog/CustomDialog";
import CustomModal from "../components/modal/CustomModal";
import useBoolean from "../hooks/useBoolean";

const Exercise2 = React.memo(() => {
  const [isShowModal1, showModal1, hideModal1] = useBoolean(false);
  const [isShowModal2, showModal2, hideModal2] = useBoolean(false);
  const [isShowModal3, showModal3, hideModal3] = useBoolean(false);

  return (
    <>
      <h1> Exercise 2</h1>
      <button
        type="button"
        className="btn btn-primary m-2"
        onClick={showModal1}
      >
        Sample1
      </button>
      <CustomModal
        isOutside={true}
        styleLayout={{ width: "700px" }}
        isModalOpen={isShowModal1}
        handleModalClose={hideModal1}
        header={<h2> Header</h2>}
        body={<h2> Body</h2>}
        footer={<h2>Footer</h2>}
      ></CustomModal>
      <button
        type="button"
        className="btn btn-primary m-2"
        onClick={showModal2}
      >
        Dialog
      </button>
      <CustomDialog
        styleLayout={{ width: "700px" }}
        isModalOpen={isShowModal2}
        handleModalClose={hideModal2}
        body={"Are you sure you want to update this item?"}
        onSubmit={() => console.log("comfirm")}
      ></CustomDialog>

      <button
        type="button"
        className="btn btn-primary m-2"
        onClick={showModal3}
      >
        Modal
      </button>
      <CustomModal
        isOutside={true}
        styleLayout={{ width: "700px" }}
        isModalOpen={isShowModal3}
        handleModalClose={hideModal3}
        styleFooter={{ color: "black", backgroundColor: "#4cb66c" }}
        header={
          <>
            <h2> Header</h2>
            <hr />
          </>
        }
        body={
          <>
            <h2> Body</h2>
            <img
              src={process.env.PUBLIC_URL + "/image/image_1.jpg"}
              alt="image1"
              width="30%"
            />
          </>
        }
        footer={
          <>
            <hr />
            <h2>Footer</h2>
          </>
        }
      ></CustomModal>
    </>
  );
});

export default Exercise2;
