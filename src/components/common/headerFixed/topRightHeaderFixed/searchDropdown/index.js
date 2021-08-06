import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PDF from '../../../../../assets/images/pdf.png';
import DP from '../../../../../assets/images/members.jpg';
import CSV from '../../../../../assets/images/csv-file.png';
import DP1 from '../../../../../assets/images/dp1.jpg';

class SearchDropDown extends Component {
    render() {
        const Documents = [
            {image: PDF, title: "AirPlus Requirements", author: "by Grog John"},
            {image: CSV, title: "TechNav Documentation", author: "by Mary Broun"},
            {image: PDF, title: "All Framework Docs", author: "by Nick Stone"},
            {image: CSV, title: "Finance & Accounting Reports", author: "by Jhon Larson"}
        ]

        const Members = [
            {image: DP, name: "Milena Gibson", field: "UI Designer"},
            {image: DP1, name: "Stefan JohnStefan", field: "Marketing Manager"},
            {image: DP, name: "Anna Strong", field: "Software Developer"},
            {image: DP1, name: "Nick Bold", field: "Project Coordinator"}
        ]

        const Files = [
            {image: "picture_as_pdf", fileName: "79 PSD files generated", fileInfo: "by Grog John", imageColor: "text-blue-400"},
            {image: "shopping_basket", fileName: "$2900 worth products sold", fileInfo: "Total 234 items", imageColor: "text-yellow-400"},
            {image: "verified_user", fileName: "4 New items submitted", fileInfo: "Marketing Manager", imageColor: "text-purple-400"},
            {image: "verified_user", fileName: "4 New items submitted", fileInfo: "Marketing Manager", imageColor: "text-yellow-400"}
        ]

        return (
            <>
                <form className="p-0 border-b border-gray-300 pb-3">
                    <div className="flex">
                        <div className="pr-2">
                            <span className="svg-icon svg-icon-lg">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g id="Stockholm-icons-/-General-/-Search" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                        <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" id="Path-2" fill="#b5b5c3" fillRule="nonzero" opacity="0.3"></path>
                                        <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" id="Path" fill="#b5b5c3" fillRule="nonzero"></path>
                                    </g>
                                </svg>
                            </span>
                        </div>

                        <div>
                            <input type="text" placeholder="Search..." className="text-xs text-gray-700 outline-none focus:oultine-none" />
                        </div>

                        <div className="cursor-pointer">
                            <i className="large material-icons text-base text-gray-400">close</i>
                        </div>
                    </div>
                </form>

                <div className="toggle-search-submenu h-80 overflow-y-auto">
                    <div className="mb-4">
                        <div className="text-blue-400 text-sm font-semibold mb-3 mt-4">DOCUMENTS</div>

                        <div>
                            {Documents.map((item, i) => {
                                return  <div className="flex items-center mb-2" key={i}>
                                            <div class="symbol symbol-45 bg-transparent flex-shrink-0 mr-3">
                                                <img src={item.image} alt="document" className="w-9" />
                                            </div>

                                            <div className="flex flex-col">
                                                <Link to="#" className="block mb-0.5 font-medium text-xs text-gray-800 hover:text-blue-500">{item.title}</Link>
                                                <span className="text-xs font-medium text-gray-400">{item.author}</span>
                                            </div>
                                        </div>
                            })}
                        
                        </div>

                    </div>

                    <div className="mb-4">
                        <div className="text-blue-400 text-sm font-semibold mb-3 mt-4">MEMBERS</div>

                        <div>
                            {Members.map((item, i) => {
                                return  <div className="flex items-center mb-2" key={i}>
                                            <div class="symbol symbol-45 bg-transparent flex-shrink-0 mr-3">
                                                <img src={item.image} alt="members" className="w-9 rounded-lg" />
                                            </div>

                                            <div className="flex flex-col">
                                                <Link to="#" className="block mb-0.5 font-medium text-xs text-gray-800 hover:text-blue-500">{item.name}</Link>
                                                <span className="text-xs font-medium text-gray-400">{item.field}</span>
                                            </div>
                                        </div>
                            })}
                        
                        </div>

                        
                    </div>
                
                    <div className="mb-4">
                        <div className="text-blue-400 text-sm font-semibold mb-3 mt-4">FILES</div>

                        <div>
                            {Files.map((item, i) => {
                                return   <div className="flex items-center mb-2" key={i}>
                                            <div class="symbol symbol-45 bg-gray-100 w-9 h-9 text-center rounded-full flex-shrink-0 mr-3">
                                                <i class={`large material-icons pt-1 text-xl ${item.imageColor}`}>{item.image}</i>
                                            </div>

                                            <div className="flex flex-col">
                                                <Link to="#" className="block mb-0.5 font-medium text-xs text-gray-800 hover:text-blue-500">{item.fileName}</Link>
                                                <span className="text-xs font-medium text-gray-400">{item.fileInfo}</span>
                                            </div>
                                        </div>
                            })}

                        </div>
                    </div>
                </div>
                                
            </>
        )
    }
}

export default SearchDropDown;
