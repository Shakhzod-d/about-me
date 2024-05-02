// import React from 'react'
import {
  Works,
  WorksInner,
  Title,
  WorkCards,
  WorkCard,
} from "./WorksPagee-styles";
import { Button, Flex, Modal } from "antd";
import work1 from "../../assets/worksPage/work-1.png";
import work2 from "../../assets/worksPage/work-2.png";
import work3 from "../../assets/worksPage/work-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
const arr: any[] = [work1, work2, work3, work1, work3, work2, work2];

const language = [
  {
    type: "All",
  },
  {
    type: "C#",
  },
  {
    type: "C++",
  },
];

const WorksPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("All");
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Works>
      <WorksInner>
        <Title>
          My recent <span>works</span>
        </Title>
        <Flex gap="large" wrap="wrap">
          {language.map((item: any) => {
            return (
              <Button
                onClick={() => {
                  setName(item.type);
                }}
                type="primary"
                shape="round"
                style={{
                  height: "47px",
                  background:
                    item.type === name ? "#00adb5" : "rgba(57, 62, 70, 0.75)",
                  boxShadow: "none",
                  padding: "10px 32px",
                  fontWeight: "700",
                  fontSize: "18px",
                }}
              >
                {item.type}
              </Button>
            );
          })}
        </Flex>
        <WorkCards>
        <Swiper
        slidesPerView={3}
        spaceBetween={75}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {arr.map((item: any) => {
              return (
                <SwiperSlide>
                  <WorkCard onClick={() => setIsModalOpen(true)}>
                    <img src={item} alt="photo" />
                  </WorkCard>
                </SwiperSlide>
              );
            })}
        
      </Swiper>
          
            
        </WorkCards>
      </WorksInner>
      <Modal
        title="Work"
        open={isModalOpen}
        onCancel={handleCancel}
        destroyOnClose
        footer={null}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          repudiandae eaque magnam earum mollitia nihil vero aperiam dolorem
          accusamus perferendis eum, nemo quos dignissimos voluptatum officia,
          at doloremque recusandae quas!
        </p>
      </Modal>
    </Works>
  );
};

export default WorksPage;
