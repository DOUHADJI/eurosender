import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Navbar = () => {
    const [color, setColor] = useState(false);
    const navbar = useRef(null);
    const location = useLocation();
    const homePath = location.pathname;
   

    const links = [
        {
            title: "Services",
            paths: [
                {
                    path: "document shipping",
                },

                {
                    path: "package shipping",
                },
            ],
        },

        {
            title: "Help",
            to: "/",
            paths: [],
        },

        {
            title: "About us",
            paths: [
                {
                    path: "document shipping",
                },

                {
                    path: "package shipping",
                },

                {
                    path: "with submeunu",
                    submenu: [
                        {
                            to: "/",
                        },
                    ],
                },
            ],
        },
    ];

    useEffect(() => {
        if (window.scrollY >= 100) {
            navbar.current.classList.remove("bg-[#007bff]");
            navbar.current.classList.add("bg-[#ffffff]");
            setColor(true);
        } else {
            navbar.current.classList.remove("bg-[#ffffff]");
            navbar.current.classList.add("bg-[#007bff]");
            setColor(false);
        }
    }, []);
    return (
        <>
            <div  class="styles_infoBanner__msYEX styles_withoutTrustpilot__0wSgH">
                <div class="styles_shippingUpdatesSection__BWMT1">
                    <a
                        class="styles_link__8RedC"
                        aria-label=""
                        href="https://www.eurosender.com/en/logistics-updates"
                    >
                        <span class="styles_label__w4Z_P">
                            Check the latest shipping updates
                        </span>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="circle"
                            class="svg-inline--fa fa-circle styles_dot__c1Yy7"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="currentColor"
                                d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>

            <div ref={navbar} className="styles_sticky__thVR6">
                <nav
                    data-testid="Navbar"
                    className="styles_navbar__CXEXm styles_transparent__k_H18"
                >
                    <div className="styles_sectionLeft__s7CE4">
                        <a className="styles_logo__Lcw9X" href="/">
                            <div
                                className="styles_logo__XcQ9B "
                                style={{ width: "150px" }}
                            >
                                <svg
                                    width="100%"
                                    viewBox="0 0 150 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M10.3687 10.4715L12.9656 13.0286L18.5429 7.7492V11.0488H22.1198V2.05719H12.8379V5.52181H15.4774L10.3687 10.4715Z"
                                        fill="white"
                                    ></path>
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M9.27338 2.05719V5.60171H3.57306V20.4552H18.5462V14.8007H22.1198V24H0V2.05719H9.27338Z"
                                        fill="white"
                                    ></path>
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M32.5496 14.4012C32.5496 15.9002 32.9273 17.0325 33.6818 17.7987C34.4364 18.5647 35.4652 18.9477 36.7681 18.9477C37.523 18.9477 38.1704 18.8814 38.7108 18.7477C39.2505 18.6149 39.7438 18.4236 40.1901 18.1732L40.781 19.6222C40.3184 19.8887 39.7308 20.1095 39.0194 20.2843C38.3074 20.4594 37.4976 20.5465 36.5887 20.5465C34.7019 20.5465 33.2017 19.9597 32.0869 18.7852C30.9719 17.6111 30.415 15.8586 30.415 13.5267C30.415 11.2948 30.925 9.5796 31.9456 8.38023C32.9654 7.18141 34.3163 6.58146 35.9969 6.58146C37.6945 6.58146 38.9977 7.12717 39.9069 8.21778C40.8157 9.30894 41.2699 10.962 41.2699 13.1772L32.5496 14.4012ZM35.919 8.00576C34.8564 8.00576 34.0152 8.4345 33.3983 9.29252C32.7811 10.15 32.4725 11.4614 32.4725 13.227L39.1091 12.2444C39.1091 10.7664 38.8388 9.68783 38.2984 9.01309C37.7587 8.343 36.9655 8.00576 35.919 8.00576ZM49.2954 20.5714C47.6151 20.5714 46.3761 20.1885 45.5787 19.4222C44.7812 18.6562 44.3824 17.5736 44.3824 16.1748V6.83132H46.6464V16.2701C46.6464 17.1029 46.8777 17.7736 47.3406 18.2856C47.8038 18.7935 48.4988 19.0474 49.4243 19.0474C50.4528 19.0474 51.2852 18.8644 51.9196 18.4982V6.83132H54.1834V19.4975C53.6175 19.8137 52.9272 20.0715 52.1126 20.2715C51.2982 20.4717 50.3589 20.5714 49.2954 20.5714ZM63.2635 8.28051C62.8514 8.18052 62.397 8.13066 61.8997 8.13066C61.1795 8.13066 60.5792 8.27202 60.0994 8.55529V20.2966H57.8354V7.55591C58.5387 7.20607 59.3107 6.96061 60.1508 6.81925C60.9911 6.67706 62.2088 6.60666 63.8029 6.60666L63.2635 8.28051ZM71.0052 20.5465C69.2047 20.5465 67.8501 19.9057 66.9413 18.6231C66.0321 17.3407 65.5779 15.6583 65.5779 13.5766C65.5779 11.4614 66.0279 9.76671 66.9283 8.49283C67.8284 7.21895 69.1787 6.58146 70.9793 6.58146C72.8148 6.58146 74.1778 7.21456 75.0698 8.48023C75.9614 9.74616 76.4077 11.4452 76.4077 13.5766C76.4077 15.6748 75.9569 17.3612 75.0565 18.6354C74.1564 19.9098 72.8063 20.5465 71.0052 20.5465ZM71.0056 7.98083C69.8056 7.98083 68.9777 8.50545 68.5236 9.55442C68.0686 10.6039 67.8418 11.9447 67.8418 13.5766C67.8418 15.2088 68.0686 16.5246 68.5236 17.5237C68.9777 18.5234 69.8056 19.0228 71.0056 19.0228C72.2059 19.0228 73.0296 18.519 73.475 17.5108C73.9212 16.5038 74.1435 15.1924 74.1435 13.5766C74.1435 11.9277 73.9212 10.5828 73.475 9.54237C73.0296 8.50134 72.2059 7.98083 71.0056 7.98083ZM82.2204 20.4967C81.4664 20.4967 80.7843 20.4137 80.1759 20.2468C79.5674 20.08 79.0656 19.8556 78.6707 19.5721L79.2887 18.1234C79.5632 18.3565 79.9358 18.5483 80.4075 18.6982C80.8791 18.8475 81.4063 18.9228 81.9894 18.9228C82.7437 18.9228 83.3615 18.6982 83.8416 18.2483C84.3217 17.7988 84.5617 17.2489 84.5617 16.5994C84.5617 15.9334 84.3812 15.4126 84.0213 15.0384C83.6613 14.6636 82.9708 14.2886 81.9505 13.9136C80.9307 13.5391 80.1892 13.0358 79.726 12.4027C79.2628 11.7696 79.0312 11.0535 79.0312 10.2544C79.0312 9.20485 79.4126 8.32629 80.1759 7.61867C80.9392 6.91077 81.9381 6.55682 83.1722 6.55682C83.8416 6.55682 84.4413 6.63983 84.973 6.81078C85.5047 6.98172 85.9851 7.2102 86.4136 7.49813L85.8221 8.80516C85.5648 8.62654 85.2303 8.46381 84.8187 8.30985C84.4074 8.15561 83.9699 8.08082 83.507 8.08082C82.7696 8.08082 82.1996 8.28465 81.7962 8.69256C81.3931 9.10048 81.1922 9.60072 81.1922 10.1999C81.1922 10.7993 81.3891 11.2784 81.7838 11.645C82.1781 12.0115 82.8811 12.3813 83.8929 12.7564C84.9042 13.1314 85.6545 13.6352 86.1434 14.276C86.6325 14.9176 86.8765 15.6748 86.8765 16.5578C86.8765 17.6196 86.4435 18.5436 85.5775 19.3266C84.7115 20.1055 83.5922 20.4967 82.2204 20.4967ZM91.5067 14.4012C91.5067 15.9002 91.8844 17.0325 92.639 17.7987C93.3936 18.5647 94.422 18.9477 95.7253 18.9477C96.4801 18.9477 97.1278 18.8814 97.668 18.7477C98.2076 18.6149 98.7007 18.4236 99.1472 18.1732L99.7382 19.6222C99.2753 19.8887 98.688 20.1095 97.9766 20.2843C97.2646 20.4594 96.4547 20.5465 95.5456 20.5465C93.6587 20.5465 92.1589 19.9597 91.0438 18.7852C89.929 17.6111 89.3725 15.8586 89.3725 13.5267C89.3725 11.2948 89.8822 9.5796 90.9025 8.38023C91.9228 7.18141 93.2737 6.58146 94.954 6.58146C96.6516 6.58146 97.9548 7.12717 98.864 8.21778C99.7729 9.30894 100.227 10.962 100.227 13.1772L91.5067 14.4012ZM94.8761 8.00576C93.8135 8.00576 92.9726 8.4345 92.3554 9.29252C91.738 10.15 91.4299 11.4614 91.4299 13.227L98.0662 12.2444C98.0662 10.7664 97.796 9.68783 97.2555 9.01309C96.7162 8.343 95.9227 8.00576 94.8761 8.00576ZM111.133 20.2966V10.6283C111.133 9.87931 110.919 9.25469 110.49 8.75528C110.061 8.25558 109.307 8.00574 108.227 8.00574C107.644 8.00574 107.163 8.04327 106.786 8.11779C106.409 8.19312 106.015 8.31394 105.603 8.48023V20.2966H103.339V7.53098C104.008 7.21456 104.745 6.97732 105.552 6.81925C106.357 6.6609 107.309 6.58146 108.406 6.58146C110.173 6.58146 111.446 6.9691 112.226 7.74357C113.007 8.51803 113.397 9.4629 113.397 10.5784V20.2966H111.133ZM122.605 20.5465C120.668 20.5465 119.167 19.9389 118.104 18.719C117.041 17.5026 116.51 15.8501 116.51 13.7637C116.51 11.5614 117.058 9.82946 118.152 8.57229C119.245 7.31019 120.698 6.68147 122.512 6.68147C123.211 6.68147 123.939 6.78119 124.69 6.98172V0.68573H126.953V19.5975C126.49 19.8803 125.877 20.1096 125.114 20.2843C124.351 20.4594 123.515 20.5465 122.605 20.5465ZM124.69 8.20577C124.454 8.13893 124.175 8.08085 123.861 8.03044C123.544 7.98086 123.253 7.95593 122.979 7.95593C121.5 7.95593 120.432 8.48027 119.768 9.5339C119.103 10.5829 118.773 11.9362 118.773 13.5892C118.773 15.2924 119.086 16.6367 119.716 17.6196C120.346 18.6067 121.341 19.0973 122.7 19.0973C123.635 19.0973 124.299 18.9727 124.69 18.7231V8.20577ZM132.201 14.4012C132.201 15.9002 132.578 17.0325 133.333 17.7987C134.087 18.5647 135.116 18.9477 136.419 18.9477C137.174 18.9477 137.821 18.8814 138.362 18.7477C138.901 18.6149 139.395 18.4236 139.841 18.1732L140.431 19.6222C139.969 19.8887 139.382 20.1095 138.67 20.2843C137.958 20.4594 137.148 20.5465 136.239 20.5465C134.353 20.5465 132.852 19.9597 131.737 18.7852C130.623 17.6111 130.066 15.8586 130.066 13.5267C130.066 11.2948 130.576 9.5796 131.596 8.38023C132.616 7.18141 133.967 6.58146 135.647 6.58146C137.345 6.58146 138.648 7.12717 139.558 8.21778C140.466 9.30894 140.921 10.962 140.921 13.1772L132.201 14.4012ZM135.57 8.00576C134.507 8.00576 133.666 8.4345 133.049 9.29252C132.432 10.15 132.123 11.4614 132.123 13.227L138.76 12.2444C138.76 10.7664 138.489 9.68783 137.949 9.01309C137.41 8.343 136.616 8.00576 135.57 8.00576ZM149.461 8.28051C149.049 8.18052 148.595 8.13066 148.097 8.13066C147.377 8.13066 146.777 8.27202 146.297 8.55529V20.2966H144.033V7.55591C144.737 7.20607 145.509 6.96061 146.349 6.81925C147.189 6.67706 148.406 6.60666 150.001 6.60666L149.461 8.28051Z"
                                        fill="white"
                                    ></path>
                                </svg>
                            </div>
                        </a>
                    </div>{" "}
                    <div className="styles_sectionRight__ds8zn">
                        <div className="styles_mobileMenu__hct2W">
                            <a href="#" className="styles_dropDownIcon__WsHBh">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="bars"
                                    className="svg-inline--fa fa-bars styles_mobileIcon__0KFKW"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M0 88C0 74.75 10.75 64 24 64H424C437.3 64 448 74.75 448 88C448 101.3 437.3 112 424 112H24C10.75 112 0 101.3 0 88zM0 248C0 234.7 10.75 224 24 224H424C437.3 224 448 234.7 448 248C448 261.3 437.3 272 424 272H24C10.75 272 0 261.3 0 248zM424 432H24C10.75 432 0 421.3 0 408C0 394.7 10.75 384 24 384H424C437.3 384 448 394.7 448 408C448 421.3 437.3 432 424 432z"
                                    ></path>
                                </svg>
                            </a>
                            <div className="styles_menu__hSu_k">
                                <a
                                    href="#"
                                    className="styles_closeButton___qn9L"
                                >
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="far"
                                        data-icon="xmark"
                                        className="svg-inline--fa fa-xmark "
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 320 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256L7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256L312.1 375z"
                                        ></path>
                                    </svg>
                                </a>
                                <div className="styles_menuList__pb7UM">
                                    <div className="styles_menuItem__vs9Ap styles_featured__tEy29">
                                        <div className="styles_menuItemIcon__cCtYY">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="far"
                                                data-icon="arrow-right-to-bracket"
                                                className="svg-inline--fa fa-arrow-right-to-bracket "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M512 128v256c0 53.02-42.98 96-96 96h-72C330.7 480 320 469.3 320 456c0-13.26 10.75-24 24-24H416c26.4 0 48-21.6 48-48V128c0-26.4-21.6-48-48-48h-72C330.7 80 320 69.25 320 56C320 42.74 330.7 32 344 32H416C469 32 512 74.98 512 128zM345.5 239.6l-128-136C208.4 93.88 193.2 93.44 183.6 102.5C173.9 111.6 173.4 126.8 182.5 136.4L272.4 232H24C10.75 232 0 242.8 0 256s10.75 24 24 24h248.4l-89.92 95.56c-9.094 9.656-8.625 24.84 1.031 33.91C188.2 413.8 194.1 416 200 416c6.375 0 12.75-2.531 17.47-7.562l128-136C354.2 263.2 354.2 248.8 345.5 239.6z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <Link
                                            rel="nofollow"
                                            className="styles_menuItemText__uJvJI"
                                            to="/account/sign-in"
                                        >
                                            Log In
                                        </Link>
                                    </div>
                                    <div className="styles_menuItem__vs9Ap styles_featured__tEy29">
                                        <div
                                            className="styles_menuItemIcon__cCtYY"
                                            style={{ "font-weight": "bolder" }}
                                        >
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="far"
                                                data-icon="user-plus"
                                                className="svg-inline--fa fa-user-plus "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 640 512"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80C179.9 208 144 172.1 144 128C144 83.89 179.9 48 224 48zM274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM48.71 464C55.38 401.1 108.7 352 173.3 352H274.7c64.61 0 117.1 49.13 124.6 112H48.71zM616 200h-48v-48C568 138.8 557.3 128 544 128s-24 10.75-24 24v48h-48C458.8 200 448 210.8 448 224s10.75 24 24 24h48v48C520 309.3 530.8 320 544 320s24-10.75 24-24v-48h48C629.3 248 640 237.3 640 224S629.3 200 616 200z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <a
                                            className="styles_menuItemText__uJvJI"
                                            rel="nofollow"
                                            href="/en/account/register"
                                        >
                                            Make an account
                                        </a>
                                    </div>
                                    <div className="styles_menuItem__vs9Ap styles_featured__tEy29">
                                        <div className="styles_menuItemIcon__cCtYY">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="far"
                                                data-icon="basket-shopping"
                                                className="svg-inline--fa fa-basket-shopping "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 576 512"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M224 392C224 405.3 213.3 416 200 416C186.7 416 176 405.3 176 392V312C176 298.7 186.7 288 200 288C213.3 288 224 298.7 224 312V392zM288 288C301.3 288 312 298.7 312 312V392C312 405.3 301.3 416 288 416C274.7 416 264 405.3 264 392V312C264 298.7 274.7 288 288 288zM400 392C400 405.3 389.3 416 376 416C362.7 416 352 405.3 352 392V312C352 298.7 362.7 288 376 288C389.3 288 400 298.7 400 312V392zM243.1 2.708C254.8 8.823 259.4 23.31 253.3 35.07L171.7 192H404.3L322.7 35.07C316.6 23.31 321.2 8.823 332.9 2.708C344.7-3.407 359.2 1.169 365.3 12.93L458.4 192H552C565.3 192 576 202.7 576 216C576 229.3 565.3 240 552 240H532L476.1 463.5C468.1 492 443.4 512 414 512H161.1C132.6 512 107 492 99.88 463.5L44 240H24C10.75 240 0 229.3 0 216C0 202.7 10.75 192 24 192H117.6L210.7 12.93C216.8 1.169 231.3-3.407 243.1 2.708H243.1zM146.4 451.9C148.2 459 154.6 464 161.1 464H414C421.4 464 427.8 459 429.6 451.9L482.5 240H93.48L146.4 451.9z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <a
                                            className="styles_menuItemText__uJvJI"
                                            href="/order/details"
                                        >
                                            Cart
                                            <span className="styles_cardDot__K_qE6">
                                                {" "}
                                            </span>
                                        </a>
                                    </div>
                                    <div className="styles_menuItem__vs9Ap">
                                        <a href="#">
                                            Services
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="far"
                                                data-icon="chevron-down"
                                                className="svg-inline--fa fa-chevron-down styles_chevron__8ufm9"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M432.6 209.3l-191.1 183.1C235.1 397.8 229.1 400 224 400s-11.97-2.219-16.59-6.688L15.41 209.3C5.814 200.2 5.502 184.1 14.69 175.4c9.125-9.625 24.38-9.938 33.91-.7187L224 342.8l175.4-168c9.5-9.219 24.78-8.906 33.91 .7187C442.5 184.1 442.2 200.2 432.6 209.3z"
                                                ></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="styles_menuItem__vs9Ap">
                                        <a href="/en/help-center">Help</a>
                                    </div>
                                    <div className="styles_menuItem__vs9Ap">
                                        <a href="#">
                                            About us
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="far"
                                                data-icon="chevron-down"
                                                className="svg-inline--fa fa-chevron-down styles_chevron__8ufm9"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M432.6 209.3l-191.1 183.1C235.1 397.8 229.1 400 224 400s-11.97-2.219-16.59-6.688L15.41 209.3C5.814 200.2 5.502 184.1 14.69 175.4c9.125-9.625 24.38-9.938 33.91-.7187L224 342.8l175.4-168c9.5-9.219 24.78-8.906 33.91 .7187C442.5 184.1 442.2 200.2 432.6 209.3z"
                                                ></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="styles_footer__YsfVm">
                                    <div className="styles_businessSwitch__uKdI7">
                                        <p>Switch to business</p>
                                        <label className="styles_toggle__APjWq">
                                            /* <input type="checkbox" />
                                            <div className="styles_toggle_control__V6Qm9">
                                                {" "}
                                            </div>
                                        </label>
                                    </div>
                                    <a
                                        className="styles_trigger__f4MfA styles_triggerLeft__SZ6tQ"
                                        role="menu"
                                        tabindex="-1"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="far"
                                            data-icon="globe"
                                            className="svg-inline--fa fa-globe "
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            style={{
                                                "transform-origin":
                                                    "0.5em 0.4375em",
                                            }}
                                        >
                                            <g transform="translate(256 256)">
                                                <g transform="translate(0, -32)  scale(1, 1)  rotate(0 0 0)">
                                                    <path
                                                        fill="currentColor"
                                                        d="M256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM256 464C263.4 464 282.1 456.8 303.6 415.6C312.4 397.9 319.1 376.4 325.6 352H186.4C192 376.4 199.6 397.9 208.4 415.6C229 456.8 248.6 464 256 464zM178.5 304H333.5C335.1 288.7 336 272.6 336 256C336 239.4 335.1 223.3 333.5 208H178.5C176.9 223.3 176 239.4 176 256C176 272.6 176.9 288.7 178.5 304V304zM325.6 160C319.1 135.6 312.4 114.1 303.6 96.45C282.1 55.22 263.4 48 256 48C248.6 48 229 55.22 208.4 96.45C199.6 114.1 192 135.6 186.4 160H325.6zM381.8 208C383.2 223.5 384 239.6 384 256C384 272.4 383.2 288.5 381.8 304H458.4C462.1 288.6 464 272.5 464 256C464 239.5 462.1 223.4 458.4 208H381.8zM342.1 66.61C356.2 92.26 367.4 124.1 374.7 160H440.6C419.2 118.9 384.4 85.88 342.1 66.61zM169.9 66.61C127.6 85.88 92.84 118.9 71.43 160H137.3C144.6 124.1 155.8 92.26 169.9 66.61V66.61zM48 256C48 272.5 49.93 288.6 53.57 304H130.2C128.8 288.5 128 272.4 128 256C128 239.6 128.8 223.5 130.2 208H53.57C49.93 223.4 48 239.5 48 256zM440.6 352H374.7C367.4 387.9 356.2 419.7 342.1 445.4C384.4 426.1 419.2 393.1 440.6 352zM137.3 352H71.43C92.84 393.1 127.6 426.1 169.9 445.4C155.8 419.7 144.6 387.9 137.3 352V352z"
                                                        transform="translate(-256 -256)"
                                                    ></path>
                                                </g>
                                            </g>
                                        </svg>
                                        English
                                    </a>
                                    <a
                                        className="styles_trigger__f4MfA styles_triggerRight__Tw5IJ"
                                        role="menu"
                                        tabindex="-1"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="far"
                                            data-icon="euro-sign"
                                            className="svg-inline--fa fa-euro-sign "
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 384 512"
                                            style={{
                                                "transform-origin":
                                                    "0.375em 0.4375em",
                                            }}
                                        >
                                            <g transform="translate(192 256)">
                                                <g transform="translate(0, -32)  scale(1, 1)  rotate(0 0 0)">
                                                    <path
                                                        fill="currentColor"
                                                        d="M56 240C42.75 240 32 229.3 32 216C32 202.7 42.75 192 56 192H89.28C116.8 99.47 202.5 32 304 32H328C341.3 32 352 42.75 352 56C352 69.25 341.3 80 328 80H304C229.4 80 165.6 126.4 139.1 192H296C309.3 192 320 202.7 320 216C320 229.3 309.3 240 296 240H128.7C128.2 245.3 128 250.6 128 256C128 261.4 128.2 266.7 128.7 272H296C309.3 272 320 282.7 320 296C320 309.3 309.3 320 296 320H139.1C165.6 385.6 229.4 432 304 432H328C341.3 432 352 442.7 352 456C352 469.3 341.3 480 328 480H304C202.5 480 116.8 412.5 89.28 320H56C42.75 320 32 309.3 32 296C32 282.7 42.75 272 56 272H80.56C80.19 266.7 80 261.4 80 256C80 250.6 80.19 245.3 80.56 240H56z"
                                                        transform="translate(-192 -256)"
                                                    ></path>
                                                </g>
                                            </g>
                                        </svg>
                                        EUR
                                    </a>
                                    <div
                                        className="styles_overlay__7Mw9Q"
                                        role="menu"
                                        tabindex="-1"
                                    >
                                        <div className="styles_popup__4lR4O undefined">
                                            <div className="styles_title__9ZeU1">
                                                Select your currency
                                                <div
                                                    role="button"
                                                    tabindex="0"
                                                    className="styles_closeButton__jbgA2"
                                                >
                                                    <svg
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        data-prefix="far"
                                                        data-icon="xmark"
                                                        className="svg-inline--fa fa-xmark "
                                                        role="img"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 320 512"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256L7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256L312.1 375z"
                                                        ></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="styles_currenciesWrapper__XKlUX">
                                                <div className="styles_item__I4BeS styles_itemSelected__nRjLD">
                                                    <div
                                                        tabindex="-1"
                                                        role="tab"
                                                        aria-selected="true"
                                                    >
                                                        EUR
                                                    </div>
                                                </div>
                                                <div className="styles_item__I4BeS">
                                                    <div
                                                        tabindex="-1"
                                                        role="tab"
                                                        aria-selected="false"
                                                    >
                                                        CZK
                                                    </div>
                                                </div>
                                                <div className="styles_item__I4BeS">
                                                    <div
                                                        tabindex="-1"
                                                        role="tab"
                                                        aria-selected="false"
                                                    >
                                                        DKK
                                                    </div>
                                                </div>
                                                <div className="styles_item__I4BeS">
                                                    <div
                                                        tabindex="-1"
                                                        role="tab"
                                                        aria-selected="false"
                                                    >
                                                        GBP
                                                    </div>
                                                </div>
                                                <div className="styles_item__I4BeS">
                                                    <div
                                                        tabindex="-1"
                                                        role="tab"
                                                        aria-selected="false"
                                                    >
                                                        PLN
                                                    </div>
                                                </div>
                                                <div className="styles_item__I4BeS">
                                                    <div
                                                        tabindex="-1"
                                                        role="tab"
                                                        aria-selected="false"
                                                    >
                                                        RON
                                                    </div>
                                                </div>
                                                <div className="styles_item__I4BeS">
                                                    <div
                                                        tabindex="-1"
                                                        role="tab"
                                                        aria-selected="false"
                                                    >
                                                        SEK
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="styles_overlay__7Mw9Q"
                                        role="menu"
                                        tabindex="-1"
                                    >
                                        <div className="styles_popup__4lR4O undefined">
                                            <div className="styles_title__9ZeU1">
                                                Select your language
                                                <div
                                                    role="button"
                                                    tabindex="0"
                                                    className="styles_closeButton__jbgA2"
                                                >
                                                    <svg
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        data-prefix="far"
                                                        data-icon="xmark"
                                                        className="svg-inline--fa fa-xmark "
                                                        role="img"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 320 512"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256L7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256L312.1 375z"
                                                        ></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="styles_languagesWrapper__jvgLM">
                                                <div className="styles_item__I4BeS styles_itemSelected__nRjLD">
                                                    <div
                                                        tabindex="-1"
                                                        role="tab"
                                                        aria-selected="true"
                                                    >
                                                        <span className="styles_flag__sJer8 styles_en__1UN4T styles_flag__8sWIN"></span>
                                                        English
                                                    </div>
                                                </div>
                                                <div className="styles_item__I4BeS">
                                                    <div
                                                        tabindex="-1"
                                                        role="tab"
                                                        aria-selected="false"
                                                    >
                                                        <span className="styles_flag__sJer8 styles_pl__aql1l styles_flag__8sWIN"></span>
                                                        Polski
                                                    </div>
                                                </div>
                                                <div className="styles_item__I4BeS">
                                                    <div
                                                        tabindex="-1"
                                                        role="tab"
                                                        aria-selected="false"
                                                    >
                                                        <span className="styles_flag__sJer8 styles_de__Ume8Z styles_flag__8sWIN"></span>
                                                        Deutsch
                                                    </div>
                                                </div>
                                                <div className="styles_item__I4BeS">
                                                    <div
                                                        tabindex="-1"
                                                        role="tab"
                                                        aria-selected="false"
                                                    >
                                                        <span className="styles_flag__sJer8 styles_el__C8Sdp styles_flag__8sWIN"></span>
                                                        ελληνικά
                                                    </div>
                                                </div>
                                                <div className="styles_item__I4BeS">
                                                    <div
                                                        tabindex="-1"
                                                        role="tab"
                                                        aria-selected="false"
                                                    >
                                                        <span className="styles_flag__sJer8 styles_es__JVBd4 styles_flag__8sWIN"></span>
                                                        Español
                                                    </div>
                                                </div>
                                                <div className="styles_item__I4BeS">
                                                    <div
                                                        tabindex="-1"
                                                        role="tab"
                                                        aria-selected="false"
                                                    >
                                                        <span className="styles_flag__sJer8 styles_fr__J_ssy styles_flag__8sWIN"></span>
                                                        Français
                                                    </div>
                                                </div>
                                                <div className="styles_item__I4BeS">
                                                    <div
                                                        tabindex="-1"
                                                        role="tab"
                                                        aria-selected="false"
                                                    >
                                                        <span className="styles_flag__sJer8 styles_da__WxZ3L styles_flag__8sWIN"></span>
                                                        Dansk
                                                        <span className="styles_languageBeta__n0L_0">
                                                            Beta
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="styles_item__I4BeS">
                                                    <div
                                                        tabindex="-1"
                                                        role="tab"
                                                        aria-selected="false"
                                                    >
                                                        <span className="styles_flag__sJer8 styles_hr__5G0ke styles_flag__8sWIN"></span>
                                                        Hrvatski
                                                    </div>
                                                </div>
                                                <div className="styles_item__I4BeS">
                                                    <div
                                                        tabindex="-1"
                                                        role="tab"
                                                        aria-selected="false"
                                                    >
                                                        <span className="styles_flag__sJer8 styles_it__qd1MQ styles_flag__8sWIN"></span>
                                                        Italiano
                                                    </div>
                                                </div>
                                                <div className="styles_item__I4BeS">
                                                    <div
                                                        tabindex="-1"
                                                        role="tab"
                                                        aria-selected="false"
                                                    >
                                                        <span className="styles_flag__sJer8 styles_nl__z_Ccc styles_flag__8sWIN"></span>
                                                        Nederlands
                                                    </div>
                                                </div>
                                                <div className="styles_item__I4BeS">
                                                    <div
                                                        tabindex="-1"
                                                        role="tab"
                                                        aria-selected="false"
                                                    >
                                                        <span className="styles_flag__sJer8 styles_pt___GCVU styles_flag__8sWIN"></span>
                                                        Português
                                                    </div>
                                                </div>
                                                <div className="styles_item__I4BeS">
                                                    <div
                                                        tabindex="-1"
                                                        role="tab"
                                                        aria-selected="false"
                                                    >
                                                        <span className="styles_flag__sJer8 styles_ro__d4wK3 styles_flag__8sWIN"></span>
                                                        Română
                                                    </div>
                                                </div>
                                                <div className="styles_item__I4BeS">
                                                    <div
                                                        tabindex="-1"
                                                        role="tab"
                                                        aria-selected="false"
                                                    >
                                                        <span className="styles_flag__sJer8 styles_sl__N7bQ5 styles_flag__8sWIN"></span>
                                                        Slovensko
                                                    </div>
                                                </div>
                                                <div className="styles_item__I4BeS">
                                                    <div
                                                        tabindex="-1"
                                                        role="tab"
                                                        aria-selected="false"
                                                    >
                                                        <span className="styles_flag__sJer8 styles_tr__U5ll9 styles_flag__8sWIN"></span>
                                                        Türk
                                                        <span className="styles_languageBeta__n0L_0">
                                                            Beta
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="styles_menu__5Q4P4">
                            <div
                                data-testid="Dropdown"
                                className="styles_dropdown__pz4PI"
                                role="none"
                            >
                                <a
                                    className="styles_item__kK1qU styles_toggle__HCUPS"
                                    href="#"
                                    orientation="bottom_right"
                                >
                                    Services
                                </a>
                            </div>
                            <a
                                className="styles_item__kK1qU"
                                href="/en/help-center"
                            >
                                Help
                            </a>
                            <div
                                data-testid="Dropdown"
                                className="styles_dropdown__pz4PI"
                                role="none"
                            >
                                <a
                                    className="styles_item__kK1qU styles_toggle__HCUPS"
                                    href="#"
                                    orientation="bottom_right"
                                >
                                    About us
                                </a>
                            </div>
                            <div className="styles_button__8OI9I">
                                <a
                                    data-testid="button"
                                    href="/en/account/register/person"
                                    className="styles_button__eH6h8 styles_register__b7dhs"
                                    color="register"
                                    rel="nofollow"
                                >
                                    Create account{" "}
                                </a>
                            </div>
                            <Link
                                className="styles_item__kK1qU"
                                style={{ "font-weight": "bold" }}
                                rel="nofollow"
                                to="/account/sign-in"
                            >
                                log in
                            </Link>
                            <div className="styles_user__xLm3a">
                                <div
                                    data-testid="Dropdown"
                                    className="styles_dropdown__pz4PI"
                                    role="none"
                                >
                                    <a
                                        className="styles_userButton__dXzxX styles_hasAlert__KwF_8 styles_toggle__HCUPS"
                                        href="/account/register"
                                        orientation="bottom_left"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="far"
                                            data-icon="bars"
                                            className="svg-inline--fa fa-bars navUserButton"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                            style={{
                                                "transform-origin":
                                                    "0.4375em 0.6875em",
                                                height: "33px",
                                            }}
                                        >
                                            <g transform="translate(224 256)">
                                                <g transform="translate(0, 96)  scale(1, 1)  rotate(0 0 0)">
                                                    <path
                                                        fill="currentColor"
                                                        d="M0 88C0 74.75 10.75 64 24 64H424C437.3 64 448 74.75 448 88C448 101.3 437.3 112 424 112H24C10.75 112 0 101.3 0 88zM0 248C0 234.7 10.75 224 24 224H424C437.3 224 448 234.7 448 248C448 261.3 437.3 272 424 272H24C10.75 272 0 261.3 0 248zM424 432H24C10.75 432 0 421.3 0 408C0 394.7 10.75 384 24 384H424C437.3 384 448 394.7 448 408C448 421.3 437.3 432 424 432z"
                                                        transform="translate(-224 -256)"
                                                    ></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
