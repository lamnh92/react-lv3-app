import CustomModalLayout from "./CustomModalLayout";

const CustomModal = ({
  header,
  body,
  footer,
  isModalOpen,
  handleModalClose,
  styleLayout,
  styleHeader,
  styleBody,
  styleFooter,
  isOutside
}) => {
  return (
    <CustomModalLayout
      styleLayout={styleLayout}
      styleHeader={styleHeader}
      styleBody ={styleBody}
      styleFooter={styleFooter}
      isModalOpen={isModalOpen}
      header={header}
      footer={footer}
      handleModalClose={handleModalClose}
      body={body}
      isOutside={isOutside}
    ></CustomModalLayout>
  );
};

export default CustomModal;
