import { HomeOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons"
import { Footer1, Ul, FooterText } from "./Footer-styles"

const Footer = () => {
  return (
    <Footer1>
        <div style={{marginBottom: '38px'}}>
            <Ul style={{gap: '58px'}}>
                <li><HomeOutlined style={{fontSize: '20px'}}/>  Home</li>
                <li><UserOutlined style={{fontSize: '20px'}}/>  About me</li>
                <li><PhoneOutlined style={{rotate: '90deg', fontSize: '20px'}}/>  Contact</li>
            </Ul>
        </div>
        <nav style={{marginBottom: '92px'}}>
            <Ul>
                <li>
                    <a href="#">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="24" fill="#393E46"/>
                            <path d="M30 14H27C25.6739 14 24.4021 14.5268 23.4645 15.4645C22.5268 16.4021 22 17.6739 22 19V22H19V26H22V34H26V26H29L30 22H26V19C26 18.7348 26.1054 18.4804 26.2929 18.2929C26.4804 18.1054 26.7348 18 27 18H30V14Z" stroke="#EEEEEE" strokeOpacity="0.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_25_10156)">
                            <rect width="48" height="48" rx="24" fill="#393E46"/>
                            <rect width="48" height="48" rx="24" fill="#393E46"/>
                            <rect width="48" height="48" rx="24" fill="#393E46"/>
                            <path d="M29 14H19C16.2386 14 14 16.2386 14 19V29C14 31.7614 16.2386 34 19 34H29C31.7614 34 34 31.7614 34 29V19C34 16.2386 31.7614 14 29 14Z" stroke="#EEEEEE" strokeOpacity="0.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M28 23.3701C28.1234 24.2023 27.9812 25.0523 27.5937 25.7991C27.2062 26.5459 26.5931 27.1515 25.8416 27.5297C25.0901 27.908 24.2384 28.0397 23.4077 27.906C22.5771 27.7723 21.8097 27.3801 21.2148 26.7852C20.6199 26.1903 20.2277 25.4229 20.094 24.5923C19.9604 23.7616 20.092 22.91 20.4703 22.1584C20.8485 21.4069 21.4541 20.7938 22.2009 20.4063C22.9477 20.0188 23.7977 19.8766 24.63 20.0001C25.4789 20.1259 26.2648 20.5215 26.8716 21.1284C27.4785 21.7352 27.8741 22.5211 28 23.3701Z" stroke="#EEEEEE" strokeOpacity="0.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M29.5 18.5H29.51" stroke="#EEEEEE" strokeOpacity="0.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_25_10156">
                            <rect width="48" height="48" rx="24" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_25_10159)">
                        <rect width="48" height="48" rx="24" fill="#393E46"/>
                        <rect width="48" height="48" rx="24" fill="#393E46"/>
                        <rect width="48" height="48" rx="24" fill="#393E46"/>
                        <path d="M35 15C34.0424 15.6755 32.9821 16.1922 31.86 16.53C31.2577 15.8376 30.4573 15.3467 29.567 15.124C28.6767 14.9012 27.7395 14.9572 26.8821 15.2845C26.0247 15.6118 25.2884 16.1944 24.773 16.9538C24.2575 17.7131 23.9877 18.6124 24 19.53V20.53C22.2426 20.5756 20.5013 20.1859 18.931 19.3955C17.3607 18.6051 16.0103 17.4387 15 16C15 16 11 25 20 29C17.9405 30.398 15.4872 31.099 13 31C22 36 33 31 33 19.5C32.9991 19.2215 32.9723 18.9436 32.92 18.67C33.9406 17.6635 34.6608 16.3928 35 15V15Z" stroke="#EEEEEE" strokeOpacity="0.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_25_10159">
                        <rect width="48" height="48" rx="24" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="24" fill="#393E46"/>
                        <path d="M34.54 18.42C34.4212 17.9454 34.1792 17.5106 33.8386 17.1594C33.498 16.8082 33.0707 16.5532 32.6 16.42C30.88 16 24 16 24 16C24 16 17.12 16 15.4 16.46C14.9292 16.5932 14.5019 16.8482 14.1613 17.1994C13.8207 17.5506 13.5787 17.9854 13.46 18.46C13.1452 20.2056 12.9912 21.9763 13 23.75C12.9887 25.537 13.1427 27.3213 13.46 29.08C13.5909 29.5398 13.8383 29.9581 14.1781 30.2945C14.5179 30.6308 14.9388 30.8738 15.4 31C17.12 31.46 24 31.46 24 31.46C24 31.46 30.88 31.46 32.6 31C33.0707 30.8668 33.498 30.6118 33.8386 30.2606C34.1792 29.9094 34.4212 29.4746 34.54 29C34.8523 27.2676 35.0063 25.5103 35 23.75C35.0112 21.963 34.8572 20.1787 34.54 18.42V18.42Z" stroke="#EEEEEE" strokeOpacity="0.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21.75 27.02L27.5 23.75L21.75 20.48V27.02Z" stroke="#EEEEEE" strokeOpacity="0.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </li>
            </Ul>
        </nav>
        <FooterText>Terms of Service - Privacy Policy</FooterText>
    </Footer1>
  )
}

export default Footer