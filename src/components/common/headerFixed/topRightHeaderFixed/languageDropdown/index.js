import React from 'react';
import { Link } from 'react-router-dom';    

const LanguageDropdown = () => {
    const language = [
        {language: "English"},
        {language: "Urdu"},
        {language: "Punjabi"}
    ];

    return (
        <div className="rounded-md py-4">
            {language.map((lang, i) => {
                return  <div className="px-3 py-3 hover:bg-blue-100" key={i} onClick={() => this.props.languageSelectHandler(lang)}>
                            <Link to="#" className="flex items-center">
                                <span className="text-xs text-gray-600 text-gray-600 hover:text-blue-500">{lang.language}</span>
                            </Link>
                        </div>
            })}
        </div>
    )
}

export default LanguageDropdown;