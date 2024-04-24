// import React from 'react'
import { Works, WorksInner, Title, WorkCards, WorkCard } from "./WorksPagee-styles"
import { Button, Flex, Modal } from 'antd';
import work1 from "../../assets/worksPage/work-1.png"
import work2 from "../../assets/worksPage/work-2.png"
import work3 from "../../assets/worksPage/work-3.png"
import { useState } from "react";

const WorksPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <Works>
            <WorksInner>
                <Title>My recent <span>works</span></Title>
                <Flex gap="large" wrap="wrap">
                    <Button type="primary" shape="round" style={{ height: '47px', background: '#00adb5', boxShadow: 'none', textShadow: ' 0 4px 4px 0 rgba(0, 0, 0, 0.5)', padding: '10px 32px', fontWeight: '700' }}>
                        All
                    </Button>
                    <Button type="primary" shape="round" style={{ height: '47px', background: 'rgba(57, 62, 70, 0.75)', boxShadow: 'none', padding: '10px 32px', fontWeight: '700', fontSize: '18px' }}>
                        UI
                    </Button>
                    <Button type="primary" shape="round" style={{ height: '47px', background: 'rgba(57, 62, 70, 0.75)', boxShadow: 'none', padding: '10px 32px', fontWeight: '700' }}>
                        UX
                    </Button>
                    <Button type="primary" shape="round" style={{ height: '47px', background: 'rgba(57, 62, 70, 0.75)', boxShadow: 'none', padding: '10px 32px', fontWeight: '700' }}>
                        Web Design
                    </Button>
                </Flex>
                <WorkCards>
                    <WorkCard onClick={() => setIsModalOpen(true)}><img src={work1} alt="photo" /></WorkCard>
                    <WorkCard><img src={work2} alt="photo" /></WorkCard>
                    <WorkCard><img src={work3} alt="photo" /></WorkCard>
                </WorkCards>
            </WorksInner>
            <Modal title="Work" open={isModalOpen} onCancel={handleCancel} destroyOnClose footer={null}>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, repudiandae eaque magnam earum mollitia nihil vero aperiam dolorem accusamus perferendis eum, nemo quos dignissimos voluptatum officia, at doloremque recusandae quas!</p>
            </Modal>
        </Works>
    )
}

export default WorksPage