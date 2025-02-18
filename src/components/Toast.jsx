import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const obj= {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",
};
 export const successToast = (message) => {
    toast.success(message,obj)}
export const warningToast=(message)=>{
  toast.warning(message,obj)
}
export const errorToast=(message)=>{
  toast.error(message)
}
