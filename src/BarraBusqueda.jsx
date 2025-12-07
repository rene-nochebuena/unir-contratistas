import {Search} from "lucide-react";
import React from "react";

export const BarraBusqueda = ({handleSearch, searchId, setSearchId}) => {
    return (
        <div className="flex gap-4">
            <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5"/>
                <input
                    type="number"
                    placeholder="Ingrese el ID del contratista (1-15)"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                />
            </div>
            <button
                onClick={handleSearch}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center gap-2"
            >
                <Search className="w-5 h-5"/>
                Buscar
            </button>
        </div>
    );
}