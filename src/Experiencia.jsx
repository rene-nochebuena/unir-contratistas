import {Clock} from "lucide-react";
import React from "react";

export const Experiencia = ({contractor}) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
                <Clock className="w-10 h-10 text-purple-600" />
                <span className="text-3xl font-bold text-slate-800">
                    {contractor.tiempo_experiencia}
                  </span>
            </div>
            <p className="text-slate-600 font-semibold">Años de Experiencia</p>
            <div className="mt-2 w-full bg-slate-200 rounded-full h-2">
                <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: `${Math.min(contractor.tiempo_experiencia * 2.5, 100)}%` }}
                ></div>
            </div>
        </div>
    );
}