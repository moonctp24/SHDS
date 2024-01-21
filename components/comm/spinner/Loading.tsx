import style from "./Loading.module.css";
import { BounceLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { spinnerAction } from "store/spinner/spinner-slice";

const Loading = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: any) => state.spinner.isLoading);
  const closeHandler = () => {
    dispatch(spinnerAction.complete());
  };

  return (
    <div className={`${style.spinner} ${isLoading && style.open}`} onClick={closeHandler}>
      <BounceLoader color="#6926d7" />
    </div>
  );
};

export default Loading;
