import styled from 'styled-components';
import { ThemeType } from '../../../redux/slices/themeSlice';

export const ContentStyled = styled.div<{ theme: 'light' | 'dark'; }>`
    display: flex;
    width: 100%;
    margin-top: 3rem;

    @media (max-width: 740px) {
        margin-top: 2rem;
        flex-direction: column;
        align-items: center;
    }
    @media (max-width: 460px) {
        margin: 0rem 0rem 2rem 0rem;
    }

    .left_content {
        width: max-content;

        .content_user_login {
            margin: 2rem 0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #0074D9;
            font-weight: bolder;
            transition: transform 0.2s ease;

            &:hover {
                opacity: 0.8;
                transform: scale(1.1);
            }
        }

        @media (max-width: 460px) {
            margin: 2rem 0rem 0rem 0rem;
        }
    }

    .right_content {
        margin-left: 3rem;
        width: 100%;
        font-family: "Fira_Code", sans-serif;

        @media (max-width: 740px) {
            margin: 0rem;
            flex-direction: column;
            align-items: center;
        }

        @media (max-width: 1150px) {
            margin: 1rem;
            flex-direction: column;
            align-items: center;
        }

        .content_user_info {
            font-family: "Source_Code_Pro", sans-serif;
            display: flex;
            height: max-content;
            justify-content: space-between;
            margin-bottom: 3rem;

            :first-child {
                font-family: "Press_Start_2P", sans-serif;
                font-size: 1.6rem;

                @media (max-width: 880px) {
                    font-size: 1.4rem;
                    max-width: 20rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                @media (max-width: 750px) {
                    font-size: 1.4rem;
                }

                @media (max-width: 550px) {
                    font-size: 1.3rem;
                }
                
                @media (max-width: 460px) {
                    font-size: 1.2rem;
                    max-width: 18rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }

            :last-child {
                opacity: 0.6;
                margin-left: 1rem;
            }

            @media (max-width: 1100px) {
                flex-direction: column;
                align-items: flex-start;
                font-size: 0.8rem;
                :last-child {
                    margin-top: 1rem;
                    opacity: 0.6;
                }
            }
            @media (max-width: 740px) {
                align-items: center;
            }
        }

        .content_user_bio {
            display: flex;
            margin: 4rem 0 2rem;
            opacity: 0.6;
            font-size: 1.4rem;

            @media (max-width: 740px) {
                align-items: center;
            }
        }

        .content_user_activity {
            background-color: rgba(187, 187, 187, 0.6);
            box-shadow: 0 2px 5px rgba(100, 100, 100, 0.3);
            border-radius: 10px;
            padding: 2rem 4rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

            div {
                display: flex;
                flex-direction: column;
                align-items: center;
                color: ${(props) => (props.theme === ThemeType.dark ? 'white' : "rgba(0, 0, 0, 0.79)")};

                p {
                    font-family: "Press_Start_2P", sans-serif;
                    margin-top: 1rem;
                    font-size: 1.1rem;
                    color: rgba(0, 0, 0, 0.7);
                }
            }

            @media (max-width: 1024px) {
                font-size: 0.8rem;
                padding: 1rem;
            }

            @media (max-width: 940px) {
                flex-direction: column;
                align-items: center;
                font-size: 0.8rem;
                width: max-content;

                div {
                    margin: 2rem;
                    display: flex;
                    flex-direction: column;

                    p {
                        margin-top: 1rem;
                        font-size: 1.2rem;
                        color: rgba(0, 0, 0, 0.7);
                    }
                }
            }
            @media (max-width: 740px) {
                width: 100%;
            }
        }

        .content_user_about {
            fill: ${(props) => (props.theme === ThemeType.dark ? 'white' : "rgba(0, 0, 0, 0.79)")};
            margin-top: 5rem;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .content_block_left,
            .content_block_right {
                div {
                    display: flex;
                    align-items: center;
                    padding: 1.5rem 0;

                    span {
                        margin-right: 1rem;
                    }

                    p {
                        max-width: 25rem;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;

                        @media (max-width: 460px) {
                            max-width: 14rem;
                        }
                    }
                }
            }

            @media (max-width: 1100px) {
                flex-direction: column;
                align-items: flex-start;
                font-size: 0.8rem;
            }

            @media (max-width: 460px) {
                margin-top: 2rem;
            }
        }
    }
`;