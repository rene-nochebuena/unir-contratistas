import {getSemaforoConfig} from "./configSemaforo.js";
import React from "react";

export const Footer = ({contractor}) => {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm opacity-90 mb-1">Resumen de Clasificación</p>
                    <p className="text-2xl font-bold">
                        Contratista con clasificación {getSemaforoConfig(contractor.semaforo).label}
                    </p>
                </div>
                <div className="text-right">
                    <p className="text-sm opacity-90 mb-1">ID de Contratista</p>
                    <p className="text-3xl font-bold">#{contractor.id_contratista}</p>
                </div>
            </div>
        </div>
    );
}