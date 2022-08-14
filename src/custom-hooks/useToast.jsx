import React from "react";
import { toast } from "react-toastify";

const useToast = () => {
	const showToast = (toastText="Operation Successfull", toastTheme="success") => {
		toast[toastTheme](toastText, {
            theme: "colored",
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		}
		);
	};

	return { showToast };
};

export { useToast };