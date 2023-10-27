import { useState, forwardRef } from "react";
import Title from "../ui/Title";

const initialData = { name: "", email: "", phone: "", description: "" };

const Contact = forwardRef((props, ref) => {
  const [form, setForm] = useState(initialData);
  return (
    <div className="md:flex contact" ref={ref}>
      <div className="flex flex-col items-center p-2 bg-white text-black h-screen gap-5 justify-center md:w-1/2 md:justify-normal">
        <div className="md:self-end md:mr-40 md:flex md:flex-col">
          <div className="text-center mb-5 md:text-start md:mb-20 md:mt-32 ">
            <h1 className="font-vt text-6xl md:text-8xl">CONTACT</h1>
            <h6 className="text-[8px] leading-6">
              請留下需求，我們盡快與您聯繫
              <br />
              也可以依照下方資訊直接跟我們聯繫
            </h6>
          </div>

          <div className="flex flex-col gap-5">
            <div className="text-orange-600 md:order-1">
              📞 +886-2-2731-1766
            </div>
            <div className="w-full h-[1px] bg-gray-300 md:order-3" />
            <span className="text-sm md:order-2">
              大聯線股份有限公司
              <br />
              台北市106大安區忠孝東路四段325號9樓
            </span>
            <div className="flex justify-center md:justify-normal md:order-4">
              <Title type="small" />
            </div>
          </div>
        </div>
      </div>

      <form className="p-10 flex flex-col justify-center md:w-[50%] relative md:items-start bg-zinc-800">
        <label htmlFor="name">姓名</label>
        <input
          id="name"
          onChange={(e) =>
            setForm((prev) => {
              return { ...prev, name: e.target.value };
            })
          }
          className={`bg-transparent border-b-[1px] border-gray-500 placeholder:text-transparent focus:placeholder:text-gray-500 outline-none focus:py-4 focus:border-orange-600 mb-10 md:w-[60%] ${
            form.name ? "py-4" : "py-0"
          }`}
          placeholder="我是客戶"
        />
        <label htmlFor="email">EMAIL</label>
        <input
          id="email"
          onChange={(e) =>
            setForm((prev) => {
              return { ...prev, email: e.target.value };
            })
          }
          className={`bg-transparent border-b-[1px] border-gray-500 placeholder:text-transparent focus:placeholder:text-gray-500 outline-none focus:py-4 focus:border-orange-600 mb-10 md:w-[60%] ${
            form.email ? "py-4" : "py-0"
          }`}
          placeholder="我是EMAIL"
        />
        <label htmlFor="phone">電話</label>
        <input
          id="phone"
          onChange={(e) =>
            setForm((prev) => {
              return { ...prev, phone: e.target.value };
            })
          }
          className={`bg-transparent border-b-[1px] border-gray-500 placeholder:text-transparent focus:placeholder:text-gray-500 outline-none focus:py-4 focus:border-orange-600 mb-10 md:w-[60%] ${
            form.phone ? "py-4" : "py-0"
          }`}
          placeholder="我是電話"
        />
        <label htmlFor="requirement" className="mb-5">
          需求說明
        </label>
        <textarea
          id="requirement"
          onChange={(e) =>
            setForm((prev) => {
              return { ...prev, description: e.target.value };
            })
          }
          className="p-2 resize-none align-text-top	bg-transparent border-[1px] border-gray-500 placeholder:text-transparent focus:placeholder:text-gray-500 outline-none h-32 focus:border-orange-600 mb-10 md:w-[60%]"
          placeholder="我是需求"
        />
        <button className="w-40 py-2 bg-white text-black rounded-full font-bold relative m-auto md:m-0 mb-10">
          確認送出
          <div className="absolute text-gray-500 text-6xl right-[-25px] top-[-10px]">
            &#8640;
          </div>
        </button>
        <img
          className="md:absolute bottom-0 right-[20%] w-[100px] h-[100px]"
          src="https://fakeimg.pl/80x80/"
        />
      </form>
    </div>
  );
});

Contact.displayName = "Contact";

export default Contact;
