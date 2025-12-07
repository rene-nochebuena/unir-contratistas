import {Building2} from "lucide-react";
import {BarraBusqueda} from "./BarraBusqueda.jsx";
import React from "react";

export const Header = ({handleSearch, searchId, setSearchId, showError}) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <div className="flex items-center gap-4 mb-6">
                <Building2 className="w-12 h-12 text-blue-600" />
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">
                        Sistema de Consulta de Contratistas
                    </h1>
                    <p className="text-slate-600 mt-1">
                        Catálogo Oficial de Obra Pública
                    </p>
                </div>
            </div>

            <BarraBusqueda searchId={searchId} handleSearch={handleSearch} setSearchId={setSearchId} />

            {showError && (
                <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
                    <p className="font-semibold">Contratista no encontrado</p>
                    <p className="text-sm">Por favor, ingrese un ID válido (1-15)</p>
                </div>
            )}
        </div>
    );
}