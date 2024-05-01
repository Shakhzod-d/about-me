// import React from 'react'
import { Works, WorksInner, Title, WorkCards, WorkCard } from "./WorksPagee-styles"
import { Button, Flex, Modal } from 'antd';
import work1 from "../../assets/worksPage/work-1.png"
import work2 from "../../assets/worksPage/work-2.png"
import work3 from "../../assets/worksPage/work-3.png"
import { useState } from "react";

const language = [
    {
        type: 'All'
    },
    {
        type: 'C#'
    },
    {
        type: 'C++'
    }
]

const WorksPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [ name, setName ] = useState<string>('All')
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <Works>
            <WorksInner>
                <Title>My recent <span>works</span></Title>
                <Flex gap="large" wrap="wrap">
                    {
                        language.map((item: any) => {
                            return <Button onClick={() => {setName(item.type)}} type="primary" shape="round" style={{ height: '47px', background: item.type === name ? '#00adb5' : 'rgba(57, 62, 70, 0.75)', boxShadow: 'none', padding: '10px 32px', fontWeight: '700', fontSize: '18px' }}>{item.type}</Button>
                        })
                    }
                </Flex>
                <WorkCards>
                    <WorkCard onClick={() => setIsModalOpen(true)}><img src={work1} alt="photo" /></WorkCard>
                    <WorkCard onClick={() => setIsModalOpen(true)}><img src={work2} alt="photo" /></WorkCard>
                    <WorkCard onClick={() => setIsModalOpen(true)}><img src={work3} alt="photo" /></WorkCard>
                </WorkCards>
            </WorksInner>
            <Modal title="Work" open={isModalOpen} onCancel={handleCancel} destroyOnClose footer={null} >
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, repudiandae eaque magnam earum mollitia nihil vero aperiam dolorem accusamus perferendis eum, nemo quos dignissimos voluptatum officia, at doloremque recusandae quas!</p>
            </Modal>
        </Works>
    )
}

export default WorksPage