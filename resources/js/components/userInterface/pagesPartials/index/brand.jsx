import { useEffect, useState } from "react";
import { getWithAxios } from "@/components/api/axios";
import Select from 'react-select'

const Brand = () => {

    const [countries, setCountries] = useState();

    const getCountries = async () => {
        const data = await getWithAxios("/api/country-list");
      
        if (data.status == "success") {
            setCountries(data.data.countries);
        }
    };


    useEffect(() => {
        getCountries()
    },[])

    return (
        <div className="bg-gradient-to-b from-[#007bff] to-[#004691] pb-24 px-24">
            <div className="text-[4rem] text-white font-bold" >
                We make shipping easy
            </div>
            <div className="text-white text-3xl">
                Immediate prices, easy booking
            </div>
            <div>
                <div class="styles_card__q54pd styles_noPadding__oh_B4 styles_biggerRadiusDesktop__d7e_z">
                    <div class="w-full grid gap-8 px-4 md:grid-cols-4">
                       <div className="form-group">
                        <label className="form-label font-bold">FROM</label>
                       <Select options={countries} />
                       </div>

                       <div>
                        <label>FROM</label>
                       <Select options={countries} />
                       </div>

                    </div>
                </div>
                <div class="styles_priceSection__1ELMs">
                    <div class="styles_priceTag__wHWE_ styles_onRequest__F04dw">
                        On request
                    </div>
                    <a
                        data-testid="button"
                        class="styles_submit__E_zzY styles_button__eH6h8 styles_primary___lodd"
                        color="primary"
                        href="#"
                    >
                        Start shipping
                        <span
                            class="styles_buttonIcon__AjG0n styles_right__Hn3fE"
                            style={{ "width": "14px", "height": "14px" }}
                        >
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="arrow-right"
                                class="svg-inline--fa fa-arrow-right "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                                ></path>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Brand;
