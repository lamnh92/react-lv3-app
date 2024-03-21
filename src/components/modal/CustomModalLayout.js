import { useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutSide";

const CustomModalLayout = ({
  handleModalClose,
  header,
  body,
  footer,
  isModalOpen,
  styleLayout,
  styleHeader,
  styleBody,
  styleFooter,
  isOutside,
}) => {
  const ref = useRef();

  useOnClickOutside(ref, handleModalClose);

  return (
    <div
      className={`w-100 
      h-100 
      top-0 
      left-0 
      bg-secondary 
      bg-opacity-25 
      position-fixed 
      overflow-auto 
      d-flex align-items-center 
      justify-content-center 
      pointer-events-auto 
      ${isModalOpen ? "visible opacity-100" : "invisible"}`}
    >
      <div
        className="bg-light position-relative mx-auto rounded-3 mw-100"
        ref={isOutside ? ref : null}
        style={styleLayout}
      >
        <button
          type="button"
          className="btn position-absolute top-0 end-0"
          onClick={handleModalClose}
        >
          &times;
        </button>

        {header && (
          <div className="p-2 " style={styleHeader}>
            {header}
          </div>
        )}
        {body && (
          <div className="p-2" style={styleBody}>
            {body}
          </div>
        )}
        {footer && (
          <div className="p-2" style={styleFooter}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomModalLayout;
