import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getData } from "../../redux/actions";
import store from "../../redux/store";
import Heading from "./heading";
import Content from "./content";

const Detail = () => {
  console.log(store);
  //url'deki arama parametresini al
  const [params] = useSearchParams();
  const code = params.get("code");

  // dispatch kurulum
  const dispatch = useDispatch();

  //asenkron fonksiyonu tetikler
  const sendAction = () => dispatch(getData({ code }));
  useEffect(() => {
    sendAction();
  }, []);

  return (
    <div className="min-h-[calc(100vh-50px)] text-white grid place-items-center p-6">
      <div className=" bg-white min-h-[80vh] p-8 rounded-lg shadow-lg max-w-3xl max-md:w-full md:min-w-[600px]">
        {/* Üst kısım */}
        <Heading />

        {/* Alt kısım */}
        <Content retry={sendAction} />
      </div>
    </div>
  );
};

export default Detail;
