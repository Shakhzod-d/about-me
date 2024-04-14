
import { Home, HomeInner, HomeLeft, HomeRight, NextBtn } from "./HomePage-styles";
import { Typography } from "antd";
import { ArrowDownOutlined, DownloadOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';


const HomePage = () => {
    const { Title, Text} = Typography;
    return (
        <Home>
            <HomeInner>
                <HomeLeft>
                    <Title
                        style={{
                            maxWidth: "586px",
                            fontSize: "96px",
                            lineHeight: "70%",
                            fontWeight: "700",
                            color: "#eee",
                            fontFamily: 'Poppins',
                            marginBottom: '20px'
                        }}
                    >
                        CREATIVE UI  {" "}
                        <Text style={{ fontSize: "96px", color: "#00adb5" }}>DESIGNER</Text>
                    </Title>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '243px'}}>
                        <Space size={'large'} style={{display: 'flex'}}>
                            <Button type="primary" shape="round" style={{ background: '#00adb5', boxShadow:'none', textShadow: ' 0 4px 4px 0 rgba(0, 0, 0, 0.5)', fontWeight: '700'}}>
                                Hire me
                            </Button>
                            <Button type="primary" shape="round" style={{background: 'rgba(57, 62, 70, 0.75)', boxShadow:'none'}}>
                                Download CV <DownloadOutlined />
                            </Button>
                        </Space>
                        <NextBtn><ArrowDownOutlined style={{fontSize: '50px', color: '#eeeeeebb'}}/></NextBtn>
                    </div>

                </HomeLeft>
                <HomeRight/>
            </HomeInner>
        </Home>
    );
};

export default HomePage;
