import NHLink from "../../utils/NHLink";
import netlifyImg from "../../assets/images/netlify.jpg";
import typescriptImg from "../../assets/images/typescript.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Styles from "../../styles/NHBanner.module.css";
import Container from "../../utils/Container";

const NHBanner = () => {
  return (
    <Container>
      <div className="mt-3">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div
              className={`${Styles.NHBannerBG} p-5 lg:p-10 rounded-md shadow`}
            >
              <div className="flex items-center justify-between flex-col lg:flex-row">
                <div className="flex-1">
                  <h1 className="text-3xl lg:text-4xl hind-siliguri-bold">
                    How to fix Page Not Found on netlify
                  </h1>
                  <p className="text-lg hind-siliguri-light max-w-[70ch] mt-2">
                    I'm not sure if other static site servers/platforms are all
                    like that, but if you deploy SPA to Netlify you can only
                    navigate from index.html to other pages using Links if you
                    deploy SPA to Netlify you can only navigate from index.html
                    to other pages using Links.
                  </p>
                  <NHLink linkUrl="/" linkText="Know more" />
                </div>
                <div className="mt-6 lg:mt-0">
                  <img
                    className={`${Styles.NHBannerImg} w-[450px] h-[350px] rounded-lg object-center`}
                    src={netlifyImg}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`${Styles.NHBannerBG} p-5 lg:p-10 rounded-md shadow`}
            >
              <div className="flex items-center justify-between flex-col lg:flex-row">
                <div className="flex-1">
                  <h1 className="text-3xl lg:text-4xl hind-siliguri-bold">
                    Express প্রজেক্ট এ TypeScript, ESLint এবং Prettier সেটাপ
                  </h1>
                  <p className="text-lg hind-siliguri-light max-w-[70ch] mt-2">
                    প্রিয় ডেভলপারস, আসসলামু আলাইকুম। আশা করি আপনারা সবাই ভালো
                    আছেন। আজকের ব্লগে কিভাবে TypeScript এর মাধ্যমে Express
                    প্রজেক্ট সেটাপ করতে হয় তা নিয়ে বিস্তারিত আলোচনা করবো এবং
                    কীভাবে প্রজেক্টে এ ESLint ও Prettier Formatter, TypeScript
                    প্রজেক্টে এ সেটাপ করতে হয়..
                  </p>
                  <NHLink linkUrl="/" linkText="Know more" />
                </div>
                <div className="mt-6 lg:mt-0">
                  <img
                    className={`${Styles.NHBannerImg} w-[450px] h-[350px] rounded-lg object-center`}
                    src={typescriptImg}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default NHBanner;
