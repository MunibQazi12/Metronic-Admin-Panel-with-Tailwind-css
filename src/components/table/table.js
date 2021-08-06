import React, {Component} from 'react';
import './table.css';

class Table extends Component {
    render () {

        return (
            <>
                <div>
                    <div class="grid grid-flow-row lg:grid-cols-1 grid-rows-1 gap-4">
                        <div className="card card-custom gutter-b poppins rounded-lg bg-white border-0 overflow-x-auto mb-5">
                            <div className="px-8 py-9 border-b border-gray-300 text-gray-700 text-base font-semibold">Customized Tables</div>
                            <div className="px-8 py-9">
                                <span className="text-xs text-gray-900">Here is an example of customizing the component.</span>
                                <div className="w-full mt-6 mb-4 border-b border-gray-100"></div>
                            
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse">
                                        <thead className="">
                                            <tr>
                                                <th className="bg-black	text-white font-medium leading-6 text-left text-xs p-4 border-b border-gray-300" scope="col">Dessert (100g serving)</th>
                                                <th className="bg-black	text-white font-medium leading-6 text-left text-xs p-4 border-b border-gray-300" scope="col">Calories</th>
                                                <th className="bg-black	text-white font-medium leading-6 text-left text-xs p-4 border-b border-gray-300" scope="col">Fat (g)</th>
                                                <th className="bg-black	text-white font-medium leading-6 text-left text-xs p-4 border-b border-gray-300" scope="col">Carbs (g)</th>
                                                <th className="bg-black	text-white font-medium leading-6 text-left text-xs p-4 border-b border-gray-300" scope="col">Protein (g)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-gray-50">
                                                <td className="text-sm text-gray-800 border-b border-gray-300 p-4">Frozen yoghurt</td>
                                                <td className="text-sm text-gray-800 border-b border-gray-300 p-4">Frozen yoghurt</td>
                                                <td className="text-sm text-gray-800 border-b border-gray-300 p-4">Frozen yoghurt</td>
                                                <td className="text-sm text-gray-800 border-b border-gray-300 p-4">Frozen yoghurt</td>
                                                <td className="text-sm text-gray-800 border-b border-gray-300 p-4">Frozen yoghurt</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="text-sm text-gray-800 border-b border-gray-300 p-4">Frozen yoghurt</td>
                                                <td className="text-sm text-gray-800 border-b border-gray-300 p-4">Frozen yoghurt</td>
                                                <td className="text-sm text-gray-800 border-b border-gray-300 p-4">Frozen yoghurt</td>
                                                <td className="text-sm text-gray-800 border-b border-gray-300 p-4">Frozen yoghurt</td>
                                                <td className="text-sm text-gray-800 border-b border-gray-300 p-4">Frozen yoghurt</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="text-sm text-gray-800 border-b border-gray-300 p-4">Frozen yoghurt</td>
                                                <td className="text-sm text-gray-800 border-b border-gray-300 p-4">Frozen yoghurt</td>
                                                <td className="text-sm text-gray-800 border-b border-gray-300 p-4">Frozen yoghurt</td>
                                                <td className="text-sm text-gray-800 border-b border-gray-300 p-4">Frozen yoghurt</td>
                                                <td className="text-sm text-gray-800 border-b border-gray-300 p-4">Frozen yoghurt</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="text-sm text-gray-800 border-b border-gray-300 p-4">Frozen yoghurt</td>
                                                <td className="text-sm text-gray-800 border-b border-gray-300 p-4">Frozen yoghurt</td>
                                                <td className="text-sm text-gray-800 border-b border-gray-300 p-4">Frozen yoghurt</td>
                                                <td className="text-sm text-gray-800 border-b border-gray-300 p-4">Frozen yoghurt</td>
                                                <td className="text-sm text-gray-800 border-b border-gray-300 p-4">Frozen yoghurt</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="text-sm text-gray-800 border-b border-gray-300 p-4">Frozen yoghurt</td>
                                                <td className="text-sm text-gray-800 border-b border-gray-300 p-4">Frozen yoghurt</td>
                                                <td className="text-sm text-gray-800 border-b border-gray-300 p-4">Frozen yoghurt</td>
                                                <td className="text-sm text-gray-800 border-b border-gray-300 p-4">Frozen yoghurt</td>
                                                <td className="text-sm text-gray-800 border-b border-gray-300 p-4">Frozen yoghurt</td>
                                            </tr>

                                        </tbody>
                                    
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </>
        )
    }
}

export default Table;