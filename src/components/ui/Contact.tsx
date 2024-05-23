import { FieldValues } from "react-hook-form";
import NHFormProvider from "../../form/NHFormProvider";
import NHFormInput from "../../form/NHFormInput";
import NHFormTextarea from "../../form/NHFormTextarea";
import Container from "../../utils/Container";

const Contact = () => {
  const handleSubmit = async (values: FieldValues) => {
    try {
      console.log(values);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <Container>
      <div className="mt-20">
        <h1 className="text-3xl hind-siliguri-bold text-center">
          মন্তব্য <span className="text-[#FC4F4F]"> করুণ</span>
        </h1>
        <div className="max-w-3xl mx-auto mt-10">
          <NHFormProvider onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <NHFormInput type="text" name="name" placeholder="Name" required />
              <NHFormInput type="email" name="email" placeholder="Email" required />
            </div>
            <NHFormTextarea
              placeholder="Write your message"
              name="message"
              cols={5}
              rows={8}
              required
            />
            <div className="flex items-end justify-end">
              <input
                className="bg-[#FC4F4F] px-3 py-2 text-lg hind-siliguri-regular text-white rounded-md cursor-pointer"
                type="submit"
                value="Send Now"
              />
            </div>
          </NHFormProvider>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
