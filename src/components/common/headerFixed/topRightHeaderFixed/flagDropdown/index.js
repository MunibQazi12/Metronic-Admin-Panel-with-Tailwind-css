import React from 'react';
import { Link } from 'react-router-dom';
import USA from '../../../../../assets/images/226-united-states.svg';
import China from '../../../../../assets/images/china.svg';
import Spain from '../../../../../assets/images/spain.svg';
import Japan from '../../../../../assets/images/japan.svg';
import France from '../../../../../assets/images/france.svg';

const FlagDropdown = () => {
    const flags = [
        {img:USA, name: "English"},
        {img:China, name: "Mandarin"},
        {img:Spain, name: "Spanish"},
        {img:Japan, name: "Japanese"},
        {img:France, name: "French"}
    ];

    return (
        <div className="rounded-md py-4">
            {flags.map((el, i) => {
                return  <div className="px-3 py-3 hover:bg-blue-100" key={i} onClick={() => this.props.flagSelectHandler(el)}>
                            <Link to="#" className="flex items-center">
                                <span className="rounded mr-3">
                                    <img src={el.img} alt="USA" className="w-5	h-5 rounded" />
                                </span>

                                <span className="text-xs text-gray-600 text-gray-600 hover:text-blue-500">{el.name}</span>
                            </Link>
                        </div>
            })}           
        </div>
    )
}

export default FlagDropdown;