import NHLink from "../../utils/NHLink";
import netlifyImg from "../../assets/images/netlify.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Styles from "../../styles/NHBanner.module.css";

const NHBanner = () => {
  return (
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
          <div className={`${Styles.NHBannerBG} p-5 lg:p-10 rounded-md shadow`}>
            <div className="flex items-center justify-between flex-col lg:flex-row">
              <div className="flex-1">
                <h1 className="text-3xl lg:text-5xl poppins-semibold">
                  How to fix Page Not Found on netlify
                </h1>
                <p className="text-md poppins-light max-w-[60ch] mt-2">
                  I'm not sure if other static site servers/platforms are all
                  like that, but if you deploy SPA to Netlify you can only
                  navigate from index.html to other pages using Links.
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
      </Swiper>
    </div>
  );
};

export default NHBanner;
