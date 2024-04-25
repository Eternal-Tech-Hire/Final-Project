"use client";
interface ModalProps {
  onClose: () => void;
  qr: string;
}
const ModalQR: React.FC<ModalProps> = ({ onClose, qr }) => {
  const closeModal = () => {
    onClose();
  };
  return (
    <>
      <div
        id="authentication-modal"
        aria-hidden="true"
        className="flex overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center"
      >
        <div className="relative justify-center w-60 max-w-md h-full md:h-auto">
          {/* Modal content */}
          <div className="bg-white pt-6 pb-12 rounded-lg shadow  w-80 dark:bg-white">
            <div className="flex justify-end ">
              <button
                type="button"
                className="text-gray-400 mr-4 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-md  p-2 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="authentication-modal"
                onClick={closeModal}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div>
              {qr ? (
                <img
                  className="flex justify-center w-96 items-center mx-auto"
                  src={qr}
                  alt=""
                />
              ) : (
                ""
              )}
            </div>
              <h1 className="text-center mt-14 text-2xl font-bold">Scan Me !!</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalQR;
